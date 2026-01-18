import React from 'react';
import { Page, useLanguage } from '../components/App';

interface ServicesPageProps {
  navigate: (page: Page) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ navigate }) => {
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

        <div className="grid md:grid-cols-3 gap-12">
          {t.services.deep.map((s, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-10 rounded-3xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{s.details}</p>
              <ul className="space-y-3">
                {s.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-icons-outlined text-primary">check</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-primary/5 rounded-3xl border border-primary/10 text-center">
          <h2 className="text-2xl font-bold mb-4">{t.services.customTitle}</h2>
          <p className="text-gray-400 mb-8">{t.services.customDesc}</p>
          <button onClick={() => navigate('contact')} className="px-8 py-4 bg-primary text-gray-900 font-bold rounded-xl hover:scale-105 transition-transform">
            {t.services.customBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;