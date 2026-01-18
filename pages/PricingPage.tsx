import React from 'react';
import Pricing from '../components/Pricing';
import { Page, useLanguage } from '../components/App';

interface PricingPageProps {
  navigate: (page: Page) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ navigate }) => {
  const { t } = useLanguage();
  const c = t.pricingPage;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="py-20 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-6 leading-tight">
            {c.headerTitle}<span className="text-primary">{c.headerAccent}</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {c.headerSubtitle}
          </p>
        </div>
      </header>

      <Pricing navigate={navigate} showTitle={false} />

      <section className="py-24 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-primary/5 p-12 rounded-[2rem] border border-primary/20">
              <h3 className="text-3xl font-bold mb-6">{c.remoteTitle}</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                {c.remoteDesc}
              </p>
              <ul className="space-y-4">
                {c.remoteList.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold">
                    <span className="material-icons-outlined text-primary">done_all</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">{c.customTitle}</h2>
              <p className="text-gray-400 mb-8 text-lg">
                {c.customDesc}
              </p>
              <button 
                onClick={() => navigate('contact')}
                className="px-8 py-4 bg-gray-900 dark:bg-white dark:text-gray-900 text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-xl"
              >
                {c.customBtn}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;