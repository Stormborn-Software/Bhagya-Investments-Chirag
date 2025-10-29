import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-midnight-navy text-cloud-white py-20 md:py-32 overflow-hidden">
      {/* Abstract background animation with gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-performance-green/20 to-electric-blue/20 filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-electric-blue/20 to-performance-green/20 filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-gradient-to-br from-performance-green/10 to-electric-blue/10 filter blur-2xl animate-glow"></div>

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
          Unlock Your <span className="gradient-text">Market Potential</span>.
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-slate-grey max-w-3xl mx-auto font-roboto animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Expert guidance in Stocks, Crypto, and Derivatives with intelligent
          hedging strategies. We help you{" "}
          <span className="text-performance-green font-semibold">
            hedge smart
          </span>{" "}
          and{" "}
          <span className="text-electric-blue font-semibold">trade wise</span>.
        </p>
        <div
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <button className="group bg-performance-green text-midnight-navy px-8 py-4 rounded-lg font-montserrat font-medium hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-performance-green/50 hover:scale-105">
            <span className="flex items-center justify-center">
              Open Account
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
          <a
            href="https://chat.whatsapp.com/YOUR_COMMUNITY_INVITE_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-performance-green text-performance-green px-8 py-4 rounded-lg font-montserrat font-medium hover:bg-performance-green/10 transition-all duration-300 hover:shadow-lg hover:shadow-performance-green/30"
          >
            <span className="flex items-center justify-center">
              Join WhatsApp Community
              <svg
                className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </span>
          </a>
        </div>

        {/* Floating stats badges */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass rounded-xl p-6 hover-glow">
            <div className="text-3xl font-bold text-performance-green font-montserrat">
              10+
            </div>
            <div className="text-sm text-slate-grey mt-2">Years Experience</div>
          </div>
          <div className="glass rounded-xl p-6 hover-glow">
            <div className="text-3xl font-bold text-electric-blue font-montserrat">
              500+
            </div>
            <div className="text-sm text-slate-grey mt-2">Active Clients</div>
          </div>
          <div className="glass rounded-xl p-6 hover-glow">
            <div className="text-3xl font-bold text-performance-green font-montserrat">
              ₹50Cr+
            </div>
            <div className="text-sm text-slate-grey mt-2">Assets Managed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
