import React from 'react';
import { Page, useLanguage } from './App';
import { LogoGraphic } from './Navbar';

interface FooterProps {
  navigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const { lang, t } = useLanguage();
  
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <button 
              className="cursor-pointer block outline-none text-left" 
              onClick={() => navigate('home')}
              aria-label="Back to home"
            >
              <LogoGraphic className="h-16 w-16" />
            </button>
            <p className="text-gray-400 max-w-sm">
              {t.footer.desc}
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6">{t.footer.quickLinks}</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><button onClick={() => navigate('about')} className="hover:text-primary transition-colors text-left">{t.nav.about}</button></li>
              <li><button onClick={() => navigate('services')} className="hover:text-primary transition-colors text-left">{t.nav.services}</button></li>
              <li><button onClick={() => navigate('process')} className="hover:text-primary transition-colors text-left">{t.nav.process}</button></li>
              <li><button onClick={() => navigate('growth')} className="hover:text-primary transition-colors text-left">{t.nav.growth}</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">{t.footer.support}</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><button onClick={() => navigate('contact')} className="hover:text-primary transition-colors text-left">{t.nav.contact}</button></li>
              <li><button onClick={() => navigate('privacy')} className="hover:text-primary transition-colors text-left">{t.footer.privacy}</button></li>
              <li><button onClick={() => navigate('terms')} className="hover:text-primary transition-colors text-left">{t.footer.terms}</button></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2026 Orbis Accounting. {t.footer.rights}</p>
          <div className="flex gap-4">
            <span>Modern Lime Variant</span>
            <span className="w-px h-3 bg-gray-200 dark:bg-gray-800"></span>
            <span>v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;