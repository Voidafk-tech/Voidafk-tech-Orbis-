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
    },
    {
      name: t.pricing.catchup.name,
      price: t.pricing.catchup.price,
      period: t.pricing.yr,
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

        {/* 2x2 Grid for Core Bookkeeping Plans */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {coreTiers.map((tier, idx) => (
            <div key={idx} className="relative bg-[#CFD9D6] dark:bg-gray-800/80 rounded-[2rem] overflow-hidden flex flex-col shadow-xl border border-black/5 dark:border-white/5 group hover:translate-y-[-4px] transition-all duration-300">
              <div className="p-8 lg:p-12 flex flex-col flex-grow">
                <h3 className="text-3xl font-display font-black text-[#1A1A1A] dark:text-white mb-6">
                  {tier.name}
                </h3>
                
                <p className="text-[#333333] dark:text-gray-300 mb-8 leading-relaxed text-lg font-sans font-medium">
                  {tier.desc}
                </p>

                {tier.items && (
                  <ul className="space-y-3 mb-10 ml-6 list-disc text-[#1A1A1A] dark:text-gray-200 font-sans text-sm lg:text-base">
                    {tier.items.map((item, i) => (
                      <li key={i} className="pl-2">{item}</li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-8 border-t border-black/10 dark:border-white/10">
                  <p className="text-xl font-display italic font-bold text-[#1A1A1A] dark:text-white mb-8">
                    {t.pricing.startingAt} {t.pricing.just && `${t.pricing.just} `}<span className="text-2xl">${tier.price}</span> {tier.period}
                  </p>
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

        {/* Additional Services Section Header */}
        <div className="mt-40 text-center mb-16">
          <h2 className="text-4xl font-display font-black text-[#1A1A1A] dark:text-white mb-4">{t.pricing.additionalTitle}</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg font-sans">
            {t.pricing.additionalSubtitle}
          </p>
        </div>

        {/* 2x2 Grid for Additional Services - Box Style similar to Core Plans */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {t.pricing.additional.map((service, idx) => (
            <div key={idx} className="relative bg-[#CFD9D6] dark:bg-gray-800/80 rounded-[2rem] overflow-hidden flex flex-col shadow-xl border border-black/5 dark:border-white/5 group hover:translate-y-[-4px] transition-all duration-300">
              <div className="p-8 lg:p-12 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-display font-black text-[#1A1A1A] dark:text-white">
                    {service.title}
                  </h3>
                </div>
                
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