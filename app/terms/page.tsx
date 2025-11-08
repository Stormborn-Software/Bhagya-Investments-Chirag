const TermsAndConditionsPage = () => {
  const terms = [
    {
      title: "Nature of Service",
      description: "Bhagya Investments is an informational website that provides market insights, portfolio examples, and financial analysis for educational purposes only.",
      color: "from-purple-500 to-pink-500",
      textColor: "text-purple-400"
    },
    {
      title: "No Investment Facility",
      description: "This website does not allow users to trade, invest, or transfer money. All investments are made only through your registered broker.",
      color: "from-cyan-500 to-blue-500",
      textColor: "text-cyan-400"
    },
    {
      title: "Educational Purpose Only",
      description: "All data, charts, and reports on this website are shared for learning and general informational use, not as financial or investment advice.",
      color: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-400"
    },
    {
      title: "SEBI Compliance",
      description: "Bhagya Investments operates in accordance with SEBI guidelines. We are not a registered stockbroker, investment advisor, or portfolio manager.",
      color: "from-orange-500 to-yellow-500",
      textColor: "text-orange-400"
    },
    {
      title: "No Financial Advice",
      description: "Any market performance, suggestions, or analysis shared here are not investment recommendations or advisory services.",
      color: "from-pink-500 to-rose-500",
      textColor: "text-pink-400"
    },
    {
      title: "User Responsibility",
      description: "Users must verify all information independently before making any financial decision. Bhagya Investments is not responsible for any action taken based on the content shown.",
      color: "from-blue-500 to-indigo-500",
      textColor: "text-blue-400"
    },
    {
      title: "Risk Acknowledgement",
      description: "Investing and trading in the stock market involves risk of capital loss. Users must accept full responsibility for their investment decisions.",
      color: "from-red-500 to-orange-500",
      textColor: "text-red-400"
    },
    {
      title: "Loss Disclaimer",
      description: "If your investments or portfolio incur losses, Bhagya Investments holds no responsibility or liability. All investment outcomes are at the user's own risk.",
      color: "from-yellow-500 to-orange-500",
      textColor: "text-yellow-400"
    },
    {
      title: "No Guarantee of Returns",
      description: "Any past performance, graph, or portfolio shown on the website is for illustration only and does not guarantee future results.",
      color: "from-teal-500 to-cyan-500",
      textColor: "text-teal-400"
    },
    {
      title: "Accuracy of Information",
      description: "While efforts are made to provide accurate data, Bhagya Investments does not guarantee the correctness, completeness, or reliability of any information displayed.",
      color: "from-indigo-500 to-purple-500",
      textColor: "text-indigo-400"
    },
    {
      title: "Intellectual Property",
      description: "All content, design, data, and visuals on this website are owned by Bhagya Investments and cannot be copied or reused without written consent.",
      color: "from-rose-500 to-pink-500",
      textColor: "text-rose-400"
    },
    {
      title: "Third-Party Links",
      description: "The website may include links to external sources. Bhagya Investments is not responsible for their content, accuracy, or reliability.",
      color: "from-cyan-500 to-teal-500",
      textColor: "text-cyan-400"
    },
    {
      title: "Limitation of Liability",
      description: "Bhagya Investments shall not be liable for any direct, indirect, or incidental losses arising from the use of this website or its content.",
      color: "from-orange-500 to-red-500",
      textColor: "text-orange-400"
    },
    {
      title: "Changes to Terms",
      description: "Bhagya Investments may update or modify these Terms & Conditions at any time without prior notice. Continued use of the website implies acceptance of changes.",
      color: "from-purple-500 to-blue-500",
      textColor: "text-purple-400"
    },
    {
      title: "Governing Law & Contact",
      description: "These Terms are governed by the laws of India. For queries or concerns, contact support@bhagyainvestments.com.",
      color: "from-emerald-500 to-green-500",
      textColor: "text-emerald-400"
    }
  ];

  return (
    <div className="relative min-h-screen bg-midnight-navy text-cloud-white overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-500/30 to-rose-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <main className="relative container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center animate-fade-in-up">
            Terms & <span className="text-blue-400">Conditions</span>
          </h1>
          <p className="text-slate-400 text-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Please read these terms carefully before using our services
          </p>

          <div className="space-y-6">
            {terms.map((term, index) => (
              <div 
                key={index}
                className="glass border border-slate-700/50 hover:border-slate-600/50 p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${term.color} rounded-lg flex items-center justify-center font-bold text-white`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h2 className={`text-xl font-bold ${term.textColor} mb-2`}>
                      {term.title}
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                      {term.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 glass border border-blue-500/20 p-8 rounded-2xl text-center animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-blue-400">Agreement</h3>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
              By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this website.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <p className="text-slate-400 text-sm">
                Last updated: <span className="text-blue-400">November 2025</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditionsPage;
