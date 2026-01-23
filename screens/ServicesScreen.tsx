
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServicesScreen: React.FC = () => {
  return (
    <div className="flex flex-col animate-in fade-in duration-300">
      <div className="px-4 py-3">
        <div 
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-gray-800 rounded-xl min-h-[240px] relative border border-slate-800"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(16, 25, 34, 0.9) 0%, rgba(16, 25, 34, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKTXSG7bZPha6rEA8u8_OFJ1HOQu_VISQeMyQBKLJ53VAAaQ9z1SAtegnKB04YruLPSDD23Du84J9zhJg2dDhCLJ1NbR2MTVEBOhJszpJwrfd1raf1M1TXr8oPLGGTbUmOwtdsjyP-_y0NMHJIGK9bO4fTWU_j8S_8EEzNCJdqhaK5dJkYwJZOeeR9SZUOIPH1f2Fu79zKnCZoIlizGRO1xAT1UdqfzQHquWDXQEDNmQtbJhY2dkjVJBtQ_h1f2VoXD7vgTCvmSn8e")`
          }}
        >
          <div className="flex flex-col p-6">
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Pakmike Technology</span>
            <h1 className="text-white text-3xl font-black leading-tight">Advanced Protection & Power</h1>
          </div>
        </div>
      </div>

      <section className="px-4 py-6">
        <h2 className="text-slate-900 dark:text-white tracking-tight text-2xl font-bold leading-tight pb-3">Professional Solutions</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
          We deliver reliable security surveillance and expert electrical wiring services tailored for industrial, commercial, and residential projects in Penang.
        </p>
      </section>

      {/* Services List */}
      <div className="flex flex-col gap-6 px-4 pb-8">
        {SERVICES.map((service) => (
          <Link key={service.id} to={`/services/${service.id}`} className="group">
            <div className="bg-white dark:bg-gray-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm transition-all active:scale-[0.98]">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <span className="material-symbols-outlined text-primary text-3xl">{service.icon}</span>
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">{service.name}</h2>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_forward_ios</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs mb-6 leading-relaxed line-clamp-2">
                  {service.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-white/5 rounded-md text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">
                      {feat.title}
                    </span>
                  ))}
                  {service.features.length > 3 && (
                    <span className="px-2 py-1 bg-slate-100 dark:bg-white/5 rounded-md text-[9px] font-bold text-slate-500 dark:text-slate-400">
                      +{service.features.length - 3} More
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Trust Badges */}
      <section className="grid grid-cols-2 gap-4 px-4 pb-12">
        <div className="bg-slate-100 dark:bg-gray-800/60 p-5 rounded-xl flex flex-col items-center text-center border border-slate-200 dark:border-white/5">
          <span className="material-symbols-outlined text-primary mb-2 text-3xl">verified_user</span>
          <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest">Certified Technicians</p>
        </div>
        <div className="bg-slate-100 dark:bg-gray-800/60 p-5 rounded-xl flex flex-col items-center text-center border border-slate-200 dark:border-white/5">
          <span className="material-symbols-outlined text-primary mb-2 text-3xl">support_agent</span>
          <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest">Lifetime Support</p>
        </div>
      </section>
    </div>
  );
};

export default ServicesScreen;
