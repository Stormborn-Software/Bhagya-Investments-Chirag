
import React from 'react';
import { FiMessageSquare, FiClipboard, FiTrendingUp } from 'react-icons/fi';

const steps = [
  {
    icon: <FiMessageSquare className="w-12 h-12" />,
    number: "01",
    title: 'Consultation',
    description: 'We start with a deep dive into your financial goals and risk appetite.',
    color: 'from-purple-500 to-pink-500',
    iconBg: 'from-purple-500/20 to-pink-500/20',
    textColor: 'text-purple-400',
  },
  {
    icon: <FiClipboard className="w-12 h-12" />,
    number: "02",
    title: 'Strategy',
    description: 'We craft a personalized investment and hedging strategy tailored to you.',
    color: 'from-cyan-500 to-blue-500',
    iconBg: 'from-cyan-500/20 to-blue-500/20',
    textColor: 'text-cyan-400',
  },
  {
    icon: <FiTrendingUp className="w-12 h-12" />,
    number: "03",
    title: 'Execution',
    description: 'We execute the plan with precision and provide continuous monitoring.',
    color: 'from-emerald-500 to-teal-500',
    iconBg: 'from-emerald-500/20 to-teal-500/20',
    textColor: 'text-emerald-400',
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-deep-navy py-20 relative overflow-hidden">
      {/* Animated background elements - Colorful! */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            Your Path to <span className="text-orange-400">Smarter Investing</span>
          </h2>
          <p className="text-slate-grey text-lg max-w-2xl mx-auto">
            A simple, transparent process designed for your success
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line for desktop - Colorful! */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500 opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card */}
                <div className="bg-midnight-navy p-8 rounded-2xl shadow-xl hover-glow transition-all duration-500 relative z-10 border-2 border-transparent hover:border-purple-500/30">
                  {/* Number badge - Each step with its own color! */}
                  <div className={`absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl font-montserrat shadow-lg`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`w-24 h-24 bg-gradient-to-br ${step.iconBg} rounded-full flex items-center justify-center ${step.textColor} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-2xl font-bold font-montserrat mb-3 text-center group-hover:${step.textColor} transition-colors duration-300`}>
                    {step.title}
                  </h3>
                  <p className="text-slate-grey text-center leading-relaxed">{step.description}</p>
                  
                  {/* Decorative corner */}
                  <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${step.iconBg} rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
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
        
        {/* CTA Section - Colorful! */}
        <div className="mt-20 text-center">
          <div className="relative glass rounded-2xl p-12 md:p-16 max-w-3xl mx-auto border border-purple-500/20 hover:border-pink-500/30 transition-all duration-500 overflow-hidden">
            {/* Colorful background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 rounded-2xl -z-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold font-montserrat mb-6">
                Ready to Start Your <span className="text-cyan-400">Investment Journey</span>?
              </h3>
              <p className="text-slate-grey mb-10 text-lg">
                Let's discuss how we can help you achieve your financial goals
              </p>
              <a
                href="/contact"
                className="inline-block group bg-emerald-500 text-white px-10 py-4 rounded-lg font-montserrat font-medium hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 hover:bg-emerald-600"
              >
                <span className="flex items-center justify-center">
                  Schedule a Consultation
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
