import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './App';

const Process: React.FC = () => {
  const { t } = useLanguage();

  const homeSteps = [
    { 
      title: t.process.homeSteps[0].title, 
      description: t.process.homeSteps[0].description, 
      svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> 
    },
    { 
      title: t.process.homeSteps[1].title, 
      description: t.process.homeSteps[1].description, 
      svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg> 
    },
    { 
      title: t.process.homeSteps[2].title, 
      description: t.process.homeSteps[2].description, 
      svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> 
    },
    { 
      title: t.process.homeSteps[3].title, 
      description: t.process.homeSteps[3].description, 
      svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg> 
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-background-dark" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/process" className="block text-center mb-16 group outline-none">
          <h2 className="text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">{t.process.title}{t.process.titleAccent}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.process.learnMore} <span className="text-primary font-bold group-hover:underline">{t.process.learnMoreLink}</span></p>
        </Link>
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 dark:bg-gray-800 -z-10"></div>
          {homeSteps.map((step, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 border border-primary/20 group-hover:bg-primary group-hover:text-gray-900 transition-all duration-300">
                {step.svg}
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