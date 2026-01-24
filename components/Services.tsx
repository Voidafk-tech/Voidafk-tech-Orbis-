import React from 'react';
import { useLanguage } from './App';

const Services: React.FC = () => {
  const { t, lang } = useLanguage();

  const services = [
    {
      title: t.services.arap,
      desc: t.services.arapDesc,
      items: t.services.arapItems,
      icon: 'description'
    },
    {
      title: t.services.wcb,
      desc: t.services.wcbDesc,
      items: t.services.wcbItems,
      icon: 'verified_user'
    },
    {
      title: t.services.payroll,
      desc: t.services.payrollDesc,
      items: t.services.payrollItems,
      icon: 'payments'
    }
  ];

  return (
    <section className="py-24 bg-background-dark overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-4 flex flex-col items-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white leading-tight">
            {t.services.title}<span className="text-primary">{t.services.titleAccent}</span>
          </h2>
          <p className="text-lg text-gray-400 font-sans max-w-2xl mx-auto opacity-80 text-center block w-full">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-[#1A1A1A] rounded-[2rem] p-10 border border-white/5 flex flex-col transition-all duration-300 hover:border-primary/20 hover:-translate-y-1 shadow-2xl"
            >
              <div className={`mb-10 flex flex-col ${lang === 'zh' ? 'items-center text-center' : ''}`}>
                {/* Icon Circle */}
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 border border-primary/10 mx-auto md:mx-0">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                
                {/* Title and Description */}
                <h3 className="text-2xl font-display font-black text-white mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mb-8 opacity-90">
                  {service.desc}
                </p>

                {/* Checklist */}
                <ul className={`space-y-4 w-full flex flex-col ${lang === 'zh' ? 'items-center' : 'items-start'}`}>
                  {service.items.map((item, i) => (
                    <li key={i} className={`flex items-center gap-3 text-sm font-medium text-gray-300 ${lang === 'zh' ? 'justify-center w-full' : ''}`}>
                      <div className="flex-shrink-0 text-primary">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={lang === 'zh' ? 'text-center' : ''}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;