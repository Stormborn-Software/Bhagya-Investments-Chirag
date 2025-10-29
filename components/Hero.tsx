
import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-midnight-navy text-cloud-white py-20 md:py-32">
      {/* Abstract background animation placeholder */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        {/* In a real project, you would replace this with a more sophisticated animation component */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 rounded-full bg-performance-green/10 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full bg-electric-blue/10 filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold font-montserrat leading-tight">
          Unlock Your Market Potential.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-grey max-w-3xl mx-auto font-roboto">
          Expert guidance in Stocks, Crypto, and Derivatives with intelligent hedging strategies. We help you hedge smart and trade wise.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-performance-green text-midnight-navy px-8 py-3 rounded-md font-montserrat font-medium hover:bg-opacity-90 transition-colors">
            Open Account
          </button>
          <button className="border border-performance-green text-performance-green px-8 py-3 rounded-md font-montserrat font-medium hover:bg-performance-green hover:text-midnight-navy transition-colors">
            Join WhatsApp Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
