import React, { useState } from 'react';
import { useLanguage } from './App';

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white dark:bg-background-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-center mb-12">{t.faq.title}</h2>
        <div className="space-y-4">
          {t.faq.items.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden">
              <button 
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold">{faq.q}</span>
                <span className={`material-icons-outlined transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {openIndex === idx && (
                <div className="p-8 pt-8 text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-800/20">
                  <div className="mt-2">
                    {faq.a}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;