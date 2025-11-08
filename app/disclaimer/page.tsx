import Footer from "@/components/Footer";
import Header from "@/components/Header";

const DisclaimerPage = () => {
  return (
    <div className="bg-midnight-navy text-cloud-white">
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cloud-white mb-8 text-center">
            <span className="gradient-text">Disclaimer</span>
          </h1>
          <div className="glass p-8 rounded-lg space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-cloud-white mt-4 border-b border-performance-green/20 pb-2">
                Informational Purpose Only
              </h2>
              <p className="text-slate-grey mt-2">
                The content, data, and analysis provided on Bhagya Investments
                are for educational and informational purposes only and should
                not be considered as investment, trading, or financial advice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cloud-white mt-4 border-b border-performance-green/20 pb-2">
                No Investment Transactions
              </h2>
              <p className="text-slate-grey mt-2">
                Bhagya Investments does not offer trading or investment
                services. All investments or trades must be made through a
                SEBI-registered broker.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cloud-white mt-4 border-b border-performance-green/20 pb-2">
                Market Risk Warning
              </h2>
              <p className="text-slate-grey mt-2">
                Investments in securities, mutual funds, and stock markets are
                subject to market risk. Past performance shown on this website
                does not guarantee future returns.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cloud-white mt-4 border-b border-performance-green/20 pb-2">
                Accuracy of Information
              </h2>
              <p className="text-slate-grey mt-2">
                While we strive to ensure the accuracy of the data and content
                displayed, Bhagya Investments makes no warranties or guarantees
                regarding the completeness, reliability, or accuracy of any
                information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cloud-white mt-4 border-b border-performance-green/20 pb-2">
                No Liability
              </h2>
              <p className="text-slate-grey mt-2">
                Bhagya Investments shall not be held liable for any financial
                loss, damage, or consequence arising directly or indirectly from
                the use of this website or its content.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DisclaimerPage;
