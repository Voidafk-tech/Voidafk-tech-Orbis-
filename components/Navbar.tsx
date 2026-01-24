import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Page, useLanguage, PAGE_TO_PATH } from './App';

export const LogoGraphic: React.FC<{ className?: string }> = ({ className = "h-10 w-10" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Base Green Circle */}
    <circle cx="50" cy="50" r="50" fill="#82E05E" />
    
    {/* Merged Black Interior: Center + Left Cutout */}
    <circle cx="50" cy="50" r="32" fill="black" />
    <circle cx="15" cy="50" r="21" fill="black" />
    
    {/* White Focal Dot */}
    <circle cx="15" cy="50" r="9" fill="white" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  const navLinks: { name: string; page: Page; title: string }[] = [
    { name: t.nav.services, page: 'services', title: lang === 'en' ? 'Our Bookkeeping Services' : '我们的会计服务' },
    { name: t.nav.pricing, page: 'pricing', title: lang === 'en' ? 'Pricing & Plans' : '价格与方案' },
    { name: t.nav.process, page: 'process', title: lang === 'en' ? 'Our Streamlined Process' : '服务流程' },
  ];

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'zh' : 'en');
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link 
            to="/"
            className="flex items-center gap-3 group outline-none" 
            aria-label="Orbis Accounting Home"
            title="Orbis Accounting Home"
          >
            <LogoGraphic className="h-10 w-10 group-hover:scale-110 transition-transform" />
            <span className="font-display font-black text-white text-xl tracking-tighter hidden sm:block">ORBIS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === PAGE_TO_PATH[link.page];
              return (
                <Link 
                  key={link.page}
                  to={PAGE_TO_PATH[link.page]}
                  title={link.title}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary underline underline-offset-4 decoration-2' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <button 
              onClick={toggleLanguage}
              title={lang === 'en' ? 'Switch to Chinese' : '切换到英文'}
              className="text-xs font-bold px-3 py-1.5 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors uppercase"
            >
              {lang === 'en' ? '中文' : 'EN'}
            </button>

            <Link 
              to="/contact"
              title="Get a Free Accounting Quote"
              className="px-5 py-2.5 bg-primary text-gray-900 font-bold rounded-full hover:brightness-110 transition-all text-sm shadow-sm"
            >
              {t.nav.consultation}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="text-xs font-bold px-2 py-1 border border-gray-700 rounded-md"
            >
              {lang === 'en' ? '中文' : 'EN'}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background-dark border-b border-gray-800 px-4 py-6 space-y-4 shadow-xl">
          <Link 
            to="/"
            className={`block w-full text-left text-lg font-medium hover:text-primary transition-colors ${
              location.pathname === '/' ? 'text-primary' : ''
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.home}
          </Link>
          {navLinks.map((link) => (
            <Link 
              key={link.page}
              to={PAGE_TO_PATH[link.page]}
              className={`block w-full text-left text-lg font-medium hover:text-primary transition-colors ${
                location.pathname === PAGE_TO_PATH[link.page] ? 'text-primary' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            className="block w-full px-5 py-3 bg-primary text-gray-900 font-bold rounded-xl text-center shadow-lg" 
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.consultation}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;