import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Bhagya Investments transformed my portfolio. Their hedging strategies are second to none.",
    name: "Aarav Patel",
    role: "Entrepreneur",
    rating: 5,
    avatar: "AP",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    quote:
      "The insights on crypto were a game-changer. Highly recommended for serious investors.",
    name: "Priya Sharma",
    role: "Software Engineer",
    rating: 5,
    avatar: "PS",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    quote:
      "Professional, data-driven, and always ahead of the curve. A trusted partner in my financial journey.",
    name: "Rohan Mehta",
    role: "Business Owner",
    rating: 5,
    avatar: "RM",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const partners = [
  {
    name: "Choice India",
    logo: "https://choiceindia.com/_next/static/media/logo-v-2.287b4a4a.svg",
  },
  {
    name: "CoinDCX",
    logo: "https://coindcx.com/api/help/img/CoinDCX-Logo.png",
  },
];

const Trust = () => {
  return (
    <section className="bg-midnight-navy py-20 relative overflow-hidden">
      {/* Background decoration - Colorful! */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            Proven Strategies,{" "}
            <span className="text-emerald-400">Tangible Results</span>
          </h2>
          <p className="text-slate-grey text-lg max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us with their
            investments
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-deep-navy p-8 rounded-2xl shadow-xl hover-glow transition-all duration-500 border-2 border-transparent hover:scale-105"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote decoration */}
              <div
                className={`absolute -top-4 -left-4 text-6xl bg-gradient-to-br ${testimonial.gradient} bg-clip-text text-transparent font-serif opacity-30`}
              >
                "
              </div>

              <div className="relative">
                {/* Stars - Colorful! */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-grey italic mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold mr-4 shadow-lg`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold font-montserrat text-cloud-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-grey">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover effect border - Colorful! */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-${testimonial.gradient
                  .split(" ")[0]
                  .replace("from-", "")} transition-all duration-500`}
              ></div>
            </div>
          ))}
        </div>

        {/* Partners & Platforms - Colorful! */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 font-montserrat">
            Trusted Trading <span className="text-purple-400">Platform</span>
          </h3>
          <div className="glass rounded-2xl p-10 max-w-md mx-auto border border-purple-500/20 hover:border-pink-500/30 transition-all duration-500">
            <div className="flex justify-center items-center bg-white p-6 rounded-lg space-x-8">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center group">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={60}
                    className="object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300 group-hover:scale-105"
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
