"use client";
import React, { useState } from "react";
import {
  FiTrendingUp,
  FiCpu,
  FiMessageSquare,
  FiArrowRight,
} from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative bg-midnight-blue text-ivory py-20 md:py-32 overflow-hidden">
      {/* Abstract background animation with gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated gradient orbs - Colorful! */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/30 to-teal-500/30 filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-gradient-to-br from-orange-500/20 to-yellow-500/20 filter blur-2xl animate-glow"></div>
        <div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/25 to-indigo-500/25 filter blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Geometric grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat leading-tight animate-fade-in-up">
          Unlock Your <span className="text-cyan-400">Market Potential</span>.
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-light-gray max-w-3xl mx-auto font-roboto animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Expert guidance in Stocks, Crypto, and Derivatives with intelligent
          hedging strategies. We help you{" "}
          <span className="font-semibold text-purple-400">hedge smart</span> and{" "}
          <span className="font-semibold text-emerald-400">trade wise</span>.
        </p>
        <ServiceFocusTabs />

        {/* Floating stats badges */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass rounded-xl p-6 hover-glow">
            <div className="text-3xl font-bold text-soft-green font-montserrat">
              8+
            </div>
            <div className="text-sm text-light-gray mt-2">Years Experience</div>
          </div>
          <div className="glass rounded-xl p-6 hover-glow">
            <div className="text-3xl font-bold text-gold font-montserrat">
              500+
            </div>
            <div className="text-sm text-light-gray mt-2">Active Clients</div>
          </div>
          <div className="glass rounded-xl p-6 hover-glow">
            <div className="text-3xl font-bold text-teal font-montserrat">
              ₹50Cr+
            </div>
            <div className="text-sm text-light-gray mt-2">Assets Managed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const tabData = [
  {
    id: "demat",
    label: "Demat Account",
    icon: <FiTrendingUp className="w-5 h-5 mr-2" />,
    color: "emerald",
    description:
      "Access stocks, derivatives, and mutual funds with a powerful, feature-rich demat account.",
    buttonText: "Start Trading Stocks",
    link: "https://choiceindia.com/open-free-demat-account?refercode=QzAwNTIxMzI=&source=Q0hPSUNFX0NPTk5FQ1RfQU5EUk9JRA==",
  },
  {
    id: "crypto",
    label: "Crypto Account",
    icon: <FiCpu className="w-5 h-5 mr-2" />,
    color: "cyan",
    description:
      "Dive into the future of digital assets with expert guidance and advanced trading tools.",
    buttonText: "Explore Crypto Markets",
    link: "https://www.delta.exchange/?code=JGARDS",
  },
  {
    id: "community",
    label: "Community",
    icon: <FiMessageSquare className="w-5 h-5 mr-2" />,
    color: "purple",
    description:
      "Join our exclusive WhatsApp community for real-time insights, discussions, and support.",
    buttonText: "Join the Conversation",
    link: "https://chat.whatsapp.com/KpKIlHAefzFFw9tn2tcMvt?mode=wwt",
  },
];

const ServiceFocusTabs = () => {
  const [activeTab, setActiveTab] = useState("demat");
  const activeTabData = tabData.find((tab) => tab.id === activeTab);

  return (
    <div
      className="mt-16 animate-fade-in-up"
      style={{ animationDelay: "0.4s" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Tab Buttons */}
        <div className="flex justify-center space-x-2 md:space-x-4 p-2 bg-slate-800/50 rounded-xl border border-slate-700/50">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-1 flex items-center justify-center px-4 py-3 rounded-lg font-montserrat font-semibold text-sm md:text-base transition-all duration-300 focus:outline-none
                ${
                  activeTab === tab.id
                    ? `bg-${tab.color}-500/20 text-${tab.color}-300 shadow-lg shadow-${tab.color}-500/20`
                    : "text-slate-400 hover:bg-slate-700/50"
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8 text-center">
          {activeTabData && (
            <div key={activeTab} className="animate-fade-in">
              <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
                {activeTabData.description}
              </p>
              <a
                href={activeTabData.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center group bg-gradient-to-r from-${
                  activeTabData.color
                }-500 to-${
                  activeTabData.color === "emerald"
                    ? "teal"
                    : activeTabData.color === "cyan"
                    ? "blue"
                    : "pink"
                }-500 text-white px-8 py-4 rounded-lg font-montserrat font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-${
                  activeTabData.color
                }-500/50 hover:scale-105`}
              >
                {activeTabData.buttonText}
                <FiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
