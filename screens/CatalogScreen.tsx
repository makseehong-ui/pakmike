
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';

const CatalogScreen: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Hikvision' | 'Dahua'>('All');
  const [search, setSearch] = useState('');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesBrand = filter === 'All' || p.brand === filter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  return (
    <div className="flex flex-col animate-in slide-in-from-right duration-300">
      {/* Search Bar */}
      <div className="px-4 py-2 sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
          <input 
            type="text" 
            placeholder="Search cameras, NVRs..."
            className="w-full bg-white dark:bg-gray-800 border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-primary focus:border-primary text-slate-900 dark:text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Hero Branding */}
      <div className="px-4 py-4">
        <div 
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-primary/20 rounded-2xl min-h-[180px] border border-primary/10 shadow-lg relative"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(16, 25, 34, 0.1) 0%, rgba(16, 25, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVcayasKCxWISlnkM5ZbSsYwUbC-UawY8YzNQXSNjUmWHePmHj7NLY6AhLox0w5MGR4n_X2b4HHE52yCgzUuMon-n47JMB03bF25WTaj2tPjA4qDHdgn720sMUGmH0CVS_MA6cBkrUfdvJ1QkdEkqxguwIMCw2LS4mIBJmdXI6Ucn3TOu8eWbQ972xidqtdXKBZzGMUJzaczqHMyLTX1BdNwuTrQYYzluVWvYmrkiwIpR7j1WqqG7Sk7fimOY-Kh1hEEBlhYOveIwf")`
          }}
        >
          <div className="p-5">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Authorized Partner</span>
            </div>
            <h1 className="text-white text-2xl font-bold leading-tight">Pakmike Solutions</h1>
            <p className="text-gray-300 text-xs mt-1">Premium surveillance powered by Hikvision & Dahua.</p>
          </div>
        </div>
      </div>

      {/* Brand Filters */}
      <div className="px-4 py-2">
        <div className="flex h-11 flex-1 items-center justify-center rounded-xl bg-slate-200 dark:bg-gray-800 p-1">
          {['All', 'Hikvision', 'Dahua'].map((b) => (
            <button
              key={b}
              onClick={() => setFilter(b as any)}
              className={`flex-1 h-full rounded-lg text-xs font-bold transition-all ${filter === b ? 'bg-white dark:bg-background-dark text-primary shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
            >
              {b === 'All' ? 'All Brands' : b}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex flex-col bg-white dark:bg-gray-800/50 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm transition-transform active:scale-95">
            <div className="relative w-full aspect-square bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center p-4">
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-primary/90 text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter" style={product.tagColor ? { backgroundColor: product.tagColor } : {}}>
                  {product.tag}
                </span>
              </div>
              <img src={product.imageUrl} alt={product.name} className="max-w-full max-h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
            </div>
            <div className="p-3 flex flex-col flex-1">
              <p className={`text-[9px] font-black uppercase tracking-widest mb-1 ${product.brand === 'Hikvision' ? 'text-hikvision' : 'text-dahua'}`}>
                {product.brand}
              </p>
              <h3 className="text-slate-900 dark:text-white text-sm font-bold leading-tight mb-2 line-clamp-2">{product.name}</h3>
              <div className="space-y-1 mb-4 flex-1">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined text-[14px]">
                      {idx === 0 ? 'visibility' : 'high_res'}
                    </span>
                    <p className="text-[10px] font-semibold leading-none">{spec}</p>
                  </div>
                ))}
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white text-[10px] font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1 active:scale-95 shadow-md shadow-primary/10">
                <span className="material-symbols-outlined text-[16px]">engineering</span>
                Inquire
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 px-10 text-center">
          <span className="material-symbols-outlined text-5xl text-slate-300 dark:text-slate-700 mb-4">search_off</span>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">No products found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default CatalogScreen;
