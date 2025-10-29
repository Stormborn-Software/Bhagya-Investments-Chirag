
import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="bg-midnight-navy text-cloud-white">
      {/* Hero Section */}
      <section className="py-20 text-center bg-deep-navy/50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat italic">
            Hedge Smart. Trade Wise. Our Core Philosophy.
          </h1>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 bg-deep-navy">
        <div className="container mx-auto px-6 text-center">
          <p className="text-2xl md:text-4xl font-light text-slate-grey max-w-4xl mx-auto leading-relaxed">
            Our mission is to empower every investor with the strategies and insights needed to navigate the markets with <span className="text-performance-green font-medium">confidence</span>.
          </p>
        </div>
      </section>

      {/* Founder's Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <Image
                src="/placeholders/chirag-nagar.jpg"
                alt="Chirag Nagar, Founder of Bhagya Investments"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl mx-auto"
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold font-montserrat mb-4">Meet Chirag Nagar</h2>
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

      {/* Our Philosophy Section */}
      <section className="py-20 bg-deep-navy">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold font-montserrat mb-6 text-center">The "Hedge Smart. Trade Wise." Ethos</h2>
          <div className="text-slate-grey space-y-6 text-lg">
            <div>
              <h3 className="text-xl font-semibold text-performance-green mb-2">Hedge Smart: Your Shield in the Market</h3>
              <p>
                The "Hedge Smart" principle is our foremost commitment: capital protection. We view hedging not as an optional extra, but as a fundamental component of any sound investment strategy. In a world of market uncertainty, a smart hedge is your shield. It's about creating a safety net that allows you to participate in market upside with greater confidence, knowing that you have measures in place to mitigate downside risk. We utilize a range of instruments, primarily options, to construct cost-effective hedges that are tailored to your specific portfolio and risk tolerance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-electric-blue mb-2">Trade Wise: Your Sword in the Market</h3>
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
