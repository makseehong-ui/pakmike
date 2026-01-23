
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectsScreen: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();
  const categories = ['All', 'CCTV', 'Electrical Wiring', 'Maintenance'];

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category.includes(filter) || p.title.includes(filter));

  return (
    <div className="flex flex-col animate-in fade-in duration-500">
      {/* Filter Chips */}
      <div className="sticky top-0 z-40 bg-background-light/90 dark:bg-background-dark/95 backdrop-blur-md py-3 border-b border-slate-200 dark:border-slate-800">
        <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 transition-all font-bold text-sm ${filter === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-white'}`}
            >
              {cat === 'CCTV' && <span className="material-symbols-outlined text-[18px]">videocam</span>}
              {cat === 'Electrical Wiring' && <span className="material-symbols-outlined text-[18px]">electric_bolt</span>}
              <p>{cat}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <main className="flex-1 px-4 py-4 space-y-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group">
            <div className="flex flex-col items-stretch justify-start rounded-2xl overflow-hidden bg-white dark:bg-[#1c2630] border border-slate-200 dark:border-white/5 shadow-sm transition-all active:scale-[0.98]">
              <div 
                className="relative w-full aspect-[16/10] bg-center bg-no-repeat bg-cover cursor-pointer"
                style={{ backgroundImage: `url("${project.imageUrl}")` }}
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <div className="absolute top-3 left-3 px-3 py-1 bg-primary/90 backdrop-blur-md rounded-full shadow-lg">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white">{project.category}</p>
                </div>
              </div>
              <div className="flex w-full flex-col p-5 gap-3">
                <div className="space-y-1">
                  <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight group-hover:text-primary transition-colors cursor-pointer" onClick={() => navigate(`/projects/${project.id}`)}>
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-white/60">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <p className="text-xs font-semibold">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-1.5">
                    {project.certified && (
                      <div className="flex items-center gap-1 text-green-500">
                        <span className="material-symbols-outlined text-xs">verified</span>
                        <span className="text-[10px] font-black uppercase tracking-tighter">Certified</span>
                      </div>
                    )}
                    <p className="text-[10px] text-slate-400 dark:text-white/30 italic">{project.date}</p>
                  </div>
                  <button 
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="flex items-center justify-center gap-2 rounded-xl h-10 px-6 bg-primary text-white text-xs font-bold transition-all hover:bg-primary/90 active:scale-95 shadow-md shadow-primary/10"
                  >
                    <span>View Project</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="h-20 flex flex-col items-center justify-center gap-2 text-slate-400 dark:text-white/20 italic">
          <span className="material-symbols-outlined">more_horiz</span>
          <p className="text-xs">End of gallery. More projects loading...</p>
        </div>
      </main>
    </div>
  );
};

export default ProjectsScreen;
