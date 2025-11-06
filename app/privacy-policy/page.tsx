import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-midnight-blue text-ivory">
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gold mb-8 text-center">
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <div className="bg-navy p-8 rounded-lg space-y-6 text-light-gray">
            <h2 className="text-2xl font-bold text-ivory mt-8 border-b border-gold/20 pb-2">
              <strong>Information We Collect:</strong>
            </h2>
            <p>
              We may collect basic user details such as name, email address,
              phone number, and any information submitted through contact or
              inquiry forms.
            </p>

            <h2 className="text-2xl font-bold text-ivory mt-8 border-b border-gold/20 pb-2">
              <strong>Purpose of Data Collection:</strong>
            </h2>
            <p>
              Your information is collected only to respond to inquiries, share
              updates, or provide general information about our services.
            </p>

            <h2 className="text-2xl font-bold text-ivory mt-8 border-b border-gold/20 pb-2">
              <strong>No Financial Data Collection:</strong>
            </h2>
            <p>
              Bhagya Investments does not collect or store any banking, trading,
              or payment-related data from users.
            </p>

            <h2 className="text-2xl font-bold text-ivory mt-8 border-b border-gold/20 pb-2">
              <strong>Use of Cookies:</strong>
            </h2>
            <p>
              Our website may use cookies to improve user experience and analyze
              website traffic. You can disable cookies anytime from your browser
              settings.
            </p>

            <h2 className="text-2xl font-bold text-ivory mt-8 border-b border-gold/20 pb-2">
              <strong>Data Security:</strong>
            </h2>
            <p>
              We take reasonable technical and organizational steps to protect
              your personal data from unauthorized access, loss, or misuse.
            </p>

            <h2 className="text-2xl font-bold text-ivory mt-8 border-b border-gold/20 pb-2">
              <strong>Third-Party Links:</strong>
            </h2>
            <p>
              Our website may contain links to external sites. Bhagya
              Investments is not responsible for the privacy policies or
              practices of third-party websites.
            </p>

            <h2 className="text-2xl font-bold text-ivory mt-8 border-b border-gold/20 pb-2">
              <strong>Data Sharing Policy:</strong>
            </h2>
            <p>
              We do not sell, rent, or trade user information. Data may only be
              shared with trusted partners or service providers who assist in
              website operations, under strict confidentiality.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
