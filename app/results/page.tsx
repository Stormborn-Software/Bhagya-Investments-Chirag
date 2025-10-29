
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const allItems = [
  { id: 1, category: 'Stocks', type: 'image', src: '/placeholders/perf-stock-1.png', title: 'Portfolio Snapshot - Q3 Growth' },
  { id: 2, category: 'Crypto', type: 'chart', title: 'BTC/USD vs. Nifty 50' },
  { id: 3, category: 'Derivatives', type: 'spotlight', title: 'Trade Spotlight: Nifty Options Hedge', description: 'A successful hedging strategy that protected capital during a volatile week.' },
  { id: 4, category: 'Stocks', type: 'chart', title: 'Portfolio Growth vs. Benchmark' },
  { id: 5, category: 'Crypto', type: 'image', src: '/placeholders/perf-crypto-1.png', title: 'Altcoin Portfolio Performance' },
  { id: 6, category: 'Stocks', type: 'spotlight', title: 'Trade Spotlight: Breakout Stock', description: 'Identifying and capitalizing on a breakout stock in the tech sector.' },
  { id: 7, category: 'Derivatives', type: 'image', src: '/placeholders/perf-derivs-1.png', title: 'Futures P&L Statement' },
  { id: 8, category: 'Crypto', type: 'chart', title: 'ETH Growth Analysis' },
];

const ResultsPage = () => {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' ? allItems : allItems.filter(item => item.category === filter);

  const filters = ['All', 'Stocks', 'Crypto', 'Derivatives'];

  return (
    <div className="bg-midnight-navy text-cloud-white">
      {/* Hero Section */}
      <section className="py-20 text-center bg-deep-navy/50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat">
            Our Performance
          </h1>
          <p className="mt-4 text-lg text-slate-grey max-w-3xl mx-auto">
            A track record of strategic execution and client success.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="bg-yellow-900/30 border border-yellow-500 text-yellow-300 px-4 py-3 rounded-lg text-center">
            <p className="font-bold">Disclaimer</p>
            <p className="text-sm">
              Past performance is not indicative of future results. Investments in the securities market are subject to market risks. Please read all related documents carefully before investing.
            </p>
          </div>
        </div>
      </section>

      {/* Performance Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-md font-montserrat text-sm font-medium transition-colors ${
                  filter === f
                    ? 'bg-performance-green text-midnight-navy'
                    : 'bg-deep-navy text-slate-grey hover:bg-electric-blue/20'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
            {filteredItems.map(item => (
              <div key={item.id} className="break-inside-avoid mb-8 bg-deep-navy rounded-lg shadow-xl overflow-hidden">
                {item.type === 'image' && item.src && (
                  <div>
                    <Image src={item.src} alt={item.title} width={500} height={300} className="w-full h-auto object-cover" />
                    <div className="p-4">
                      <h3 className="font-montserrat font-semibold">{item.title}</h3>
                    </div>
                  </div>
                )}
                {item.type === 'chart' && (
                  <div className="p-4">
                    <h3 className="font-montserrat font-semibold mb-2">{item.title}</h3>
                    <div className="bg-midnight-navy h-48 w-full flex items-center justify-center rounded">
                      <p className="text-slate-grey text-sm">[Chart Placeholder]</p>
                    </div>
                  </div>
                )}
                {item.type === 'spotlight' && (
                  <div className="p-6">
                    <h3 className="font-montserrat font-bold text-lg text-performance-green">Trade Spotlight</h3>
                    <h4 className="font-semibold my-2">{item.title}</h4>
                    <p className="text-slate-grey text-sm mb-4">{item.description}</p>
                    <a href="#" className="text-electric-blue font-medium hover:underline text-sm">
                      View Case Study -&gt;
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultsPage;
