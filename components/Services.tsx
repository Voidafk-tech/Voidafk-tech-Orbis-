
import React from 'react';
import { Page, useLanguage } from './App';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, onClick }) => (
  <div onClick={onClick} className="group cursor-pointer p-8 bg-background-light dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
      <span className="material-icons-outlined text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed mb-6">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
          <span className="material-icons-outlined text-primary text-sm">check_circle</span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

interface ServicesProps {
  navigate: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ navigate }) => {
  const { t, lang } = useLanguage();

  const services = [
    {
      icon: 'receipt_long',
      title: t.services.arap,
      description: t.services.arapDesc,
      features: lang === 'en' ? ['Invoicing & Collections', 'Vendor Reconciliation'] : ['发票与催收', '供应商对账']
    },
    {
      icon: 'verified_user',
      title: t.services.wcb,
      description: t.services.wcbDesc,
      features: lang === 'en' ? ['Quarterly Reporting', 'Audit Preparation'] : ['季度申报', '审计准备']
    },
    {
      icon: 'payments',
      title: t.services.payroll,
      description: t.services.payrollDesc,
      features: lang === 'en' ? ['Bi-weekly Processing', 'Annual T4 Issuance'] : ['双周发放处理', '年度 T4 签发']
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-bold mb-4">{t.services.title}<span className="text-primary">{t.services.titleAccent}</span></h2>
          <p className="text-gray-400">{t.services.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} onClick={() => navigate('services')} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
