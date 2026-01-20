import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './App';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-display font-bold">{t.about.whyTitle}<br/><span className="text-primary">{t.about.whyAccent}</span></h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            {t.about.whyDesc}
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4 items-start text-left max-w-md mx-auto">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="material-icons-outlined text-primary text-xs font-bold" aria-hidden="true">done</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">{t.about.proactiveTitle}</h3>
                <p className="text-sm text-gray-400">{t.about.proactiveDesc}</p>
              </div>
            </div>
            
            <Link 
              to="/about"
              className="mt-4 px-8 py-4 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-xl font-bold hover:brightness-110 transition-all shadow-lg"
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