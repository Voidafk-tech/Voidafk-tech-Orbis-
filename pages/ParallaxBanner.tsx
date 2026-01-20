import React from 'react';

const ParallaxBanner: React.FC = () => {
  return (
    <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale opacity-40 dark:opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
      </div>
      
      <div className="relative h-full z-10 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-6xl font-display font-black text-[#1A1A1A] dark:text-white uppercase tracking-tighter">
          Efficiency <span className="text-primary">Redefined.</span>
        </h2>
        <div className="mt-4 w-24 h-1.5 bg-primary rounded-full"></div>
      </div>
    </section>
  );
};

export default ParallaxBanner;