
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-midnight-navy text-cloud-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Branding */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <Image src="/logo.svg" alt="Bhagya Investments Logo" width={40} height={40} />
              <span className="ml-3 text-xl font-bold font-montserrat">Bhagya Investments</span>
            </div>
            <p className="font-montserrat text-performance-green italic">Hedge Smart. Trade Wise.</p>
            <p className="mt-4 text-slate-grey text-sm">
              Our mission is to empower investors with intelligent strategies and cutting-edge technology to navigate the financial markets with confidence.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-slate-grey mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-performance-green transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-performance-green transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-performance-green transition-colors">Services</Link></li>
              <li><Link href="/results" className="hover:text-performance-green transition-colors">Results</Link></li>
              <li><Link href="/contact" className="hover:text-performance-green transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="font-montserrat font-bold text-slate-grey mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-performance-green transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-performance-green transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer" className="hover:text-performance-green transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="font-montserrat font-bold text-slate-grey mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="font-bold">Bhagya Investments</p>
              <p className="text-slate-grey">123 Financial Street, Suite 456</p>
              <p className="text-slate-grey">Mumbai, Maharashtra 400001</p>
              <p className="mt-4"><a href="mailto:contact@bhagyainvestments.com" className="hover:text-performance-green transition-colors">contact@bhagyainvestments.com</a></p>
              <p><a href="tel:+911234567890" className="hover:text-performance-green transition-colors">+91 123 456 7890</a></p>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-deep-navy mt-8">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-slate-grey">
          <p>SEBI Registration No: [Client to provide]</p>
          <p className="mt-4 md:mt-0">Crafted with ❤️ by Stormborn Software</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
