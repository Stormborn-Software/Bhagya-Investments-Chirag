import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

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
              <Image
                src="/logo.png"
                alt="Bhagya Investments Logo" // Change this to your new logo file
                width={40}
                height={40}
              />
              <span className="ml-3 text-xl font-bold font-montserrat">
                Bhagya Investments
              </span>
            </div>
            <p className="font-montserrat gradient-text italic font-semibold mb-4">
              Hedge Smart. Trade Wise.
            </p>
            <p className="text-slate-grey text-sm leading-relaxed">
              Our mission is to empower investors with intelligent strategies
              and cutting-edge technology to navigate the financial markets with
              confidence.
            </p>

            {/* Social links could go here */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://x.com/ChiragN13605624"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-deep-navy rounded-full flex items-center justify-center hover:bg-performance-green/20 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Twitter"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/chirag-nagar-3a328a1a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-deep-navy rounded-full flex items-center justify-center hover:bg-performance-green/20 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="LinkedIn"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/tradewithchirag__/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-deep-navy rounded-full flex items-center justify-center hover:bg-performance-green/20 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Instagram"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-cloud-white mb-6 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-slate-grey hover:text-performance-green transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-performance-green rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-grey hover:text-performance-green transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-performance-green rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-grey hover:text-performance-green transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-performance-green rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/results"
                  className="text-slate-grey hover:text-performance-green transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-performance-green rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Results
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-grey hover:text-performance-green transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-performance-green rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="font-montserrat font-bold text-cloud-white mb-6 text-lg">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-grey hover:text-performance-green transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-performance-green rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-slate-grey hover:text-performance-green transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-performance-green rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-slate-grey hover:text-performance-green transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-performance-green rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="font-montserrat font-bold text-cloud-white mb-6 text-lg">
              Contact Us
            </h3>
            <address className="not-italic space-y-4">
              <div>
                <p className="font-bold text-cloud-white mb-2">
                  Bhagya Investments
                </p>
                <div className="flex items-start text-slate-grey">
                  <FiMapPin className="w-5 h-5 text-performance-green mr-2 mt-1 flex-shrink-0" />
                  <p>
                    37, Ujjain trade Centre, Ghatkarpar Marg, near BJP Office,
                    Freeganj
                    <br />
                    Ujjain - 456001, Madhya Pradesh, India
                  </p>
                </div>
              </div>
              <div className="flex items-center text-slate-grey hover:text-performance-green transition-colors duration-300">
                <FiMail className="w-5 h-5 text-performance-green mr-2 flex-shrink-0" />
                <a href="mailto:contact@bhagyainvestments.com">
                  contact@bhagyainvestments.com
                </a>
              </div>
              <div className="flex items-center text-slate-grey hover:text-performance-green transition-colors duration-300">
                <FiPhone className="w-5 h-5 text-performance-green mr-2 flex-shrink-0" />
                <a href="tel:+911234567890">+918655427334</a>
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
            SEBI Registration No: INZ000160131
          </p>
          <p className="mt-4 md:mt-0">
            Crafted with <span className="text-red-500 animate-pulse">❤️</span>{" "}
            by{" "}
            <span className="text-performance-green font-semibold">
              Stormborn Software
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
