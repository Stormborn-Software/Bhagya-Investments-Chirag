
import React from 'react';
import { FiTrendingUp, FiDollarSign, FiShield, FiCpu } from 'react-icons/fi';

const servicesData = [
  {
    icon: <FiTrendingUp className="w-10 h-10 text-performance-green" />,
    title: 'Stock & Equity Trading',
    description: 'Dive deep into the equity markets with our comprehensive stock trading advisory. We provide data-driven analysis, identifying high-growth opportunities and undervalued assets. Our strategies are built on a foundation of rigorous technical and fundamental analysis, designed to optimize your portfolio for both short-term gains and long-term value creation. We monitor market trends, corporate actions, and economic indicators to provide you with timely and actionable insights.',
    cta: 'Explore Stocks',
    link: '/services/stocks',
  },
  {
    icon: <FiDollarSign className="w-10 h-10 text-performance-green" />,
    title: 'Crypto & Digital Assets',
    description: 'The world of digital assets is volatile and complex. Our expert team helps you navigate the crypto markets with confidence. We offer analysis on major cryptocurrencies like Bitcoin and Ethereum, as well as promising altcoins. Our service includes risk management protocols, portfolio diversification strategies, and insights into the underlying blockchain technology and market sentiment, helping you make informed decisions in this fast-evolving space.',
    cta: 'Explore Crypto',
    link: '/services/crypto',
  },
  {
    icon: <FiCpu className="w-10 h-10 text-performance-green" />,
    title: 'Derivatives & Options',
    description: 'Leverage the power of derivatives to enhance your trading strategy. We specialize in options, futures, and other complex financial instruments. Our guidance helps you use derivatives for various purposes, from speculating on market direction with calculated risk to hedging your existing positions against adverse movements. We demystify complex strategies like spreads, straddles, and collars, making them accessible and effective tools in your arsenal.',
    cta: 'Explore Derivatives',
    link: '/services/derivatives',
  },
  {
    icon: <FiShield className="w-10 h-10 text-performance-green" />,
    title: 'Advanced Hedging Strategies',
    description: 'Protecting your capital is as important as growing it. Our advanced hedging services are designed to insulate your portfolio from market volatility and unforeseen downturns. We employ sophisticated strategies using options and other derivatives to create a robust defense for your investments. Whether you are a long-term investor or an active trader, we tailor hedging solutions that align with your risk tolerance and financial objectives, ensuring peace of mind.',
    cta: 'Explore Hedging',
    link: '/services/hedging',
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-midnight-navy">
      {/* Hero Section */}
      <section className="py-20 text-center bg-deep-navy">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-cloud-white">
            Our Investment Services
          </h1>
          <p className="mt-4 text-lg text-slate-grey max-w-2xl mx-auto">
            Tailored strategies across diverse market segments.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {servicesData.map((service, index) => (
              <div key={index} className="bg-deep-navy rounded-lg shadow-xl p-8 flex flex-col">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h2 className="ml-4 text-2xl font-bold font-montserrat text-cloud-white">{service.title}</h2>
                </div>
                <p className="text-slate-grey flex-grow mb-6">{service.description}</p>
                <button className="mt-auto bg-performance-green text-midnight-navy px-6 py-3 rounded-md font-montserrat font-medium self-start hover:bg-opacity-90 transition-colors">
                  {service.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
