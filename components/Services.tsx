import React from "react";
import { FiTrendingUp, FiDollarSign, FiShield, FiCpu } from "react-icons/fi";

const services = [
  {
    icon: <FiTrendingUp className="w-10 h-10" />,
    title: "Stocks & Derivatives",
    description:
      "Strategic insights for equity and derivatives markets to help maximize your returns.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/30 group-hover:border-emerald-500/60",
  },
  {
    icon: <FiDollarSign className="w-10 h-10" />,
    title: "Mutual Funds & SIPs",
    description:
      "Build long-term wealth with our tailored mutual fund and systematic investment plans.",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/30 group-hover:border-purple-500/60",
  },
  {
    icon: <FiShield className="w-10 h-10" />,
    title: "Commodities & Currencies",
    description:
      "Navigate global commodity and currency markets, from precious metals to forex pairs.",
    gradient: "from-orange-500/20 to-yellow-500/20",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/30 group-hover:border-orange-500/60",
  },
  {
    icon: <FiCpu className="w-10 h-10" />,
    title: "Crypto Investments",
    description:
      "Expert analysis for navigating the volatile world of digital assets like Bitcoin.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
    borderColor: "border-cyan-500/30 group-hover:border-cyan-500/60",
  },
];

const Services = () => {
  return (
    <section className="bg-navy py-20 relative overflow-hidden">
      {/* Background decoration - Colorful! */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            Our <span className="text-pink-400">Services</span>
          </h2>
          <p className="text-slate-grey text-lg max-w-2xl mx-auto">
            Comprehensive investment solutions tailored to your financial goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-navy rounded-2xl p-8 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden border-2 ${service.borderColor}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl transition-all duration-500"></div>

              <div className="relative z-10">
                <div
                  className={`${service.iconColor} mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-montserrat mb-3 text-ivory transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-light-gray mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#"
                  className={`inline-flex items-center ${service.iconColor} font-medium text-sm transition-all duration-300 group-hover:translate-x-2`}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300"
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
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
