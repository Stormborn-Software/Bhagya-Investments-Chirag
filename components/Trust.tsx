
import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Bhagya Investments transformed my portfolio. Their hedging strategies are second to none.",
    name: "Aarav Patel",
    role: "Entrepreneur",
    rating: 5,
    avatar: "AP",
  },
  {
    quote: "The insights on crypto were a game-changer. Highly recommended for serious investors.",
    name: "Priya Sharma",
    role: "Software Engineer",
    rating: 5,
    avatar: "PS",
  },
  {
    quote: "Professional, data-driven, and always ahead of the curve. A trusted partner in my financial journey.",
    name: "Rohan Mehta",
    role: "Business Owner",
    rating: 5,
    avatar: "RM",
  },
];

const partners = [
  { name: 'Zerodha', logo: '/logos/zerodha.svg' },
  { name: 'Angel One', logo: '/logos/angelone.svg' },
  { name: 'Upstox', logo: '/logos/upstox.svg' },
  { name: 'Groww', logo: '/logos/groww.svg' },
];

const Trust = () => {
  return (
    <section className="bg-midnight-navy py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            Proven Strategies, <span className="gradient-text">Tangible Results</span>
          </h2>
          <p className="text-slate-grey text-lg max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us with their investments
          </p>
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative bg-deep-navy p-8 rounded-2xl shadow-xl hover-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote decoration */}
              <div className="absolute -top-4 -left-4 text-6xl text-performance-green/20 font-serif">"</div>
              
              <div className="relative">
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-performance-green text-lg" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-slate-grey italic mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-performance-green to-electric-blue flex items-center justify-center text-midnight-navy font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold font-montserrat text-cloud-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-grey">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              
              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-performance-green/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Partners & Platforms */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-slate-grey mb-8 font-montserrat">
            Trusted Trading <span className="text-performance-green">Platforms</span>
          </h3>
          <div className="glass rounded-2xl p-8">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-70 hover:opacity-100 transition-opacity duration-500">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center group">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    width={120} 
                    height={40} 
                    className="object-contain filter brightness-75 group-hover:brightness-125 transition-all duration-300 group-hover:scale-110" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
