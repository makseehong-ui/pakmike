
import React, { useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PROJECTS, PHONE_NUMBER } from '../constants';

const ProjectDetailScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = useMemo(() => PROJECTS.find(p => p.id === id), [id]);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
        <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">error</span>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Project Not Found</h2>
        <button 
          onClick={() => navigate('/projects')}
          className="bg-primary text-white px-8 py-3 rounded-xl font-bold"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col animate-in fade-in slide-in-from-right duration-500">
      {/* Hero */}
      <div className="relative h-[260px] w-full">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded w-fit mb-2">
            Recently Completed
          </div>
          <h1 className="text-white text-2xl font-black tracking-tight leading-tight">{project.title}</h1>
        </div>
      </div>

      <div className="px-6 py-8">
        {/* Stats Row */}
        <div className="flex items-center gap-6 mb-8 border-b border-slate-200 dark:border-white/5 pb-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Location</span>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-primary text-sm">location_on</span>
              <span className="text-slate-900 dark:text-white text-sm font-bold">{project.location}</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Completion</span>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-primary text-sm">event_available</span>
              <span className="text-slate-900 dark:text-white text-sm font-bold">{project.date}</span>
            </div>
          </div>
          {project.certified && (
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</span>
              <div className="flex items-center gap-1 text-green-500">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span className="text-sm font-bold">Certified</span>
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <section className="mb-10">
          <h2 className="text-slate-900 dark:text-white text-lg font-bold mb-3 tracking-tight">Project Summary</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {project.description || "A successful implementation of professional surveillance and electrical services, ensuring maximum safety and operational efficiency for the client."}
          </p>
        </section>

        {/* Gallery */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">Installation Gallery</h2>
            <span className="text-slate-400 text-xs font-bold">{project.gallery?.length || 0} Photos</span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {project.gallery?.map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
                <img src={img} alt={`${project.title} view ${idx}`} className="w-full object-cover aspect-video hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-slate-100 dark:bg-white/5 rounded-3xl p-8 text-center border border-slate-200 dark:border-white/10">
          <h3 className="text-slate-900 dark:text-white text-xl font-black mb-2">Impressed by this work?</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Get a professional consultation for your own property or business today.</p>
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="w-full h-14 bg-primary text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg shadow-primary/20"
          >
            <span className="material-symbols-outlined">call</span>
            Inquire Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailScreen;
