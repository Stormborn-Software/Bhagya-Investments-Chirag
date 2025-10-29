
import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Bhagya Investments transformed my portfolio. Their hedging strategies are second to none.",
    name: "Aarav Patel",
    rating: 5,
  },
  {
    quote: "The insights on crypto were a game-changer. Highly recommended for serious investors.",
    name: "Priya Sharma",
    rating: 5,
  },
  {
    quote: "Professional, data-driven, and always ahead of the curve. A trusted partner in my financial journey.",
    name: "Rohan Mehta",
    rating: 5,
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
    <section className="bg-midnight-navy py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center font-montserrat mb-12">
          Proven Strategies, Tangible Results
        </h2>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-deep-navy p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-performance-green" />
                ))}
              </div>
              <p className="text-slate-grey italic mb-4">"{testimonial.quote}"</p>
              <p className="font-bold font-montserrat text-right">- {testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* Partners & Platforms */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-slate-grey mb-6">Partners & Platforms</h3>
          <div className="flex justify-center items-center space-x-8 md:space-x-12 grayscale opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center">
                <Image src={partner.logo} alt={partner.name} width={120} height={40} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
