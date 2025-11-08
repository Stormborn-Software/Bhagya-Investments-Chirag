import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-midnight-navy text-cloud-white min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full filter blur-3xl animate-glow"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[200px] font-bold font-montserrat leading-none">
            <span className="text-purple-400">4</span>
            <span className="text-cyan-400">0</span>
            <span className="text-pink-400">4</span>
          </h1>
        </div>

        {/* Error Message */}
        <div className="glass rounded-2xl p-8 md:p-12 max-w-2xl mx-auto border-2 border-purple-500/20 hover:border-purple-500/40 transition-all">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            Page Not <span className="text-cyan-400">Found</span>
          </h2>
          <p className="text-slate-grey text-lg mb-8">
            Oops! The page you're looking for seems to have taken an unexpected turn in the market. Don't worry, we'll help you get back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-montserrat font-medium hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center">
                Go to Homepage
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/contact"
              className="group border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-montserrat font-medium hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center">
                Contact Support
                <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <Link href="/about" className="glass p-4 rounded-xl hover:border-emerald-500/40 border-2 border-transparent transition-all hover:scale-105 group">
            <div className="text-emerald-400 text-2xl mb-2">📖</div>
            <p className="text-sm font-montserrat group-hover:text-emerald-400 transition-colors">About Us</p>
          </Link>
          <Link href="/services" className="glass p-4 rounded-xl hover:border-orange-500/40 border-2 border-transparent transition-all hover:scale-105 group">
            <div className="text-orange-400 text-2xl mb-2">💼</div>
            <p className="text-sm font-montserrat group-hover:text-orange-400 transition-colors">Services</p>
          </Link>
          <Link href="/results" className="glass p-4 rounded-xl hover:border-pink-500/40 border-2 border-transparent transition-all hover:scale-105 group">
            <div className="text-pink-400 text-2xl mb-2">📊</div>
            <p className="text-sm font-montserrat group-hover:text-pink-400 transition-colors">Results</p>
          </Link>
          <Link href="/contact" className="glass p-4 rounded-xl hover:border-cyan-500/40 border-2 border-transparent transition-all hover:scale-105 group">
            <div className="text-cyan-400 text-2xl mb-2">📧</div>
            <p className="text-sm font-montserrat group-hover:text-cyan-400 transition-colors">Contact</p>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center items-center gap-8 text-slate-grey text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span>Error Code: 404</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <span>Lost in Cyberspace</span>
          </div>
        </div>
      </div>
    </div>
  );
}
