
import React from 'react';
import { useLanguage } from './App';

const Stats: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '10+', label: t.stats.exp },
    { value: '10+', label: t.stats.clients },
    { value: '100%', label: t.stats.accuracy },
    { value: '$10M+', label: t.stats.managed },
  ];

  return (
    <section className="py-20 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl font-extrabold font-display text-primary mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
