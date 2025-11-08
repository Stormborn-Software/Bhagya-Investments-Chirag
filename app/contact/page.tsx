"use client";

import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const whatsappMessage = `New Inquiry from Website:
-----------------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
-----------------------------`;

    const whatsappNumber = "918655427334"; // Your WhatsApp number with country code
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    form.reset();
  };

  return (
    <div className="bg-midnight-navy text-cloud-white">
      {/* Hero Section - Colorful! */}
      <section className="relative py-20 text-center bg-deep-navy/50 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat">
            Get in <span className="text-cyan-400">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-slate-grey max-w-3xl mx-auto">
            We're here to answer your questions and help you get started.
          </p>
        </div>
      </section>

      {/* Main Content Section - Colorful! */}
      <section className="py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: Contact Form - Colorful! */}
            <div className="glass p-8 rounded-2xl shadow-xl border-2 border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h2 className="text-2xl font-bold font-montserrat mb-6 text-purple-400">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-slate-grey mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-midnight-navy border border-slate-grey/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-cloud-white"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-slate-grey mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-midnight-navy border border-slate-grey/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-cloud-white"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-slate-grey mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-midnight-navy border border-slate-grey/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-cloud-white"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-slate-grey mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-midnight-navy border border-slate-grey/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-cloud-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-md font-montserrat font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column: Contact Details & Map - Colorful! */}
            <div>
              <div className="space-y-6 mb-8">
                <div className="glass p-6 rounded-2xl flex items-start border-2 border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                  <FiMail className="w-6 h-6 text-cyan-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold font-montserrat text-cyan-400">
                      Email
                    </h3>
                    <a
                      href="mailto:contact@bhagyainvestments.com"
                      className="text-slate-grey hover:text-cyan-400 transition-colors"
                    >
                      contact@bhagyainvestments.com
                    </a>
                  </div>
                </div>
                <div className="glass p-6 rounded-2xl flex items-start border-2 border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                  <FiPhone className="w-6 h-6 text-emerald-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold font-montserrat text-emerald-400">
                      Phone
                    </h3>
                    <a
                      href="tel:+918655427334"
                      className="text-slate-grey hover:text-emerald-400 transition-colors"
                    >
                      +918655427334
                    </a>
                  </div>
                </div>
                <div className="glass p-6 rounded-2xl flex items-start border-2 border-pink-500/20 hover:border-pink-500/40 transition-all">
                  <FiMapPin className="w-6 h-6 text-pink-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold font-montserrat text-pink-400">
                      Address
                    </h3>
                    <p className="text-slate-grey">
                      37, Ujjain trade Centre, Ghatkarpar Marg, near BJP Office,
                      Freeganj
                      <br />
                      Ujjain - 456001, Madhya Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map - Colorful border! */}
              <div className="h-80 w-full rounded-2xl overflow-hidden shadow-xl border-2 border-purple-500/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.4978406053374!2d75.78820998168196!3d23.178994056511144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963746dc684ee9f%3A0x797e48ceea7fd06b!2sVikram%20Marg%2C%20Madhav%20Nagar%2C%20Ujjain%2C%20Madhya%20Pradesh%20456010!5e1!3m2!1sen!2sin!4v1761762876238!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bhagya Investments Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
