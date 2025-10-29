
import React from 'react';
import { FiMessageSquare, FiClipboard, FiTrendingUp } from 'react-icons/fi';

const steps = [
  {
    icon: <FiMessageSquare className="w-12 h-12 text-performance-green" />,
    title: 'Step 1: Consultation',
    description: 'We start with a deep dive into your financial goals and risk appetite.',
  },
  {
    icon: <FiClipboard className="w-12 h-12 text-performance-green" />,
    title: 'Step 2: Strategy',
    description: 'We craft a personalized investment and hedging strategy tailored to you.',
  },
  {
    icon: <FiTrendingUp className="w-12 h-12 text-performance-green" />,
    title: 'Step 3: Execution',
    description: 'We execute the plan with precision and provide continuous monitoring.',
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-deep-navy py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center font-montserrat mb-12">
          Your Path to Smarter Investing
        </h2>
        <div className="relative">
          {/* Dotted line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-grey opacity-30 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center bg-midnight-navy p-8 rounded-lg shadow-xl z-10">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold font-montserrat mb-2">{step.title}</h3>
                <p className="text-slate-grey">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
