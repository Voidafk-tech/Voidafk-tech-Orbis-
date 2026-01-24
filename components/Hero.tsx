import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './App';

const Hero: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8 flex flex-col items-center">
          <h1 className={`font-display font-extrabold tracking-tight leading-[1.1] ${lang === 'zh' ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-3xl sm:text-4xl lg:text-5xl'} text-white`}>
            {t.hero.title}<span className="text-primary">{t.hero.titleAccent}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mx-auto max-w-3xl text-center block w-full">
            {t.hero.subtitle_part1}
            <span className="text-primary font-bold">{t.hero.subtitle_price}</span>
            {t.hero.subtitle_part2}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6 w-full">
            <Link 
              to="/pricing"
              className="px-10 py-4 bg-primary text-gray-900 font-black rounded-2xl hover:scale-105 transition-transform text-base shadow-xl shadow-primary/20 uppercase tracking-wider"
            >
              {t.hero.primaryBtn}
            </Link>
            <Link 
              to="/contact"
              className="px-10 py-4 bg-white text-gray-900 font-black rounded-2xl hover:bg-gray-100 transition-colors text-base uppercase tracking-wider"
            >
              {t.hero.secondaryBtn}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[140px]"></div>
      </div>
    </section>
  );
};

export default Hero;