import React from 'react';
import { Page, useLanguage } from './App';

interface ProcessProps {
  navigate: (page: Page) => void;
}

const Process: React.FC<ProcessProps> = ({ navigate }) => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white dark:bg-background-dark cursor-pointer" id="process" onClick={() => navigate('process')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold mb-4">{t.process.title}{t.process.titleAccent}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.process.learnMore} <span className="text-primary font-bold">{t.process.learnMoreLink}</span></p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 dark:bg-gray-800 -z-10"></div>
          {t.process.homeSteps.map((step, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 border border-primary/20 group-hover:bg-primary group-hover:text-gray-900 transition-all duration-300">
                <span className="material-icons-outlined text-2xl">{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;