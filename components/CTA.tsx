import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './App';

const CTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24" id="consultation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 dark:bg-gray-800 rounded-3xl p-12 lg:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white max-w-2xl mx-auto">
              {t.cta.title}
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-center">
              {t.cta.subtitle}
            </p>
            <div className="flex justify-center">
              <Link 
                to="/contact"
                className="px-10 py-5 bg-primary text-gray-900 font-extrabold rounded-2xl hover:scale-105 transition-transform text-lg shadow-xl shadow-primary/20"
              >
                {t.cta.btn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;