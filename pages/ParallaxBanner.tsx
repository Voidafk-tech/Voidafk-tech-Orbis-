
import React from 'react';

const ParallaxBanner: React.FC = () => {
  return (
    <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
      {/* 
          Note: background-attachment: fixed has mixed support on mobile. 
          Using fixed background for the requested standstill effect.
      */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[20%]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/30 dark:bg-black/60"></div>
      </div>
      
      <div className="relative h-full z-10 flex items-center justify-center pointer-events-none">
        <div className="w-24 h-1 bg-primary/50 rounded-full blur-[1px]"></div>
      </div>
    </section>
  );
};

export default ParallaxBanner;
