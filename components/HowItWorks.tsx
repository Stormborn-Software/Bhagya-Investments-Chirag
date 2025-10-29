
import React from 'react';
import { FiMessageSquare, FiClipboard, FiTrendingUp } from 'react-icons/fi';

const steps = [
  {
    icon: <FiMessageSquare className="w-12 h-12" />,
    number: "01",
    title: 'Consultation',
    description: 'We start with a deep dive into your financial goals and risk appetite.',
  },
  {
    icon: <FiClipboard className="w-12 h-12" />,
    number: "02",
    title: 'Strategy',
    description: 'We craft a personalized investment and hedging strategy tailored to you.',
  },
  {
    icon: <FiTrendingUp className="w-12 h-12" />,
    number: "03",
    title: 'Execution',
    description: 'We execute the plan with precision and provide continuous monitoring.',
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-deep-navy py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-performance-green rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-electric-blue rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            Your Path to <span className="gradient-text">Smarter Investing</span>
          </h2>
          <p className="text-slate-grey text-lg max-w-2xl mx-auto">
            A simple, transparent process designed for your success
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-performance-green via-electric-blue to-performance-green opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card */}
                <div className="bg-midnight-navy p-8 rounded-2xl shadow-xl hover-glow transition-all duration-500 relative z-10">
                  {/* Number badge */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-performance-green to-electric-blue rounded-full flex items-center justify-center text-midnight-navy font-bold text-xl font-montserrat shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-performance-green/20 to-electric-blue/20 rounded-full flex items-center justify-center text-performance-green group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold font-montserrat mb-3 text-center group-hover:text-performance-green transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-grey text-center leading-relaxed">{step.description}</p>
                  
                  {/* Decorative corner */}
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-electric-blue/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Arrow connector for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <svg className="w-8 h-8 text-performance-green animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-10 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">
              Ready to Start Your Investment Journey?
            </h3>
            <p className="text-slate-grey mb-8">
              Let's discuss how we can help you achieve your financial goals
            </p>
            <button className="group bg-gradient-to-r from-performance-green to-electric-blue text-midnight-navy px-10 py-4 rounded-lg font-montserrat font-medium hover:shadow-lg hover:shadow-performance-green/50 transition-all duration-300 hover:scale-105">
              <span className="flex items-center justify-center">
                Schedule a Consultation
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
