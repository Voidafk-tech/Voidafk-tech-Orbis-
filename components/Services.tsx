import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './App';

interface ServiceCardProps {
  svg: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ svg, title, description, features }) => (
  <Link 
    to="/services" 
    aria-label={`Learn more about our ${title} services`}
    className="group block p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-primary/50 hover:shadow-xl transition-all duration-300 outline-none"
  >
    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
      {svg}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed mb-6">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
          <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
  </Link>
);

const Services: React.FC = () => {
  const { t, lang } = useLanguage();

  const services = [
    {
      svg: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      title: t.services.arap,
      description: t.services.arapDesc,
      features: lang === 'en' ? ['Invoicing & Collections', 'Vendor Reconciliation'] : ['发票与催收', '供应商对账']
    },
    {
      svg: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      title: t.services.wcb,
      description: t.services.wcbDesc,
      features: lang === 'en' ? ['Quarterly Reporting', 'Audit Preparation'] : ['季度申报', '审计准备']
    },
    {
      svg: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: t.services.payroll,
      description: t.services.payrollDesc,
      features: lang === 'en' ? ['Bi-weekly Processing', 'Annual T4 Issuance'] : ['双周发放处理', '年度 T4 签发']
    }
  ];

  return (
    <section className="py-24 bg-gray-900/50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-bold mb-4">{t.services.title}<span className="text-primary">{t.services.titleAccent}</span></h2>
          <p className="text-gray-400">{t.services.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;