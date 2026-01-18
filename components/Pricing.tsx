
import React from 'react';
import { Page, useLanguage } from './App';

interface PricingProps {
  navigate: (page: Page) => void;
  showTitle?: boolean;
}

const Pricing: React.FC<PricingProps> = ({ navigate, showTitle = true }) => {
  const { t, lang } = useLanguage();

  const tiers = [
    {
      name: t.pricing.tierBasic,
      price: '800',
      description: t.pricing.descBasic,
      features: lang === 'en' ? [
        'Monthly Reconciliations',
        'Financial Statements Included',
        'GST/PST Filing',
        'Standard Reporting'
      ] : [
        '每月对账',
        '包含财务报表',
        'GST/PST 申报',
        '标准报告'
      ],
      notIncluded: lang === 'en' ? [
        'A/R & A/P Management',
        'Payroll Support',
        'Employee Tax Documents'
      ] : [
        '应收/应付账款管理',
        '薪资支持',
        '员工税务文件'
      ],
      highlight: false,
    },
    {
      name: t.pricing.tierEssential,
      price: '1,800',
      description: t.pricing.descEssential,
      features: lang === 'en' ? [
        'Weekly Updates',
        '~50 Transactions/mo',
        'Around 5 Employees Payroll',
        'Financial Statements Included',
        'Full Compliance (GST/PST/WCB)',
        'T4 / T4A / ROE Documents'
      ] : [
        '每周更新',
        '约 50 笔交易/月',
        '约 5 名员工薪资',
        '包含财务报表',
        '全面合规 (GST/PST/WCB)',
        'T4 / T4A / ROE 文件'
      ],
      notIncluded: [],
      highlight: true,
      badge: t.pricing.mostPopular
    },
    {
      name: t.pricing.tierFullCycle,
      price: '2,500',
      suffix: '+',
      description: t.pricing.descFullCycle,
      features: lang === 'en' ? [
        'Real-time / High-Frequency',
        'High Volume A/R & A/P Support',
        'Around 15 Employees Payroll',
        'Financial Statements Included',
        'Full Compliance (GST/PST/WCB)',
        'T4 / T4A / ROE Documents'
      ] : [
        '实时/高频率更新',
        '高业务量 A/R & A/P 支持',
        '约 15 名员工薪资',
        '包含财务报表',
        '全面合规 (GST/PST/WCB)',
        'T4 / T4A / ROE 文件'
      ],
      notIncluded: [],
      highlight: false,
    }
  ];

  return (
    <section className="py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">{t.pricing.title}<span className="text-primary">{t.pricing.titleAccent}</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {t.pricing.subtitle}
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                tier.highlight 
                ? 'bg-gray-900 border-primary shadow-2xl shadow-primary/10 scale-105 z-10' 
                : 'bg-white dark:bg-gray-800/50 border-gray-100 dark:border-gray-700 hover:border-primary/50'
              }`}
            >
              {tier.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-gray-900 text-xs font-black uppercase tracking-widest py-1 px-4 rounded-full">
                  {tier.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${tier.highlight ? 'text-white' : ''}`}>{tier.name}</h3>
                <p className="text-gray-400 text-sm">{tier.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className={`text-5xl font-extrabold ${tier.highlight ? 'text-primary' : 'text-gray-900 dark:text-white'}`}>
                  ${tier.price}
                </span>
                <span className="text-gray-400 font-medium">{t.pricing.mo}{tier.suffix}</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="material-icons-outlined text-primary text-lg">check_circle</span>
                    <span className={tier.highlight ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}>{f}</span>
                  </li>
                ))}
                {tier.notIncluded.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm opacity-40 grayscale">
                    <span className="material-icons-outlined text-lg">cancel</span>
                    <span className={tier.highlight ? 'text-gray-400' : 'text-gray-500'}>{f}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => navigate('contact')}
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  tier.highlight 
                  ? 'bg-primary text-gray-900 hover:brightness-110 shadow-lg shadow-primary/20' 
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-gray-900'
                }`}
              >
                {t.pricing.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 text-center text-xs text-gray-500 uppercase tracking-widest">
          <p>{t.pricing.note1}</p>
          <p>{t.pricing.note2}</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
