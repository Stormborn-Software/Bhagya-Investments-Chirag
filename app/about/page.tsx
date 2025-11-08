
import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="bg-midnight-navy text-cloud-white">
      {/* Hero Section - Colorful! */}
      <section className="relative py-20 text-center bg-deep-navy/50 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat italic">
            <span className="text-purple-400">Hedge Smart</span>. <span className="text-emerald-400">Trade Wise</span>. Our Core Philosophy.
          </h1>
        </div>
      </section>

      {/* Our Mission Section - Colorful! */}
      <section className="py-24 bg-deep-navy relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="text-2xl md:text-4xl font-light text-slate-grey max-w-4xl mx-auto leading-relaxed">
            Our mission is to empower every investor with the strategies and insights needed to navigate the markets with <span className="text-cyan-400 font-medium">confidence</span>.
          </p>
        </div>
      </section>

      {/* Founder's Section - Colorful! */}
      <section className="py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <div className="relative">
                <Image
                  src="/placeholders/chirag-nagar.jpg"
                  alt="Chirag Nagar, Founder of Bhagya Investments"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-2xl mx-auto border-2 border-purple-500/20"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold font-montserrat mb-4">Meet <span className="text-purple-400">Chirag Nagar</span></h2>
              <div className="text-slate-grey space-y-4">
                <p>
                  Chirag Nagar, the visionary founder of Bhagya Investments, brings over a decade of intensive experience in the financial markets. A certified research analyst and a passionate trader, Chirag has dedicated his career to mastering the complexities of stock, crypto, and derivatives markets. His journey began not in a large financial institution, but as an individual trader, driven by a relentless curiosity and a passion for understanding market dynamics.
                </p>
                <p>
                  This hands-on experience has provided him with a unique, ground-level perspective on both the opportunities and the risks inherent in trading. He founded Bhagya Investments with a clear goal: to democratize access to professional-grade trading strategies and risk management techniques that are typically reserved for high-net-worth individuals and institutional investors. Chirag's approach is built on a foundation of transparency, education, and a deep-seated commitment to his clients' financial success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section - Colorful! */}
      <section className="py-20 bg-deep-navy relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <h2 className="text-3xl font-bold font-montserrat mb-6 text-center">The <span className="text-pink-400">"Hedge Smart. Trade Wise."</span> Ethos</h2>
          <div className="text-slate-grey space-y-6 text-lg">
            <div className="glass rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">Hedge Smart: Your Shield in the Market</h3>
              <p>
                The "Hedge Smart" principle is our foremost commitment: capital protection. We view hedging not as an optional extra, but as a fundamental component of any sound investment strategy. In a world of market uncertainty, a smart hedge is your shield. It's about creating a safety net that allows you to participate in market upside with greater confidence, knowing that you have measures in place to mitigate downside risk. We utilize a range of instruments, primarily options, to construct cost-effective hedges that are tailored to your specific portfolio and risk tolerance.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Trade Wise: Your Sword in the Market</h3>
              <p>
                "Trade Wise" is the offensive counterpart to our defensive hedging. It represents our commitment to informed, data-driven decision-making. This is not about chasing hot tips or succumbing to market noise. It's about a disciplined process of analysis, strategy, and execution. We combine technical and fundamental analysis to identify high-probability opportunities, define clear entry and exit points, and manage trades with discipline. Trading wise means acting with conviction based on research, not emotion. It's the sword that allows you to carve out profits from the market's opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
