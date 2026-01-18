import React from 'react';
import { useLanguage } from '../components/App';

const TermsPage: React.FC = () => {
  const { t } = useLanguage();
  const c = t.terms;

  return (
    <div className="py-20 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 border-b border-gray-100 dark:border-gray-800 pb-8">
          <h1 className="text-4xl font-display font-extrabold mb-4">{c.title}</h1>
          <p className="text-sm text-gray-500 uppercase tracking-widest">{c.lastUpdated}</p>
        </header>

        <div className="space-y-12">
          {c.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-xl font-bold mb-4 text-primary">{section.h}</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {section.p}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-sm text-gray-500 italic">
            {c.consentNote}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;