
import React from 'react';
import { FiActivity, FiBarChart2, FiBriefcase } from 'react-icons/fi';

const StockTradingPage = () => {
  return (
    <div className="bg-midnight-navy text-cloud-white">
      {/* Hero Section */}
      <section className="py-20 text-center bg-deep-navy/50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat">
            Strategic Stock Trading
          </h1>
          <p className="mt-4 text-lg text-slate-grey max-w-3xl mx-auto">
            Leveraging market insights for both short-term gains and long-term growth.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center font-montserrat mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <FiActivity className="w-12 h-12 text-performance-green mb-4" />
              <h3 className="text-2xl font-bold font-montserrat mb-2">Intraday Trading</h3>
              <p className="text-slate-grey">
                Capitalize on daily market volatility with our real-time analysis and rapid execution strategies. Ideal for active traders seeking to profit from short-term price movements.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FiBarChart2 className="w-12 h-12 text-performance-green mb-4" />
              <h3 className="text-2xl font-bold font-montserrat mb-2">Swing Trading</h3>
              <p className="text-slate-grey">
                Capture market trends over several days or weeks. We identify key entry and exit points to maximize gains from intermediate-term market swings.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FiBriefcase className="w-12 h-12 text-performance-green mb-4" />
              <h3 className="text-2xl font-bold font-montserrat mb-2">Long-Term Portfolio</h3>
              <p className="text-slate-grey">
                Build a resilient, growth-oriented portfolio with our fundamental analysis and value investing principles. We focus on strong companies with lasting potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-deep-navy">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold font-montserrat mb-6 text-center">
            Our Data-Driven Philosophy
          </h2>
          <div className="text-slate-grey space-y-4 text-lg">
            <p>
              At Bhagya Investments, our approach to stock trading is rooted in a rigorous, data-driven philosophy. We believe that successful trading is not about luck, but about process. Our team combines quantitative analysis with qualitative insights to build a comprehensive market view.
            </p>
            <p>
              <strong>Stock Selection:</strong> We utilize a multi-factor screening process to identify potential opportunities. This includes analyzing financial health, competitive positioning, management quality, and growth prospects. We look for catalysts that can unlock value, whether it's a new product cycle, industry shift, or a temporary mispricing by the market.
            </p>
            <p>
              <strong>Risk Management:</strong> Capital preservation is paramount. Every trade recommendation comes with a clearly defined risk management strategy, including stop-loss levels and position sizing. We stress-test our strategies against various market scenarios to understand potential drawdowns and ensure your portfolio remains resilient.
            </p>
            <p>
              <strong>Market Analysis:</strong> We employ a hybrid approach, blending technical analysis of price action and chart patterns with fundamental analysis of the underlying business. This allows us to align our short-term trading ideas with long-term market trends, increasing the probability of success.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-deep-navy py-16">
          <div className="container mx-auto px-6 bg-deep-navy py-12 rounded-lg">
              <div className="text-center">
                  <h2 className="text-3xl font-bold font-montserrat text-cloud-white mb-4">
                      Ready to Elevate Your Stock Portfolio?
                  </h2>
                  <button className="bg-performance-green text-midnight-navy px-8 py-3 rounded-md font-montserrat font-medium hover:bg-opacity-90 transition-colors">
                      Get Started
                  </button>
              </div>
          </div>
      </section>
    </div>
  );
};

export default StockTradingPage;
