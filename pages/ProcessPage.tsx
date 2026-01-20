import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/App';

const ProcessPage: React.FC = () => {
  const { t } = useLanguage();

  const stepSvgs = [
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  ];

  return (
    <div className="py-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <h1 className="text-4xl lg:text-6xl font-display font-extrabold mb-6">{t.process.title}<span className="text-primary">{t.process.titleAccent}</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            {t.process.subtitle}
          </p>
        </header>

        <div className="space-y-12">
          {t.process.steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-10 items-center bg-gray-50 dark:bg-gray-800/40 p-8 rounded-3xl border border-gray-100 dark:border-gray-700">
              <div className="text-6xl font-extrabold text-primary/20 shrink-0">{step.num}</div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                {stepSvgs[idx]}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/contact" className="inline-block px-10 py-5 bg-primary text-gray-900 font-extrabold rounded-2xl hover:brightness-110 transition-all">
            {t.process.actionBtn}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;