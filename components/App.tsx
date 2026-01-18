import React, { useState, useEffect, createContext, useContext } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';
import Home from '../pages/Home';
import ServicesPage from '../pages/ServicesPage';
import ProcessPage from '../pages/ProcessPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import GrowthPage from '../pages/GrowthPage';
import PricingPage from '../pages/PricingPage';
import PrivacyPage from '../pages/PrivacyPage';
import TermsPage from '../pages/TermsPage';
import { translations } from '../translations';

export type Page = 'home' | 'services' | 'process' | 'about' | 'contact' | 'growth' | 'pricing' | 'privacy' | 'terms';
export type Language = 'en' | 'zh';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

// Map internal page names to URL paths used by HashRouter
export const PAGE_TO_PATH: Record<Page, string> = {
  home: '/',
  services: '/services',
  process: '/process',
  about: '/about',
  contact: '/contact',
  growth: '/growth-strategy',
  pricing: '/pricing',
  privacy: '/privacy-policy',
  terms: '/terms-of-service'
};

const App: React.FC = () => {
  const navigateHook = useNavigate();
  const location = useLocation();
  
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lang') as Language) || 'en';
    }
    return 'en';
  });

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Sync scroll on every navigation
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  const toggleTheme = () => setIsDark(prev => !prev);
  
  const navigate = (page: Page) => {
    const path = PAGE_TO_PATH[page] || '/';
    // Navigate via the router hook to maintain state without page reloads or security errors
    navigateHook(path);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className={`min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-300 ${lang === 'zh' ? 'font-zh tracking-tight' : 'font-sans'}`}>
        <Navbar navigate={navigate} />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home navigate={navigate} />} />
            <Route path="/services" element={<ServicesPage navigate={navigate} />} />
            <Route path="/process" element={<ProcessPage navigate={navigate} />} />
            <Route path="/about" element={<AboutPage navigate={navigate} />} />
            <Route path="/contact" element={<ContactPage navigate={navigate} />} />
            <Route path="/growth-strategy" element={<GrowthPage navigate={navigate} />} />
            <Route path="/pricing" element={<PricingPage navigate={navigate} />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms-of-service" element={<TermsPage />} />
            <Route path="*" element={<Home navigate={navigate} />} />
          </Routes>
        </main>
        <Footer navigate={navigate} />
        <ThemeToggle isDark={isDark} toggle={toggleTheme} />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;