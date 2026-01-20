import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './App';

interface PricingProps {
  showTitle?: boolean;
}

const Pricing: React.FC<PricingProps> = ({ showTitle = true }) => {
  const { t } = useLanguage();

  const coreTiers = [
    {
      name: t.pricing.monthly.name,
      price: t.pricing.monthly.price,
      period: t.pricing.mo,
      desc: t.pricing.monthly.desc,
      items: t.pricing.monthly.items,
      featured: true
    },
    {
      name: t.pricing.catchup.name,
      price: t.pricing.catchup.price,
      period: t.pricing.once || '',
      desc: t.pricing.catchup.desc,
      items: t.pricing.catchup.items,
    },
    {
      name: t.pricing.quarterly.name,
      price: t.pricing.quarterly.price,
      period: t.pricing.qtr,
      desc: t.pricing.quarterly.desc,
      items: t.pricing.quarterly.items,
    },
    {
      name: t.pricing.yearly.name,
      price: t.pricing.yearly.price,
      period: t.pricing.yr,
      desc: t.pricing.yearly.desc,
      items: t.pricing.yearly.items,
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-background-dark" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#1A1A1A] dark:text-white">
              {t.pricing.title}<span className="text-primary">{t.pricing.titleAccent}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-sans">
              {t.pricing.subtitle}
            </p>
          </div>
        )}

        {/* Core Bookkeeping Plans with Aggressive Green Pop Styling */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {coreTiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-[2rem] overflow-hidden flex flex-col shadow-2xl transition-all duration-300 group hover:translate-y-[-4px] border-2 ${
                tier.featured 
                ? 'bg-primary/5 dark:bg-primary/10 border-primary ring-4 ring-primary/20 scale-105 z-10' 
                : 'bg-white dark:bg-gray-800/80 border-primary/30 dark:border-primary/20'
              }`}
            >
              {tier.featured && (
                <div className="bg-primary text-gray-900 text-[10px] font-black uppercase tracking-widest py-1 px-4 absolute top-4 right-4 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-black text-[#1A1A1A] dark:text-white mb-4">
                  {tier.name}
                </h3>
                
                <p className="text-[#333333] dark:text-gray-400 mb-6 leading-relaxed text-sm font-sans font-medium">
                  {tier.desc}
                </p>

                {tier.items && (
                  <ul className="space-y-3 mb-10 ml-6 list-disc text-[#1A1A1A] dark:text-gray-200 font-sans text-xs">
                    {tier.items.map((item, i) => (
                      <li key={i} className="pl-1">{item}</li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-6 border-t border-primary/20 dark:border-white/10">
                  <p className="text-lg font-display italic font-bold text-[#1A1A1A] dark:text-white mb-6">
                    {t.pricing.startingAt} <span className="text-2xl text-primary">${tier.price}</span> {tier.period}
                  </p>
                  <Link 
                    to="/contact"
                    className={`inline-block w-full text-center px-6 py-3 font-display font-black rounded-full transition-all border-2 uppercase tracking-wider text-xs shadow-md ${
                      tier.featured
                      ? 'bg-primary text-gray-900 border-primary hover:brightness-110'
                      : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-primary/50 hover:bg-primary hover:text-gray-900 hover:border-primary'
                    }`}
                  >
                    {t.pricing.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Section Header */}
        <div className="mt-40 text-center mb-16">
          <h2 className="text-4xl font-display font-black text-[#1A1A1A] dark:text-white mb-4">{t.pricing.additionalTitle}</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg font-sans">
            {t.pricing.additionalSubtitle}
          </p>
        </div>

        {/* 2x2 Grid + Launchpad Card for Additional Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Business Launchpad Card - Unique CTA 'Contact' */}
          <div className="relative bg-[#CFD9D6] dark:bg-gray-800/80 rounded-[2rem] overflow-hidden flex flex-col shadow-xl border border-black/5 dark:border-white/5 group hover:translate-y-[-4px] transition-all duration-300">
            <div className="p-8 lg:p-12 flex flex-col flex-grow">
              <h3 className="text-2xl font-display font-black text-[#1A1A1A] dark:text-white mb-4">
                {t.pricing.launchpad.name}
              </h3>
              <p className="text-[#333333] dark:text-gray-300 mb-8 leading-relaxed text-lg font-sans font-medium">
                {t.pricing.launchpad.desc}
              </p>
              <ul className="space-y-2 mb-10 ml-6 list-disc text-[#1A1A1A] dark:text-gray-200 font-sans text-sm">
                {t.pricing.launchpad.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="mt-auto pt-8 border-t border-black/10 dark:border-white/10">
                <p className="text-lg font-display italic font-bold text-[#1A1A1A] dark:text-white mb-6">
                  {t.pricing.startingAt} <span className="text-2xl text-primary">${t.pricing.launchpad.price}</span> {t.pricing.once}
                </p>
                <Link 
                  to="/contact"
                  className="inline-block px-10 py-3.5 bg-gray-900 dark:bg-gray-700 text-white font-display font-black rounded-full hover:brightness-110 transition-all border border-black/10 uppercase tracking-wider text-sm shadow-md"
                >
                  {t.pricing.launchpad.cta}
                </Link>
              </div>
            </div>
          </div>

          {/* Map rest of additional services */}
          {t.pricing.additional.map((service, idx) => (
            <div key={idx} className="relative bg-[#CFD9D6] dark:bg-gray-800/80 rounded-[2rem] overflow-hidden flex flex-col shadow-xl border border-black/5 dark:border-white/5 group hover:translate-y-[-4px] transition-all duration-300">
              <div className="p-8 lg:p-12 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-black text-[#1A1A1A] dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-[#333333] dark:text-gray-300 mb-8 leading-relaxed text-lg font-sans font-medium">
                  {service.desc}
                </p>
                <div className="mt-auto pt-8 border-t border-black/10 dark:border-white/10">
                  <Link 
                    to="/contact"
                    className="inline-block px-10 py-3.5 bg-primary text-gray-900 font-display font-black rounded-full hover:brightness-110 transition-all border border-black/10 uppercase tracking-wider text-sm shadow-md"
                  >
                    {t.pricing.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;