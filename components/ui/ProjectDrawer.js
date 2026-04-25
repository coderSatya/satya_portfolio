'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function ProjectDrawer({ project, isOpen, onClose }) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const renderHighlightedText = (text) => {
    if (!text) return null;
    const keywords = ["AI", "Next.js", "Performance", "SEO", "AWS", "Full Stack", "GraphQL", "SSR", "React.js", "Node.js", "MERN"];
    const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, i) => {
      const isKeyword = keywords.some(k => k.toLowerCase() === part.toLowerCase());
      if (isKeyword) {
        return (
          <span key={i} className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-void border-l border-white/5 z-[101] overflow-y-auto no-scrollbar shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Header / Close */}
            <div className="sticky top-0 p-6 flex justify-between items-center bg-void/90 backdrop-blur-md z-30 border-b border-white/5">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.3em]">Project Explorer</span>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/5 transition-colors group"
              >
                <svg className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8 md:p-10 pt-6 md:pt-8">
              {/* Category & Title */}
              <div className="mb-8">
                <span className="inline-block text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-4 px-3 py-1 bg-white/5 rounded-full border border-white/10" style={{ color: project.color }}>
                  {project.category}
                </span>
                <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-[1.1] mb-6">
                  {project.name}
                </h2>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-[10px] font-mono text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-12">
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-void font-bold text-sm hover:translate-y-[-2px] transition-all duration-300 shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
                    <span>Live Demo</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-white/10 text-white font-bold text-sm hover:bg-white/5 hover:translate-y-[-2px] transition-all duration-300">
                    <span>Source Code</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </a>
                )}
              </div>
 
              {/* Content Structure */}
              <div className="space-y-12">
                {/* Overview */}
                <section>
                   <div className="flex items-center gap-3 mb-6">
                     <span className="w-8 h-[2px]" style={{ backgroundColor: project.color }} />
                     <h3 className="font-display font-black text-xl text-white uppercase tracking-wider">The Journey</h3>
                   </div>
                   <div className="font-body text-slate-300 leading-relaxed text-lg whitespace-pre-wrap">
                     {renderHighlightedText(project.description)}
                   </div>
                </section>

                {/* Features Section */}
                {project.features && (
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                       <span className="w-8 h-[2px] bg-emerald-500/50" />
                       <h3 className="font-display font-black text-xl text-white uppercase tracking-wider">Key Features</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {project.features.map((feature, i) => (
                        <div key={i} className="group/item flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 hover:bg-emerald-500/[0.02] transition-all duration-300">
                          <div className="mt-1 p-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-slate-300 group-hover/item:text-white transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Dynamic Stats / Impact */}
                {project.impact && (
                  <section className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                    <h3 className="font-display font-black text-xl text-white uppercase tracking-wider mb-8 text-center">Project Impact</h3>
                    <div className="grid grid-cols-2 gap-8">
                      {project.impact.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-3xl font-display font-black mb-1" style={{ color: project.color }}>
                            {stat.value}
                          </div>
                          <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest leading-tight">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Space at the bottom */}
              <div className="h-20" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
