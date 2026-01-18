import React from 'react';
import { Page, useLanguage } from '../components/App';

interface GrowthPageProps {
  navigate: (page: Page) => void;
}

const GrowthPage: React.FC<GrowthPageProps> = ({ navigate }) => {
  const { t } = useLanguage();

  return (
    <div className="py-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 dark:bg-gray-800 rounded-3xl p-12 lg:p-20 text-white overflow-hidden relative mb-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-8 leading-tight">{t.growth.title}<span className="text-primary">{t.growth.titleAccent}</span></h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              {t.growth.subtitle}
            </p>
            <button onClick={() => navigate('contact')} className="px-10 py-5 bg-primary text-gray-900 font-extrabold rounded-2xl hover:scale-105 transition-transform text-lg">
              {t.growth.btn}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">{t.growth.metricsTitle}</h2>
            <p className="text-gray-400">{t.growth.metricsSubtitle}</p>
            <ul className="space-y-4">
              {t.growth.metricsList.map((item, i) => (
                <li key={i} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                  <span className="material-icons-outlined text-primary">trending_up</span>
                  <span className="font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary/5 p-10 rounded-3xl border border-primary/20 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">{t.growth.journeyTitle}</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {t.growth.journeyDesc}
            </p>
            <button onClick={() => navigate('contact')} className="w-full py-4 bg-gray-900 dark:bg-white dark:text-gray-900 text-white font-bold rounded-xl transition-colors">
              {t.growth.journeyBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthPage;