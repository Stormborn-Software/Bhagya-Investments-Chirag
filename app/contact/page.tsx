
'use client';

import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Form submitted! (This is a placeholder)');
  };

  return (
    <div className="bg-midnight-navy text-cloud-white">
      {/* Hero Section */}
      <section className="py-20 text-center bg-deep-navy/50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-slate-grey max-w-3xl mx-auto">
            We're here to answer your questions and help you get started.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: Contact Form */}
            <div className="bg-deep-navy p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold font-montserrat mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-slate-grey mb-2">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full bg-midnight-navy border border-slate-grey/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-performance-green" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-slate-grey mb-2">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full bg-midnight-navy border border-slate-grey/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-performance-green" />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-slate-grey mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full bg-midnight-navy border border-slate-grey/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-performance-green" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-slate-grey mb-2">Your Message</label>
                  <textarea id="message" name="message" rows={5} required className="w-full bg-midnight-navy border border-slate-grey/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-performance-green"></textarea>
                </div>
                <button type="submit" className="w-full bg-performance-green text-midnight-navy px-6 py-3 rounded-md font-montserrat font-medium hover:bg-opacity-90 transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column: Contact Details & Map */}
            <div>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <FiMail className="w-6 h-6 text-performance-green mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold font-montserrat">Email</h3>
                    <a href="mailto:contact@bhagyainvestments.com" className="text-slate-grey hover:text-electric-blue">contact@bhagyainvestments.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiPhone className="w-6 h-6 text-performance-green mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold font-montserrat">Phone</h3>
                    <a href="tel:+911234567890" className="text-slate-grey hover:text-electric-blue">+91 123 456 7890</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiMapPin className="w-6 h-6 text-performance-green mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold font-montserrat">Address</h3>
                    <p className="text-slate-grey">123 Financial Street, Suite 456<br />Mumbai, Maharashtra 400001</p>
                  </div>
                </div>
              </div>
              
              {/* Embedded Google Map */}
              <div className="h-80 w-full bg-deep-navy rounded-lg overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.707799742823!2d72.8754959148538!3d19.07656238708738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d6408c5!2sBandra%20Kurla%20Complex!5e0!3m2!1sen!2sin!4v1672221234567!5m2!1sen!2sin"
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
