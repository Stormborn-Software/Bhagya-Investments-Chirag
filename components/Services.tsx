import React from "react";
import { FiTrendingUp, FiDollarSign, FiShield, FiCpu } from "react-icons/fi";

const services = [
  {
    icon: <FiTrendingUp className="w-10 h-10" />,
    title: "Stocks & Derivatives",
    description:
      "Strategic insights for equity and derivatives markets to help maximize your returns.",
    gradient: "from-performance-green/20 to-electric-blue/20",
    iconColor: "text-performance-green",
  },
  {
    icon: <FiDollarSign className="w-10 h-10" />,
    title: "Mutual Funds & SIPs",
    description:
      "Build long-term wealth with our tailored mutual fund and systematic investment plans.",
    gradient: "from-electric-blue/20 to-performance-green/20",
    iconColor: "text-electric-blue",
  },
  {
    icon: <FiShield className="w-10 h-10" />,
    title: "Commodities & Currencies",
    description:
      "Navigate global commodity and currency markets, from precious metals to forex pairs.",
    gradient: "from-performance-green/20 to-electric-blue/20",
    iconColor: "text-performance-green",
  },
  {
    icon: <FiCpu className="w-10 h-10" />,
    title: "Crypto Investments",
    description:
      "Expert analysis for navigating the volatile world of digital assets like Bitcoin.",
    gradient: "from-electric-blue/20 to-performance-green/20",
    iconColor: "text-electric-blue",
  },
];

const Services = () => {
  return (
    <section className="bg-deep-navy py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 bg-performance-green rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-electric-blue rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-grey text-lg max-w-2xl mx-auto">
            Comprehensive investment solutions tailored to your financial goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-midnight-navy rounded-2xl p-8 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-performance-green/50 transition-all duration-500"></div>

              <div className="relative z-10">
                <div
                  className={`${service.iconColor} mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-3 text-cloud-white group-hover:text-performance-green transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-grey mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-electric-blue font-medium text-sm group-hover:text-performance-green transition-colors duration-300"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-performance-green/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
