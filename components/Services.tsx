
import React from 'react';
import { FiTrendingUp, FiDollarSign, FiShield, FiCpu } from 'react-icons/fi';

const services = [
  {
    icon: <FiTrendingUp className="w-8 h-8 text-performance-green" />,
    title: 'Stock Trading',
    description: 'Strategic insights and analysis for equity markets to maximize your returns.',
  },
  {
    icon: <FiDollarSign className="w-8 h-8 text-performance-green" />,
    title: 'Crypto Assets',
    description: 'Navigate the volatile world of cryptocurrencies with our expert guidance.',
  },
  {
    icon: <FiShield className="w-8 h-8 text-performance-green" />,
    title: 'Derivatives & Hedging',
    description: 'Utilize complex instruments to manage risk and speculate on market movements.',
  },
  {
    icon: <FiCpu className="w-8 h-8 text-performance-green" />,
    title: 'Algo Trading',
    description: 'Leverage automated, data-driven strategies for high-frequency trading.',
  },
];

const Services = () => {
  return (
    <section className="bg-deep-navy py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center font-montserrat mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-midnight-navy p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out hover:shadow-2xl hover:border-t-4 hover:border-performance-green">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold font-montserrat mb-2">{service.title}</h3>
              <p className="text-slate-grey mb-4">{service.description}</p>
              <a href="#" className="text-electric-blue font-medium hover:underline">
                Learn More -&gt;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
