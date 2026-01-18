import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Process from '../components/Process';
import About from '../components/About';
import ParallaxBanner from './ParallaxBanner';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Pricing from '../components/Pricing';
import { Page } from '../components/App';

interface HomeProps {
  navigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ navigate }) => {
  return (
    <>
      <Hero navigate={navigate} />
      <Stats />
      <Services navigate={navigate} />
      <Pricing navigate={navigate} />
      <ParallaxBanner />
      <Process navigate={navigate} />
      <About navigate={navigate} />
      <FAQ />
      <CTA navigate={navigate} />
    </>
  );
};

export default Home;