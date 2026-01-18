import React from 'react';
import { Page, useLanguage } from './App';

interface HeroProps {
  navigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ navigate }) => {
  const { t, lang } = useLanguage();

  return (
    <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest animate-bounce">
            <span className="material-icons-outlined text-sm">payments</span>
            {t.hero.badge}
          </div>
          
          <h1 className={`font-display font-extrabold tracking-tight leading-[1.1] ${lang === 'zh' ? 'text-4xl lg:text-7xl' : 'text-5xl lg:text-8xl'}`}>
            {t.hero.title}<span className="text-primary">{t.hero.titleAccent}</span>
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed mx-auto max-w-2xl">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => navigate('pricing')}
              className="px-10 py-5 bg-primary text-gray-900 font-bold rounded-xl hover:scale-105 transition-transform text-lg shadow-lg shadow-primary/20"
            >
              {t.hero.primaryBtn}
            </button>
            <button 
              onClick={() => navigate('contact')}
              className="px-10 py-5 bg-gray-100 dark:bg-gray-800 font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-lg"
            >
              {t.hero.secondaryBtn}
            </button>
          </div>
        </div>
      </div>
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
};

export default Hero;