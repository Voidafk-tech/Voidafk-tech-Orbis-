import React from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="py-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl lg:text-6xl font-display font-extrabold mb-6">Let's <span className="text-primary">Connect.</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you're looking for a full accounting overhaul or just specialized payroll support, we're here to help.
          </p>
        </header>
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;