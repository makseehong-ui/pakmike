
import React from 'react';
import { BRANCHES, PHONE_NUMBER } from '../constants';

const ContactScreen: React.FC = () => {
  return (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom duration-500">
      {/* Support Card */}
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-2xl bg-white dark:bg-[#1c2127] p-5 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex flex-[2_2_0px] flex-col justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-slate-900 dark:text-white text-base font-bold leading-tight">Call Our Support Line</p>
              <p className="text-primary text-xl font-black leading-normal">{PHONE_NUMBER}</p>
            </div>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 px-6 bg-primary text-white gap-2 text-sm font-bold leading-normal w-fit transition-transform active:scale-95 shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              <span className="truncate uppercase tracking-wider">Call Now</span>
            </a>
          </div>
          <div 
            className="w-24 bg-center bg-no-repeat aspect-square bg-cover rounded-xl bg-primary/10 flex items-center justify-center border border-primary/10"
            style={{ 
              backgroundImage: `linear-gradient(rgba(19,127,236,0.1), rgba(19,127,236,0.1)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwgbjisUbKBnSVYxVCVV_CJuzorakmOPI-ftvzkTBLr-GygZk77HH1eVOsaMfwJLd1RiLWbpge0gMR42ebmeWIN05k-Mn6zZURfa2Ymdy9BwktRGuB2tuPyilr5jsDjfuGQm6-gfbL0JuWnLD-foYF_QYynPaKUVwU2IXJwg_E8QxzwXobLZqMKhV2ZDsEIDqLZ1x6w55ew2IBkfthffYoeM9ZclYXphNY-znYQevvSShJv-6_wsDrypK9xZRTQFUn1BCIEHNqDWNJ")` 
            }}
          />
        </div>
      </div>

      <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight px-4 pb-2 mt-4">Authorized Service Centres</h3>
      
      {/* Branch Cards */}
      <div className="flex flex-col gap-6 px-4 pb-8">
        {BRANCHES.map(branch => (
          <div key={branch.id} className="flex flex-col rounded-2xl bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div 
              className="w-full bg-center bg-no-repeat aspect-video bg-cover"
              style={{ backgroundImage: `url("${branch.mapImageUrl}")` }}
            />
            <div className="p-5 flex flex-col gap-3">
              <div>
                <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">{branch.name}</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-normal mt-2">{branch.address}</p>
              </div>
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 px-4 bg-primary/10 text-primary text-xs font-bold leading-normal gap-2 active:scale-[0.98] transition-all border border-primary/20">
                <span className="material-symbols-outlined text-lg">directions</span>
                <span>Get Directions</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Inquiry Form */}
      <div className="px-4 pb-8">
        <div className="bg-white dark:bg-[#1c2127] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight mb-4">Send us an Inquiry</h3>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Full Name</label>
              <input 
                className="w-full bg-slate-50 dark:bg-background-dark border-slate-200 dark:border-slate-800 rounded-xl focus:ring-primary focus:border-primary text-slate-900 dark:text-white px-4 py-3 text-sm" 
                placeholder="e.g. John Doe" 
                type="text" 
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email Address</label>
              <input 
                className="w-full bg-slate-50 dark:bg-background-dark border-slate-200 dark:border-slate-800 rounded-xl focus:ring-primary focus:border-primary text-slate-900 dark:text-white px-4 py-3 text-sm" 
                placeholder="john@example.com" 
                type="email" 
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Message</label>
              <textarea 
                className="w-full bg-slate-50 dark:bg-background-dark border-slate-200 dark:border-slate-800 rounded-xl focus:ring-primary focus:border-primary text-slate-900 dark:text-white px-4 py-3 text-sm" 
                placeholder="How can we help you today?" 
                rows={3}
              />
            </div>
            <button 
              className="mt-2 w-full flex items-center justify-center overflow-hidden rounded-xl h-14 bg-primary text-white font-bold transition-all hover:brightness-110 active:scale-[0.98] shadow-lg shadow-primary/20"
              type="button"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>

      <div className="px-4 pb-12 text-center">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-loose">
          © 2024 Pakmike Technology. All rights reserved.<br/>
          Mon - Sat, 9:00 AM - 6:00 PM
        </p>
      </div>
    </div>
  );
};

export default ContactScreen;
