'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionLabel } from '@/components/ui/UIElements';
import ProjectDrawer from '@/components/ui/ProjectDrawer';
import { portfolioData } from '@/utils/data';

const { projects } = portfolioData;

// Lazy load 3D background
const ProjectsVisual = dynamic(() => import('@/components/three/ProjectsVisual'), {
  ssr: false,
  loading: () => null,
});

function ProjectCard({ project, index, onOpenDetails }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const isFeatured = project.isFeatured;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -8, rotateY: 5, rotateX: -2 }}
      className={`group relative h-[420px] md:h-[480px] ${isFeatured ? 'lg:col-span-2' : ''}`}
      style={{ perspective: '1200px' }}
    >
      <div className={`relative h-full glass rounded-[2.5rem] p-8 md:p-10 flex flex-col border transition-all duration-500 overflow-hidden ${isFeatured ? 'border-emerald-500/30' : 'border-white/5 group-hover:border-white/10'
        }`}>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none opacity-20 group-hover:bg-cyan-500/10 transition-colors" />

        {/* Category & Badge */}
        <div className="flex justify-between items-start mb-4">
          <span
            className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold"
            style={{ color: project.color }}
          >
            {project.category}
          </span>
          {isFeatured && (
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[8px] font-bold text-emerald-400 uppercase tracking-widest animate-pulse">
              Featured
            </span>
          )}
        </div>

        {/* Project Name */}
        <h3 className={`font-display font-black text-white leading-tight mb-3 group-hover:text-cyan-400 transition-colors ${isFeatured ? 'text-3xl md:text-4xl lg:max-w-xl' : 'text-2xl'
          }`}>
          {project.name}
        </h3>

        {/* Short Description */}
        <p className={`font-body text-slate-400 leading-relaxed mb-6 line-clamp-3 ${isFeatured ? 'text-base md:text-lg lg:max-w-2xl' : 'text-sm'
          }`}>
          {project.description}
        </p>

        {/* Tech Stack Previews */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/[0.05] text-[15px] font-mono text-slate-500">
              {t}
            </span>
          ))}
          {/* {project.tech.length > 4 && (
            <span className="px-2 py-1 rounded-lg bg-white/[0.02] border border-white/[0.05] text-[9px] font-mono text-slate-500">
              +{project.tech.length - 4}
            </span>
          )} */}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex items-center gap-3">
          <button
            onClick={() => onOpenDetails(project)}
            className="flex-1 px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-[10px] uppercase tracking-wider hover:bg-white/10 hover:border-white/20 transition-all group/btn"
          >
            <span className="flex items-center justify-center gap-2">
              View Details
              <svg className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-white text-void hover:scale-110 transition-transform shadow-[0_10px_20px_rgba(255,255,255,0.1)]"
              title="Live Demo"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>

        {/* Hover Glow Effect */}
        <div
          className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-[80px] pointer-events-none"
          style={{ background: project.color }}
        />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="pt-10 md:pt-14 pb-20 md:pb-28 relative overflow-hidden" ref={ref}>
      <ProjectsVisual />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionLabel number={4} label="Case Studies" />

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mt-6 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-display font-black text-6xl md:text-8xl text-white tracking-tight"
          >
            Latest <span className="neon-text-cyan">Crafts</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-body text-slate-400 max-w-sm text-lg leading-relaxed italic"
          >
            "Every line of code is a brushstroke in the digital landscape."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id || i}
              project={project}
              index={i}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>
      </div>

      {/* Detail Drawer */}
      <ProjectDrawer
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseDetails}
      />
    </section>
  );
}

