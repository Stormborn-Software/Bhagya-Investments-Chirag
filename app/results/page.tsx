
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const allItems = [
  { id: 1, category: 'Stocks', type: 'image', src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80', title: 'Portfolio Snapshot - Q3 Growth' },
  { id: 2, category: 'Crypto', type: 'chart', title: 'BTC/USD vs. Nifty 50' },
  { id: 3, category: 'Derivatives', type: 'spotlight', title: 'Trade Spotlight: Nifty Options Hedge', description: 'A successful hedging strategy that protected capital during a volatile week.' },
  { id: 4, category: 'Stocks', type: 'chart', title: 'Portfolio Growth vs. Benchmark' },
  { id: 5, category: 'Crypto', type: 'image', src: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', title: 'Altcoin Portfolio Performance' },
  { id: 6, category: 'Stocks', type: 'spotlight', title: 'Trade Spotlight: Breakout Stock', description: 'Identifying and capitalizing on a breakout stock in the tech sector.' },
  { id: 7, category: 'Derivatives', type: 'image', src: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80', title: 'Futures P&L Statement' },
  { id: 8, category: 'Crypto', type: 'chart', title: 'ETH Growth Analysis' },
  { id: 9, category: 'Stocks', type: 'image', src: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80', title: 'Tech Sector Performance' },
  { id: 10, category: 'Derivatives', type: 'image', src: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&q=80', title: 'Options Strategy Returns' },
];

const ResultsPage = () => {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' ? allItems : allItems.filter(item => item.category === filter);

  const filters = ['All', 'Stocks', 'Crypto', 'Derivatives'];

  return (
    <div className="bg-midnight-navy text-cloud-white">
      {/* Hero Section */}
      <section className="relative py-20 text-center bg-deep-navy/50 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-performance-green rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-electric-blue rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            Our <span className="gradient-text">Performance</span>
          </h1>
          <p className="mt-4 text-lg text-slate-grey max-w-3xl mx-auto">
            A track record of strategic execution and client success.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="glass rounded-2xl border-2 border-yellow-500/30 px-6 py-4 text-center">
            <p className="font-bold text-yellow-400 mb-2 font-montserrat flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Important Disclaimer
            </p>
            <p className="text-sm text-slate-grey">
              Past performance is not indicative of future results. Investments in the securities market are subject to market risks. Please read all related documents carefully before investing.
            </p>
          </div>
        </div>
      </section>

      {/* Performance Gallery */}
      <section className="py-12 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="results-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#results-grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Filters */}
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-3 rounded-lg font-montserrat text-sm font-medium transition-all duration-300 ${
                  filter === f
                    ? 'bg-gradient-to-r from-performance-green to-electric-blue text-midnight-navy shadow-lg shadow-performance-green/50 scale-105'
                    : 'glass text-slate-grey hover:text-performance-green hover:border-performance-green/50'
                }`}
              >
                {f}
                {filter === f && (
                  <span className="ml-2 inline-block w-2 h-2 bg-midnight-navy rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="break-inside-avoid mb-8 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-deep-navy rounded-2xl shadow-xl overflow-hidden hover-glow transition-all duration-500">
                  {item.type === 'image' && item.src && (
                    <div className="relative overflow-hidden">
                      <Image 
                        src={item.src} 
                        alt={item.title} 
                        width={500} 
                        height={300} 
                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="p-6">
                        <h3 className="font-montserrat font-semibold text-lg group-hover:text-performance-green transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  )}
                  {item.type === 'chart' && (
                    <div className="p-6">
                      <h3 className="font-montserrat font-semibold mb-4 text-lg group-hover:text-performance-green transition-colors duration-300">
                        {item.title}
                      </h3>
                      <div className="bg-midnight-navy h-64 w-full flex items-center justify-center rounded-xl border-2 border-deep-navy group-hover:border-performance-green/30 transition-colors duration-500 relative overflow-hidden">
                        {/* Chart placeholder with animated lines */}
                        <div className="absolute inset-0 flex items-end justify-around p-6">
                          {[...Array(8)].map((_, i) => (
                            <div 
                              key={i} 
                              className="bg-gradient-to-t from-performance-green to-electric-blue rounded-t-lg transition-all duration-500 hover:scale-105"
                              style={{ 
                                width: '12%', 
                                height: `${30 + Math.random() * 60}%`,
                                animationDelay: `${i * 0.1}s`
                              }}
                            ></div>
                          ))}
                        </div>
                        <p className="text-slate-grey text-sm relative z-10 glass px-4 py-2 rounded-lg">
                          Interactive Chart
                        </p>
                      </div>
                    </div>
                  )}
                  {item.type === 'spotlight' && (
                    <div className="p-8 relative">
                      {/* Corner decoration */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-performance-green/20 to-transparent rounded-bl-full"></div>
                      
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-performance-green to-electric-blue rounded-full flex items-center justify-center mr-3">
                          <svg className="w-6 h-6 text-midnight-navy" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <h3 className="font-montserrat font-bold text-xl text-performance-green">Trade Spotlight</h3>
                      </div>
                      <h4 className="font-semibold text-lg mb-3 font-montserrat group-hover:text-electric-blue transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-slate-grey text-sm mb-6 leading-relaxed">{item.description}</p>
                      <a href="#" className="inline-flex items-center text-electric-blue font-medium hover:text-performance-green transition-colors duration-300 text-sm group">
                        View Case Study
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultsPage;
