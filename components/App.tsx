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
    
    // Update document title for SEO on route changes
    const baseTitle = lang === 'en' ? 'Orbis Accounting' : 'Orbis 会计';
    const titles: Record<string, string> = {
      '/': lang === 'en' ? 'Remote Bookkeeping & Fractional Accounting' : '远程簿记与专业会计服务',
      '/services': lang === 'en' ? 'Bookkeeping & Payroll Services' : '簿记与薪资服务',
      '/pricing': lang === 'en' ? 'Transparent Accounting Plans' : '透明的会计方案',
      '/process': lang === 'en' ? 'Our Onboarding Process' : '我们的入职流程',
      '/contact': lang === 'en' ? 'Free Accounting Quote' : '获取免费报价',
      '/about': lang === 'en' ? 'About Orbis Remote Experts' : '关于 Orbis 远程专家',
      '/growth-strategy': lang === 'en' ? 'Financial Strategy for Scaling' : '扩展业务的财务战略',
    };
    
    document.title = `${titles[location.pathname] || baseTitle} | ${baseTitle}`;
  }, [location.pathname, lang]);

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