import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, PAGE_TO_PATH } from './App';
import { LogoGraphic } from './Navbar';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <Link 
              to="/"
              className="cursor-pointer inline-block outline-none text-left" 
              aria-label="Back to home"
            >
              <LogoGraphic className="h-16 w-16" />
            </Link>
            <p className="text-gray-400 max-w-sm">
              {t.footer.desc}
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6">{t.footer.quickLinks}</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-primary transition-colors text-left">{t.nav.services}</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors text-left">{t.nav.pricing}</Link></li>
              <li><Link to="/process" className="hover:text-primary transition-colors text-left">{t.nav.process}</Link></li>
              <li><Link to="/growth-strategy" className="hover:text-primary transition-colors text-left">{t.nav.growth}</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">{t.footer.support}</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/contact" className="hover:text-primary transition-colors text-left">{t.nav.contact}</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors text-left">{t.footer.privacy}</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-primary transition-colors text-left">{t.footer.terms}</Link></li>
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