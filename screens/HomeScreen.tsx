import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, BRANCHES, PHONE_NUMBER } from '../constants';

const HomeScreen: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative">
        <div
          className="flex min-h-[420px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-6 pb-12"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 25, 34, 0.2) 0%, rgba(16, 25, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTI4kW8HSduu8-f0i3tOWTeRPLaSszUHeznRyglc3U8IPmZNUnVUCccNyFsAlVc_n-T7AcizaM2AXZaRNN-YraNn9MxRwxb99dC6-Rc05ynV34FofQxoOXzk71yXqELosXfYbrTNJVbmIC6sPl6GAyrzixeNyVu6xFv3GMQ-n4X2RShF5kaWfa221YnkOaj2GMxyMgbqhItwsOKCW7zI8xGHbIxBOxyGopyuJRpkbes5yg4AcdpZx-tGHtxVQ3235XCdHsgfU3Tz__")`
          }}
        >
          <div className="flex flex-col gap-3 text-left">
            <span className="bg-accent-yellow text-background-dark text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded w-fit">Expert Solutions</span>
            <h1 className="text-white text-4xl font-black leading-tight tracking-tight">
              Expert Security & Electrical Services
            </h1>
            <h2 className="text-slate-300 text-base font-normal leading-relaxed max-w-xs">
              Trusted installations for homes and businesses across Penang.
            </h2>
          </div>
          <a className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-6 bg-primary text-white text-lg font-bold shadow-lg shadow-primary/20 transition-transform active:scale-95" href={`tel:${PHONE_NUMBER}`}>
            <span className="truncate">{PHONE_NUMBER}</span>
          </a>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-6">
        <div className="flex items-center justify-between px-4 pb-4">
          <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">Our Services</h2>
          <Link to="/services" className="text-primary text-sm font-semibold">View All</Link>
        </div>
        <div className="grid grid-cols-2 gap-3 px-4">
          {SERVICES.map((service) => (
            <Link key={service.id} to={`/services/${service.id}`} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-col gap-3 rounded-xl p-4 aspect-square justify-between transition-transform active:scale-95">
              <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">{service.icon}</span>
              </div>
              <p className="text-slate-900 dark:text-white text-base font-bold leading-tight">{service.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-6 bg-slate-100 dark:bg-white/5 mx-4 rounded-2xl">
        <h2 className="text-slate-900 dark:text-white text-xl font-bold px-6 pb-6 pt-2">Why Choose Us</h2>
        <div className="flex flex-col gap-6 px-6 pb-4">
          <div className="flex gap-4 items-start">
            <div className="size-12 rounded-full bg-accent-yellow/20 flex shrink-0 items-center justify-center">
              <span className="material-symbols-outlined text-accent-yellow">verified</span>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold">Certified Technicians</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Our team is fully licensed and highly trained for all security needs.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="size-12 rounded-full bg-primary/20 flex shrink-0 items-center justify-center">
              <span className="material-symbols-outlined text-primary">schedule</span>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold">Quick Response</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Emergency services available in George Town and surrounding areas.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="size-12 rounded-full bg-green-500/20 flex shrink-0 items-center justify-center">
              <span className="material-symbols-outlined text-green-500">payments</span>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold">Transparent Pricing</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm">No hidden costs. Get a detailed quote before we start any work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-8">
        <div className="px-4 pb-4">
          <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">Our Service Centres</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Serving the community across three main service centres.</p>
        </div>
        <div className="flex flex-col gap-3 px-4">
          {BRANCHES.map(branch => (
            <Link to="/contact" key={branch.id} className="flex items-center justify-between p-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl active:bg-slate-50 dark:active:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span className="text-slate-900 dark:text-white font-semibold">{branch.name.split(' ')[0] + ' ' + branch.name.split(' ')[1]}</span>
              </div>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="p-6 bg-primary mt-4 text-center rounded-t-[2rem]">
        <h3 className="text-white text-2xl font-black mb-2">Need Help Fast?</h3>
        <p className="text-white/80 mb-6 text-sm">Our experts are ready to assist with your security and electrical needs at any of our service centres.</p>
        <a className="inline-flex items-center justify-center gap-2 w-full bg-white text-primary h-14 rounded-xl font-bold text-lg shadow-xl shadow-black/10 active:scale-[0.98] transition-transform" href={`tel:${PHONE_NUMBER}`}>
          <span className="material-symbols-outlined">call</span>
          Call {PHONE_NUMBER}
        </a>
        <div className="mt-8 pt-8 border-t border-white/20 text-white/60 text-[10px] uppercase tracking-widest font-bold">
          © 2024 Pakmike Technology. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomeScreen;
