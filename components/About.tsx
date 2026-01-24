import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './App';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background-dark" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-white leading-tight">
            {t.about.whyTitle}<span className="text-primary">{t.about.whyAccent}</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-xl font-medium text-center">
            {t.about.whyDesc}
          </p>
          <div className="flex flex-col items-center gap-6 pt-4">
            <div className="flex gap-4 items-start text-left max-w-md mx-auto">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-xs font-bold" aria-hidden="true">done</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">{t.about.proactiveTitle}</h3>
                <p className="text-sm text-gray-500">{t.about.proactiveDesc}</p>
              </div>
            </div>
            
            <Link 
              to="/about"
              className="mt-4 px-10 py-4 bg-white text-gray-900 rounded-2xl font-black hover:brightness-110 transition-all shadow-lg uppercase tracking-wider text-sm"
            >
              {t.about.learnMore}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;