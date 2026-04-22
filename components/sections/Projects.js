'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionLabel } from '@/components/ui/UIElements';
import { portfolioData } from '@/utils/data';

const { projects } = portfolioData;

// Lazy load 3D background
const ProjectsVisual = dynamic(() => import('@/components/three/ProjectsVisual'), {
  ssr: false,
  loading: () => null,
});

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const isFeatured = project.isFeatured;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`group relative h-full ${isFeatured ? 'lg:col-span-2' : ''}`}
    >
      <div className={`relative h-full glass rounded-[2rem] p-8 md:p-10 flex flex-col border transition-all duration-500 overflow-hidden ${
        isFeatured ? 'border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.1)]' : 'border-white/5 group-hover:border-white/10'
      }`}>
        
        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-6 right-6 z-20">
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-widest animate-pulse">
              🔥 Featured Project
            </span>
          </div>
        )}

        {/* Project Accent Glow */}
        <div 
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-[80px] pointer-events-none"
          style={{ background: project.color }}
        />

        <div className={`flex flex-col gap-6 ${isFeatured ? 'lg:flex-row lg:items-start lg:gap-12' : ''}`}>
          {/* Content Wrapper */}
          <div className="flex-grow">
            <div className="flex flex-col gap-3 mb-6">
              <span 
                className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold"
                style={{ color: project.color }}
              >
                {project.category}
              </span>
              <h3 className={`font-display font-black text-white leading-tight transition-colors ${
                isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl'
              }`}>
                {project.name}
              </h3>
            </div>

            <p className={`font-body text-slate-400 leading-relaxed mb-8 ${
              isFeatured ? 'text-base md:text-lg lg:max-w-xl' : 'text-sm'
            }`}>
              {project.description}
            </p>
          </div>

          {/* Right/Bottom Sidebar for Featured */}
          <div className={`flex flex-col ${isFeatured ? 'lg:w-1/3' : ''}`}>
            {/* Tech Stack Bar */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span 
                  key={t} 
                  className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-[10px] font-mono text-slate-400 tracking-tight"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-auto">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-void font-body font-bold text-sm hover:bg-white/90 transition-all duration-300 transform active:scale-95"
                >
                  <span>Live Demo</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white font-body font-bold text-sm hover:bg-white/5 hover:border-white/20 transition-all duration-300 transform active:scale-95"
                >
                  <span>View Code</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-14 md:py-20 lg:py-24 relative overflow-hidden" ref={ref}>
      {/* 3D Background */}
      <ProjectsVisual />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionLabel number={4} label="Case Studies" />

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mt-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-display font-black text-5xl md:text-7xl text-white tracking-tighter"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-80">Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-body text-slate-400 max-w-sm text-lg leading-relaxed"
          >
            A collection of high-performance matching platforms, interactive systems, and AI-driven web architectures.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.id || i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
