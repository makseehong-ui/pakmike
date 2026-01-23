
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { PHONE_NUMBER } from './constants';
import HomeScreen from './screens/HomeScreen';
import ServicesScreen from './screens/ServicesScreen';
import CatalogScreen from './screens/CatalogScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ContactScreen from './screens/ContactScreen';
import ServiceDetailScreen from './screens/ServiceDetailScreen';
import ProjectDetailScreen from './screens/ProjectDetailScreen';

const BottomNav: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (p: string) => path === p;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background-light/90 dark:bg-background-dark/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 pb-8 pt-2 px-6">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <Link to="/" className={`flex flex-col items-center gap-1 transition-colors ${isActive('/') ? 'text-primary' : 'text-slate-400'}`}>
          <span className={`material-symbols-outlined text-[26px] ${isActive('/') ? 'fill-[1]' : ''}`}>home</span>
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link to="/catalog" className={`flex flex-col items-center gap-1 transition-colors ${isActive('/catalog') ? 'text-primary' : 'text-slate-400'}`}>
          <span className={`material-symbols-outlined text-[26px] ${isActive('/catalog') ? 'fill-[1]' : ''}`}>grid_view</span>
          <span className="text-[10px] font-medium">Catalog</span>
        </Link>
        <Link to="/projects" className={`flex flex-col items-center gap-1 transition-colors ${isActive('/projects') ? 'text-primary' : 'text-slate-400'}`}>
          <span className={`material-symbols-outlined text-[26px] ${isActive('/projects') ? 'fill-[1]' : ''}`}>engineering</span>
          <span className="text-[10px] font-medium">Projects</span>
        </Link>
        <Link to="/contact" className={`flex flex-col items-center gap-1 transition-colors ${isActive('/contact') ? 'text-primary' : 'text-slate-400'}`}>
          <span className={`material-symbols-outlined text-[26px] ${isActive('/contact') ? 'fill-[1]' : ''}`}>person</span>
          <span className="text-[10px] font-medium">Support</span>
        </Link>
      </div>
    </nav>
  );
};

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const getTitle = () => {
    if (location.pathname.startsWith('/services/')) return 'Service Detail';
    if (location.pathname.startsWith('/projects/')) return 'Project Highlights';
    switch (location.pathname) {
      case '/services': return 'Our Services';
      case '/catalog': return 'CCTV Hardware';
      case '/projects': return 'Our Completed Projects';
      case '/contact': return 'Contact & Locations';
      default: return 'Pakmike Technology';
    }
  };

  return (
    <header className="sticky top-0 z-50 flex items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 justify-between border-b border-slate-200 dark:border-white/10 max-w-md mx-auto w-full">
      <div className="flex items-center gap-3">
        {!isHome && (
          <button onClick={() => navigate(-1)} className="text-primary flex size-8 items-center justify-center">
            <span className="material-symbols-outlined text-xl">arrow_back_ios</span>
          </button>
        )}
        {isHome ? (
          <>
            <div className="flex size-9 shrink-0 items-center justify-center bg-primary rounded-lg shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-white text-xl">shield_with_heart</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Pakmike</h2>
          </>
        ) : (
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">{getTitle()}</h2>
        )}
      </div>
      <a className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 active:scale-95 transition-transform" href={`tel:${PHONE_NUMBER}`}>
        <span className="material-symbols-outlined text-sm">call</span>
        Call Now
      </a>
    </header>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center">
        <div className="w-full max-w-md bg-background-light dark:bg-background-dark min-h-screen flex flex-col relative shadow-2xl overflow-x-hidden border-x border-slate-200 dark:border-slate-800">
          <Header />
          <main className="flex-1 overflow-y-auto pb-24">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/services" element={<ServicesScreen />} />
              <Route path="/services/:id" element={<ServiceDetailScreen />} />
              <Route path="/catalog" element={<CatalogScreen />} />
              <Route path="/projects" element={<ProjectsScreen />} />
              <Route path="/projects/:id" element={<ProjectDetailScreen />} />
              <Route path="/contact" element={<ContactScreen />} />
            </Routes>
          </main>
          <BottomNav />
        </div>
      </div>
    </Router>
  );
};

export default App;
