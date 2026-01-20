import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Process from '../components/Process';
import ParallaxBanner from './ParallaxBanner';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Pricing from '../components/Pricing';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Pricing />
      <ParallaxBanner />
      <Process />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;