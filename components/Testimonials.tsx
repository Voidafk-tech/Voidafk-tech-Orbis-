
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Orbis transformed our payroll. What used to take days now happens automatically with zero errors.",
      author: "Sarah Jenkins",
      role: "CEO, TechFlow Solutions",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      quote: "Their WCB compliance expertise saved us from a major audit headache. Worth every penny.",
      author: "Marcus Thorne",
      role: "Founder, Thorne Logistics",
      avatar: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      quote: "Strategic, responsive, and incredibly professional. They feel like a core part of our team.",
      author: "Elena Rodriguez",
      role: "CFO, GreenScale Inc.",
      avatar: "https://i.pravatar.cc/150?u=elena"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-center mb-16">Trusted by Industry Leaders</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex gap-1 text-primary mb-4">
                {[...Array(5)].map((_, i) => <span key={i} className="material-icons-outlined text-sm">star</span>)}
              </div>
              <p className="text-gray-500 dark:text-gray-400 italic mb-8">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full grayscale" />
                <div>
                  <h4 className="font-bold text-sm">{t.author}</h4>
                  <p className="text-xs text-primary">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
