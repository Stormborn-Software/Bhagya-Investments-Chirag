import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-midnight-navy text-cloud-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-performance-green rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Branding */}
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <Image src="/logo.svg" alt="Bhagya Investments Logo" width={40} height={40} />
              <span className="ml-3 text-xl font-bold font-montserrat">Bhagya Investments</span>
            </div>
            <p className="font-montserrat gradient-text italic font-semibold mb-4">Hedge Smart. Trade Wise.</p>
            <p className="text-slate-grey text-sm leading-relaxed">
              Our mission is to empower investors with intelligent strategies and cutting-edge technology to navigate the financial markets with confidence.
            </p>
            
            {/* Social links could go here */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-deep-navy rounded-full flex items-center justify-center hover:bg-performance-green/20 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-deep-navy rounded-full flex items-center justify-center hover:bg-performance-green/20 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-deep-navy rounded-full flex items-center justify-center hover:bg-performance-green/20 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-cloud-white mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-grey hover:text-performance-green transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-performance-green rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                Home
              </Link></li>
              <li><Link href="/about" className="text-slate-grey hover:text-performance-green transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-performance-green rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                About
              </Link></li>
              <li><Link href="/services" className="text-slate-grey hover:text-performance-green transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-performance-green rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                Services
              </Link></li>
              <li><Link href="/results" className="text-slate-grey hover:text-performance-green transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-performance-green rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                Results
              </Link></li>
              <li><Link href="/contact" className="text-slate-grey hover:text-performance-green transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-performance-green rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                Contact
              </Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="font-montserrat font-bold text-cloud-white mb-6 text-lg">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-slate-grey hover:text-performance-green transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-performance-green rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                Privacy Policy
              </Link></li>
              <li><Link href="/terms-conditions" className="text-slate-grey hover:text-performance-green transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-performance-green rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                Terms & Conditions
              </Link></li>
              <li><Link href="/disclaimer" className="text-slate-grey hover:text-performance-green transition-colors duration-300 flex items-center group">
                <span className="w-2 h-2 bg-performance-green rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                Disclaimer
              </Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="font-montserrat font-bold text-cloud-white mb-6 text-lg">Contact Us</h3>
            <address className="not-italic space-y-4">
              <div>
                <p className="font-bold text-cloud-white mb-2">Bhagya Investments</p>
                <div className="flex items-start text-slate-grey">
                  <FiMapPin className="w-5 h-5 text-performance-green mr-2 mt-1 flex-shrink-0" />
                  <p>123 Financial Street, Suite 456<br />Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              <div className="flex items-center text-slate-grey hover:text-performance-green transition-colors duration-300">
                <FiMail className="w-5 h-5 text-performance-green mr-2 flex-shrink-0" />
                <a href="mailto:contact@bhagyainvestments.com">contact@bhagyainvestments.com</a>
              </div>
              <div className="flex items-center text-slate-grey hover:text-performance-green transition-colors duration-300">
                <FiPhone className="w-5 h-5 text-performance-green mr-2 flex-shrink-0" />
                <a href="tel:+911234567890">+91 123 456 7890</a>
              </div>
            </address>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-deep-navy/50 relative z-10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-grey">
          <p className="flex items-center">
            <span className="w-2 h-2 bg-performance-green rounded-full mr-2 animate-pulse"></span>
            SEBI Registration No: [Client to provide]
          </p>
          <p className="mt-4 md:mt-0">
            Crafted with <span className="text-red-500 animate-pulse">❤️</span> by <span className="text-performance-green font-semibold">Stormborn Software</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
