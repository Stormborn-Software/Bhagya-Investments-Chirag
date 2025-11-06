import Footer from "@/components/Footer";
import Header from "@/components/Header";

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-midnight-blue text-ivory">
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gold mb-8 text-center">
            <span className="gradient-text">Terms and Conditions</span>
          </h1>
          <div className="bg-navy p-8 rounded-lg space-y-6 text-light-gray">
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <strong>Nature of Service:</strong> Bhagya Investments is an
                informational website that provides market insights, portfolio
                examples, and financial analysis for educational purposes only.
              </li>
              <li>
                <strong>No Investment Facility:</strong> This website does not
                allow users to trade, invest, or transfer money. All investments
                are made only through your registered broker.
              </li>
              <li>
                <strong>Educational Purpose Only:</strong> All data, charts, and
                reports on this website are shared for learning and general
                informational use, not as financial or investment advice.
              </li>
              <li>
                <strong>SEBI Compliance:</strong> Bhagya Investments operates in
                accordance with SEBI guidelines. We are not a registered
                stockbroker, investment advisor, or portfolio manager.
              </li>
              <li>
                <strong>No Financial Advice:</strong> Any market performance,
                suggestions, or analysis shared here are not investment
                recommendations or advisory services.
              </li>
              <li>
                <strong>User Responsibility:</strong> Users must verify all
                information independently before making any financial decision.
                Bhagya Investments is not responsible for any action taken based
                on the content shown.
              </li>
              <li>
                <strong>Risk Acknowledgement:</strong> Investing and trading in
                the stock market involves risk of capital loss. Users must
                accept full responsibility for their investment decisions.
              </li>
              <li>
                <strong>Loss Disclaimer:</strong> If your investments or
                portfolio incur losses, Bhagya Investments holds no
                responsibility or liability. All investment outcomes are at the
                user’s own risk.
              </li>
              <li>
                <strong>No Guarantee of Returns:</strong> Any past performance,
                graph, or portfolio shown on the website is for illustration
                only and does not guarantee future results.
              </li>
              <li>
                <strong>Accuracy of Information:</strong> While efforts are made
                to provide accurate data, Bhagya Investments does not guarantee
                the correctness, completeness, or reliability of any information
                displayed.
              </li>
              <li>
                <strong>Intellectual Property:</strong> All content, design,
                data, and visuals on this website are owned by Bhagya
                Investments and cannot be copied or reused without written
                consent.
              </li>
              <li>
                <strong>Third-Party Links:</strong> The website may include
                links to external sources. Bhagya Investments is not responsible
                for their content, accuracy, or reliability.
              </li>
              <li>
                <strong>Limitation of Liability:</strong> Bhagya Investments
                shall not be liable for any direct, indirect, or incidental
                losses arising from the use of this website or its content.
              </li>
              <li>
                <strong>Changes to Terms:</strong> Bhagya Investments may update
                or modify these Terms &amp; Conditions at any time without prior
                notice. Continued use of the website implies acceptance of
                changes.
              </li>
              <li>
                <strong>Governing Law &amp; Contact:</strong> These Terms are
                governed by the laws of India. For queries or concerns, contact
                support@bhagyainvestments.com.
              </li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditionsPage;
