"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-100 navbar-glass backdrop-blur-lg shadow-md border-b border-purple-500/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png" // Change this to your new logo file  
              alt="Bhagya Investments Logo"
              width={40}
              height={40}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span className="ml-3 text-lg md:text-xl font-bold text-ivory font-montserrat group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
              Bhagya Investments
            </span>
          </Link>
        </div>

        {/* Desktop Navigation - Colorful hover states! */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-light-gray hover:text-purple-400 font-montserrat transition-colors relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/about"
            className="text-light-gray hover:text-cyan-400 font-montserrat transition-colors relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/services"
            className="text-light-gray hover:text-emerald-400 font-montserrat transition-colors relative group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/results"
            className="text-light-gray hover:text-orange-400 font-montserrat transition-colors relative group"
          >
            Results
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/contact"
            className="text-light-gray hover:text-pink-400 font-montserrat transition-colors relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://chat.whatsapp.com/KpKIlHAefzFFw9tn2tcMvt?mode=wwt"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-emerald-500 text-emerald-400 px-4 py-2 rounded-md font-montserrat text-sm font-medium hover:bg-emerald-500/10 transition-all hover:scale-105"
          >
            Join WhatsApp Community
          </a>
          <a
            href="https://choiceindia.com/open-free-demat-account?refercode=QzAwNTIxMzI=&source=Q0hPSUNFX0NPTk5FQ1RfQU5EUk9JRA=="
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md font-montserrat text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
          >
            Demat Account
          </a>
          <a
            href="https://www.delta.exchange/?code=JGARDS"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-md font-montserrat text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
          >
            Crypto Account
          </a>
        </div>

        {/* Mobile Menu Button - Colorful! */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-ivory hover:text-purple-400 transition-colors"
          >
            <FiMenu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Colorful gradients! */}
      {isMenuOpen && (
        <div className="fixed inset-0 modal-glass z-50 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/30 via-midnight-navy to-cyan-900/30">
          {/* Colorful background orbs */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-ivory hover:text-pink-400 transition-colors"
          >
            <FiX size={32} />
          </button>
          <nav className="flex flex-col items-center space-y-8 text-center relative z-10">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-slate-grey hover:text-purple-400 font-montserrat transition-all hover:scale-110"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-slate-grey hover:text-cyan-400 font-montserrat transition-all hover:scale-110"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-slate-grey hover:text-emerald-400 font-montserrat transition-all hover:scale-110"
            >
              Services
            </Link>
            <Link
              href="/results"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-slate-grey hover:text-orange-400 font-montserrat transition-all hover:scale-110"
            >
              Results
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-slate-grey hover:text-pink-400 font-montserrat transition-all hover:scale-110"
            >
              Contact
            </Link>
          </nav>
          <div className="mt-12 flex flex-col space-y-6 w-full px-8 relative z-10">
            <a
              href="https://chat.whatsapp.com/KpKIlHAefzFFw9tn2tcMvt?mode=wwt"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-emerald-500 text-emerald-400 w-full px-4 py-3 rounded-md font-montserrat font-medium hover:bg-emerald-500/10 transition-all hover:scale-105 text-center"
            >
              Join WhatsApp Community
            </a>
            <a
              href="https://choiceindia.com/open-free-demat-account?refercode=QzAwNTIxMzI=&source=Q0hPSUNFX0NPTk5FQ1RfQU5EUk9JRA=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-full px-4 py-3 rounded-md font-montserrat font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 text-center"
            >
              Demat Account
            </a>
            <a
              href="https://www.delta.exchange/?code=JGARDS"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-full px-4 py-3 rounded-md font-montserrat font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 text-center"
            >
              Crypto Account
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
