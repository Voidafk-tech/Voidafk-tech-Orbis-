import React from 'react';
import { Link } from 'react-router-dom';
import Pricing from '../components/Pricing';
import { useLanguage } from '../components/App';

const PricingPage: React.FC = () => {
  const { t } = useLanguage();
  const c = t.pricingPage;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="py-20 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-6 leading-tight text-gray-900 dark:text-white">
            {c.headerTitle}<span className="text-primary">{c.headerAccent}</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-sans">
            {c.headerSubtitle}
          </p>
        </div>
      </header>

      <Pricing showTitle={false} />

      <section className="py-24 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-[#CFD9D6] dark:bg-gray-800/80 p-12 rounded-[2rem] border border-black/5 dark:border-white/5 shadow-xl">
              <h3 className="text-3xl font-display font-black mb-6 text-gray-900 dark:text-white">{c.remoteTitle}</h3>
              <p className="text-[#333333] dark:text-gray-300 leading-relaxed mb-8 font-sans text-lg">
                {c.remoteDesc}
              </p>
              <ul className="space-y-4">
                {c.remoteList.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-display font-bold text-gray-900 dark:text-white">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-display font-black mb-6 text-gray-900 dark:text-white">{c.customTitle}</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8 text-lg font-sans leading-relaxed">
                {c.customDesc}
              </p>
              <Link 
                to="/contact"
                className="inline-block px-8 py-4 bg-primary text-gray-900 font-display font-black rounded-xl hover:scale-105 transition-transform shadow-xl uppercase tracking-wider text-sm"
              >
                {c.customBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;