import React from 'react';
import { Page, useLanguage } from '../components/App';

interface AboutPageProps {
  navigate: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  const { t } = useLanguage();

  return (
    <div className="py-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded mb-6">
              {t.about.badge}
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-8 leading-tight">
              {t.about.title}<span className="text-primary">{t.about.titleAccent}</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-6">
              {t.about.desc1}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {t.about.desc2}
            </p>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10"></div>
             <img 
              alt="Professional business environment" 
              className="rounded-3xl shadow-2xl border-4 border-white dark:border-gray-800 aspect-[4/3] object-cover" 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            />
          </div>
        </div>

        {/* Remote Advantage Section */}
        <div className="py-24 border-y border-gray-100 dark:border-gray-800 my-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-8">{t.about.remoteTitle}</h2>
            <p className="text-gray-400 leading-relaxed text-lg mb-12">
              {t.about.remoteDesc}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.about.icons.map((item, i) => (
                <div key={i} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                  <span className="material-icons-outlined text-primary mb-3 text-3xl">{item.icon}</span>
                  <div className="text-xs font-bold uppercase tracking-widest">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center py-20">
          <div>
            <h4 className="text-4xl font-extrabold text-primary mb-2">10+</h4>
            <p className="text-sm uppercase tracking-widest text-gray-400">{t.stats.exp}</p>
          </div>
          <div>
            <h4 className="text-4xl font-extrabold text-primary mb-2">10+</h4>
            <p className="text-sm uppercase tracking-widest text-gray-400">{t.stats.clients}</p>
          </div>
          <div>
            <h4 className="text-4xl font-extrabold text-primary mb-2">$10M+</h4>
            <p className="text-sm uppercase tracking-widest text-gray-400">{t.stats.managed}</p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">{t.about.readyTitle}</h2>
          <div className="flex gap-4 justify-center">
            <button onClick={() => navigate('pricing')} className="px-8 py-4 bg-primary text-gray-900 font-bold rounded-xl transition-all">
              {t.about.readyBtn}
            </button>
            <button onClick={() => navigate('contact')} className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-gray-900 font-bold rounded-xl transition-all">
              {t.about.meetPartners}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;