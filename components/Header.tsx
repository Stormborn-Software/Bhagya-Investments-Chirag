'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-midnight-navy shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="Bhagya Investments Logo" width={40} height={40} />
            <span className="ml-3 text-lg md:text-xl font-bold text-cloud-white font-montserrat">Bhagya Investments</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} className="text-cloud-white">
            <FiMenu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-midnight-navy z-50 flex flex-col items-center justify-center">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-cloud-white">
            <FiX size={32} />
          </button>
          <nav className="flex flex-col items-center space-y-8 text-center">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl text-slate-grey hover:text-cloud-white font-montserrat">Home</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl text-slate-grey hover:text-cloud-white font-montserrat">About</Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-2xl text-slate-grey hover:text-cloud-white font-montserrat">Services</Link>
            <Link href="/results" onClick={() => setIsMenuOpen(false)} className="text-2xl text-slate-grey hover:text-cloud-white font-montserrat">Results</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-2xl text-slate-grey hover:text-cloud-white font-montserrat">Contact</Link>
          </nav>
          <div className="mt-12 flex flex-col space-y-6 w-full px-8">
            <button className="border border-performance-green text-performance-green w-full px-4 py-3 rounded-md font-montserrat font-medium hover:bg-performance-green hover:text-midnight-navy transition-colors">
              Join WhatsApp Community
            </button>
            <button className="bg-performance-green text-midnight-navy w-full px-4 py-3 rounded-md font-montserrat font-medium hover:bg-opacity-90 transition-colors">
              Open Account
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
