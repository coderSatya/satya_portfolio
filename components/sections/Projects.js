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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative h-full"
    >
      <div className="relative h-full glass rounded-[1.5rem] p-8 flex flex-col border border-white/5 group-hover:border-white/10 transition-all duration-500 overflow-hidden">
        {/* Project Accent Glow */}
        <div 
          className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl pointer-events-none"
          style={{ background: project.color }}
        />

        {/* Header: Category & Tech */}
        <div className="flex flex-col gap-4 mb-6">
          <span 
            className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold"
            style={{ color: project.color }}
          >
            {project.category}
          </span>
          <h3 className="font-display font-bold text-2xl text-white group-hover:text-white/90 transition-colors">
            {project.name}
          </h3>
        </div>

        {/* Long Description (removed bullets) */}
        <p className="font-body text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Bar */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span 
              key={t} 
              className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05] text-[10px] font-mono text-slate-500 tracking-tightest"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA Section */}
        {project.url && (
          <div className="pt-6 border-t border-white/5">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 group/link text-sm font-body font-semibold transition-all duration-300"
              style={{ color: project.color }}
            >
              <span>Explore Live Project</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-10 md:py-14 lg:py-16 relative overflow-hidden" ref={ref}>
      {/* 3D Background */}
      <ProjectsVisual />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionLabel number={4} label="Case Studies" />

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mt-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-display font-extrabold text-5xl md:text-6xl text-white"
          >
            Engineering <span className="opacity-40">Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-body text-slate-500 max-w-sm text-base leading-relaxed"
          >
            A collection of distributed systems, interactive platforms, and AI-powered web experiences.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id || i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
