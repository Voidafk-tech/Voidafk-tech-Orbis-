import React, { useState, useEffect, createContext, useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../pages/Home';
import ServicesPage from '../pages/ServicesPage';
import ProcessPage from '../pages/ProcessPage';
import ContactPage from '../pages/ContactPage';
import GrowthPage from '../pages/GrowthPage';
import PricingPage from '../pages/PricingPage';
import AboutPage from '../pages/AboutPage';
import PrivacyPage from '../pages/PrivacyPage';
import TermsPage from '../pages/TermsPage';
import { translations } from '../translations';

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

// Map internal page names to URL paths
export const PAGE_TO_PATH = {
  home: '/',
  services: '/services',
  process: '/process',
  contact: '/contact',
  growth: '/growth-strategy',
  pricing: '/pricing',
  privacy: '/privacy-policy',
  terms: '/terms-of-service',
  about: '/about'
} as const;

export type Page = keyof typeof PAGE_TO_PATH;

const App: React.FC = () => {
  const location = useLocation();
  
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lang') as Language) || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);
    // Ensure dark class is present
    document.documentElement.classList.add('dark');
  }, [lang]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className={`min-h-screen flex flex-col bg-background-dark text-gray-100 transition-colors duration-300 ${lang === 'zh' ? 'font-zh tracking-tight' : 'font-sans'}`}>
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/growth-strategy" element={<GrowthPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms-of-service" element={<TermsPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;