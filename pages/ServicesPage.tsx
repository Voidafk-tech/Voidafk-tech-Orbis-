import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/App';

const ServicesPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center">
          <h1 className="text-4xl lg:text-6xl font-display font-extrabold mb-6">{t.services.pageHeader}<span className="text-primary">{t.services.pageHeaderAccent}</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t.services.pageSubtitle}
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {t.services.deep.map((s, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg flex flex-col">
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed flex-grow">{s.details}</p>
              <ul className="space-y-3 mb-8">
                {s.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-medium">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="text-primary text-xs font-black uppercase tracking-widest hover:underline">
                {t.nav.consultation} &rarr;
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-primary/5 rounded-3xl border border-primary/10 text-center">
          <h2 className="text-2xl font-bold mb-4">{t.services.customTitle}</h2>
          <p className="text-gray-400 mb-8">{t.services.customDesc}</p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-primary text-gray-900 font-bold rounded-xl hover:scale-105 transition-transform">
            {t.services.customBtn}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;