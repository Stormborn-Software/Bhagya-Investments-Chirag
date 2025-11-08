import React from "react";
import { FiTrendingUp, FiDollarSign, FiShield, FiCpu } from "react-icons/fi";

const servicesData = [
  {
    icon: <FiTrendingUp className="w-10 h-10" />,
    title: "Stocks & Derivatives",
    description:
      "Dive deep into the equity markets with our comprehensive stock trading advisory. We provide data-driven analysis, identifying high-growth opportunities and undervalued assets. Our strategies are built on a foundation of rigorous technical and fundamental analysis, designed to optimize your portfolio for both short-term gains and long-term value creation. We monitor market trends, corporate actions, and economic indicators to provide you with timely and actionable insights.",
    cta: "Explore Stocks",
    link: "/services/stocks",
    color: "emerald",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/40",
    buttonColor: "bg-emerald-500 hover:bg-emerald-600",
  },
  {
    icon: <FiDollarSign className="w-10 h-10" />,
    title: "Mutual Funds & SIPs",
    description:
      "Our Mutual Funds and SIPs service offers a diversified approach to investing, allowing you to build wealth over time with professional management. We analyze various funds and create a tailored portfolio that aligns with your financial goals and risk tolerance. Whether you are a conservative investor or looking for aggressive growth, our team is here to guide you every step of the way.",
    cta: "Explore Mutual Funds",
    link: "/services/mutual-funds",
    color: "purple",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/20",
    hoverBorder: "hover:border-purple-500/40",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
  },
  {
    icon: <FiCpu className="w-10 h-10" />,
    title: "Commodities & Currencies",
    description:
      "Our Commodities and Currencies service provides you with the tools and insights needed to navigate these dynamic markets. We offer in-depth analysis and trading strategies for a wide range of commodities, including precious metals, energy products, and agricultural goods. Additionally, our expertise in currency trading helps you capitalize on global economic trends and fluctuations. Whether you are looking to hedge against inflation or diversify your portfolio, our team is here to support your investment journey.",
    cta: "Explore Commodities",
    link: "/services/commodities",
    color: "orange",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/20",
    hoverBorder: "hover:border-orange-500/40",
    buttonColor: "bg-orange-500 hover:bg-orange-600",
  },
  {
    icon: <FiShield className="w-10 h-10" />,
    title: "Crypto Investments",
    description:
      "The world of digital assets is volatile and complex. Our expert team helps you navigate the crypto markets with confidence. We offer analysis on major cryptocurrencies like Bitcoin and Ethereum, as well as promising altcoins. Our service includes risk management protocols, portfolio diversification strategies, and insights into the underlying blockchain technology and market sentiment, helping you make informed decisions in this fast-evolving space.",
    cta: "Explore Crypto",
    link: "/services/crypto",
    color: "cyan",
    iconColor: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/40",
    buttonColor: "bg-cyan-500 hover:bg-cyan-600",
  },
  {
    icon: <FiShield className="w-10 h-10" />,
    title: "Insurance & Unlisted Assets",
    description:
      "Protecting your capital is as important as growing it. Our insurance and unlisted assets service provides a safety net for your investments. We help you navigate the complexities of insuring your assets and exploring opportunities in unlisted markets. Our team offers tailored solutions that align with your financial goals, ensuring you have the right coverage and investment strategies in place.",
    cta: "Explore Insurance",
    link: "/services/insurance",
    color: "pink",
    iconColor: "text-pink-400",
    borderColor: "border-pink-500/20",
    hoverBorder: "hover:border-pink-500/40",
    buttonColor: "bg-pink-500 hover:bg-pink-600",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-midnight-navy">
      {/* Hero Section - Colorful! */}
      <section className="relative py-20 text-center bg-deep-navy overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-cloud-white">
            Our <span className="text-pink-400">Investment Services</span>
          </h1>
          <p className="mt-4 text-lg text-slate-grey max-w-2xl mx-auto">
            Tailored strategies across diverse market segments.
          </p>
        </div>
      </section>

      {/* Services Grid - Colorful! */}
      <section className="py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`glass rounded-2xl shadow-xl p-8 flex flex-col border-2 ${service.borderColor} ${service.hoverBorder} transition-all duration-500 hover:scale-105`}
              >
                <div className="flex items-center mb-4">
                  <div className={`${service.iconColor}`}>
                    {service.icon}
                  </div>
                  <h2 className="ml-4 text-2xl font-bold font-montserrat text-cloud-white">
                    {service.title}
                  </h2>
                </div>
                <p className="text-slate-grey flex-grow mb-6">
                  {service.description}
                </p>
                <button className={`mt-auto ${service.buttonColor} text-white px-6 py-3 rounded-md font-montserrat font-medium self-start transition-all hover:scale-105 hover:shadow-lg`}>
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
