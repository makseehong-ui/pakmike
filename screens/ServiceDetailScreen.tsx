
import React, { useMemo, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES, PROJECTS, PHONE_NUMBER } from '../constants';
import { GalleryItem } from '../types';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="text-slate-900 dark:text-white font-bold text-sm tracking-tight pr-4">
          {question}
        </span>
        <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const CarouselMedia: React.FC<{ item: GalleryItem; active: boolean }> = ({ item, active }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  React.useEffect(() => {
    if (item.type === 'video' && videoRef.current) {
      if (active) {
        videoRef.current.play().catch(() => {
          // Auto-play might be blocked by browser if not muted
          console.log('Autoplay blocked');
        });
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [active, item.type]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (item.type === 'video') {
    return (
      <div className="relative w-full h-full group/video">
        <video
          ref={videoRef}
          src={item.url}
          poster={item.poster}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          onClick={togglePlay}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {!isPlaying && (
            <div className="size-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 animate-pulse">
              <span className="material-symbols-outlined text-white text-4xl fill-[1]">play_arrow</span>
            </div>
          )}
        </div>
        <div className="absolute top-4 left-4 bg-primary/90 text-white text-[10px] font-black px-2 py-0.5 rounded flex items-center gap-1 uppercase tracking-widest shadow-lg">
          <span className="material-symbols-outlined text-xs">smart_display</span>
          Demo Video
        </div>
      </div>
    );
  }

  return <img src={item.url} alt="Service Gallery" className="w-full h-full object-cover" />;
};

const ServiceDetailScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const service = useMemo(() => SERVICES.find(s => s.id === id), [id]);
  const relatedProject = useMemo(() => 
    service?.relatedProjectId ? PROJECTS.find(p => p.id === service.relatedProjectId) : null
  , [service]);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
        <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">error</span>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Service Not Found</h2>
        <p className="text-slate-500 mb-6">The service you are looking for might have been moved or renamed.</p>
        <button 
          onClick={() => navigate('/services')}
          className="bg-primary text-white px-8 py-3 rounded-xl font-bold"
        >
          Back to Services
        </button>
      </div>
    );
  }

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveMediaIndex(index);
  };

  return (
    <div className="flex flex-col animate-in fade-in slide-in-from-right duration-500 relative">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <img 
          src={service.heroImageUrl} 
          alt={service.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-primary p-2 rounded-lg shadow-lg">
              <span className="material-symbols-outlined text-white text-xl leading-none">{service.icon}</span>
            </div>
            <span className="text-primary text-xs font-black uppercase tracking-widest">Premium Service</span>
          </div>
          <h1 className="text-white text-3xl font-black tracking-tight">{service.name}</h1>
        </div>
      </div>

      {/* Media Carousel (Mixed Image/Video) */}
      {service.gallery && service.gallery.length > 0 && (
        <div className="mt-4 px-4">
          <div className="relative group">
            <div 
              onScroll={handleScroll}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-2"
            >
              {service.gallery.map((media, idx) => (
                <div 
                  key={idx} 
                  className="flex-none w-full snap-center aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-black"
                >
                  <CarouselMedia item={media} active={activeMediaIndex === idx} />
                </div>
              ))}
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-1.5 mt-2">
              {service.gallery.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeMediaIndex === idx ? 'w-6 bg-primary' : 'w-1.5 bg-slate-300 dark:bg-slate-700'}`}
                />
              ))}
            </div>

            {/* Hint for Swiping */}
            <div className="absolute right-4 bottom-8 bg-black/40 backdrop-blur-sm text-white/80 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 pointer-events-none">
              <span className="material-symbols-outlined text-xs">swipe</span>
              Swipe
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="px-6 py-8 pb-32">
        <section className="mb-10">
          <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-4 tracking-tight">Overview</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
            {service.longDescription}
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-10">
          <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-6 tracking-tight">Key Capabilities</h2>
          <div className="grid grid-cols-1 gap-4">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl">
                <div className="size-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">{feature.icon}</span>
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-base leading-tight mb-1">{feature.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        {service.faq && service.faq.length > 0 && (
          <section className="mb-10">
            <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-4 tracking-tight">Frequently Asked Questions</h2>
            <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-5">
              {service.faq.map((item, idx) => (
                <FAQItem key={idx} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <section className="mb-10 bg-primary/5 p-6 rounded-3xl border border-primary/10">
          <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-6 tracking-tight">Why It Matters</h2>
          <ul className="space-y-4">
            {service.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 text-xl font-bold">check_circle</span>
                <span className="text-slate-700 dark:text-slate-200 text-sm font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Related Case Study */}
        {relatedProject && (
          <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">Recent Implementation</h2>
              <Link to="/projects" className="text-primary text-xs font-bold uppercase tracking-widest">View Gallery</Link>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-background-dark border border-slate-800">
              <img 
                src={relatedProject.imageUrl} 
                alt={relatedProject.title} 
                className="w-full aspect-video object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-accent-yellow text-[10px] font-black uppercase tracking-[0.2em] mb-1">Case Study</p>
                <h3 className="text-white text-lg font-bold leading-tight mb-2">{relatedProject.title}</h3>
                <div className="flex items-center gap-1.5 text-white/60">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <p className="text-xs font-medium">{relatedProject.location}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Call to Action Card (Static) */}
        <section className="mt-4 pt-6 border-t border-slate-200 dark:border-white/10">
          <div className="bg-primary rounded-3xl p-8 text-center shadow-xl shadow-primary/20">
            <h3 className="text-white text-2xl font-black mb-2">Need a Custom Setup?</h3>
            <p className="text-white/80 text-sm mb-6">Our experts provide specialized designs for industrial and commercial projects.</p>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="w-full h-14 bg-white text-primary rounded-xl font-bold text-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined">call</span>
              Direct Consult
            </a>
          </div>
        </section>
      </div>

      {/* Sticky Bottom CTA Button */}
      <div className="fixed bottom-[84px] left-0 right-0 z-40 px-6 max-w-md mx-auto pointer-events-none">
        <Link 
          to="/contact" 
          className="pointer-events-auto flex w-full items-center justify-center gap-2 rounded-2xl bg-primary h-16 text-white font-black text-lg shadow-2xl shadow-primary/40 border-2 border-white/10 active:scale-95 transition-transform animate-in slide-in-from-bottom duration-700"
        >
          <span className="material-symbols-outlined">description</span>
          GET A QUOTE
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetailScreen;
