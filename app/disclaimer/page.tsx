const DisclaimerPage = () => {
  return (
    <div className="relative min-h-screen bg-midnight-navy text-cloud-white overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-500/30 to-yellow-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <main className="relative container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center animate-fade-in-up">
            <span className="text-orange-400">Disclaimer</span>
          </h1>
          <p className="text-slate-400 text-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Important information about risks and limitations
          </p>

          <div className="glass border border-orange-500/20 p-8 md:p-12 rounded-2xl space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Alert Banner */}
            <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border-l-4 border-orange-500 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-orange-300 font-semibold mb-1">Important Notice</p>
                  <p className="text-slate-300 text-sm">
                    Please read this disclaimer carefully before using our services
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">
                    Informational Purpose Only
                  </h2>
                  <p className="text-slate-300 leading-relaxed">
                    The content, data, and analysis provided on Bhagya Investments
                    are for educational and informational purposes only and should
                    not be considered as investment, trading, or financial advice.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-purple-400 mb-3">
                    No Investment Transactions
                  </h2>
                  <p className="text-slate-300 leading-relaxed">
                    Bhagya Investments does not offer trading or investment
                    services. All investments or trades must be made through a
                    SEBI-registered broker.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-orange-400 mb-3">
                    Market Risk Warning
                  </h2>
                  <p className="text-slate-300 leading-relaxed">
                    Investments in securities, mutual funds, and stock markets are
                    subject to market risk. Past performance shown on this website
                    does not guarantee future returns.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-emerald-400 mb-3">
                    Accuracy of Information
                  </h2>
                  <p className="text-slate-300 leading-relaxed">
                    While we strive to ensure the accuracy of the data and content
                    displayed, Bhagya Investments makes no warranties or guarantees
                    regarding the completeness, reliability, or accuracy of any
                    information.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-pink-400 mb-3">
                    No Liability
                  </h2>
                  <p className="text-slate-300 leading-relaxed">
                    Bhagya Investments shall not be held liable for any financial
                    loss, damage, or consequence arising directly or indirectly from
                    the use of this website or its content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-slate-400">
              By using this website, you acknowledge that you have read and understood this disclaimer
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DisclaimerPage;
