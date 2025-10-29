
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-midnight-navy shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="Bhagya Investments Logo" width={40} height={40} />
          <span className="ml-3 text-xl font-bold text-cloud-white font-montserrat">Bhagya Investments</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-slate-grey hover:text-cloud-white font-montserrat">Home</Link>
          <Link href="/about" className="text-slate-grey hover:text-cloud-white font-montserrat">About</Link>
          <Link href="/services" className="text-slate-grey hover:text-cloud-white font-montserrat">Services</Link>
          <Link href="/results" className="text-slate-grey hover:text-cloud-white font-montserrat">Results</Link>
          <Link href="/contact" className="text-slate-grey hover:text-cloud-white font-montserrat">Contact</Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <button className="border border-performance-green text-performance-green px-4 py-2 rounded-md font-montserrat text-sm font-medium hover:bg-performance-green hover:text-midnight-navy transition-colors">
            Join WhatsApp Community
          </button>
          <button className="bg-performance-green text-midnight-navy px-4 py-2 rounded-md font-montserrat text-sm font-medium hover:bg-opacity-90 transition-colors">
            Open Account
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
