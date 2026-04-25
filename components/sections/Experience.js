'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import { SectionLabel } from '@/components/ui/UIElements';
import { portfolioData } from '@/utils/data';

const ExperienceVisual = dynamic(() => import('../three/ExperienceVisual'), { ssr: false });
const { experience } = portfolioData;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } }
};

function ExperienceCard({ job, index, inView }) {
  const isCurrent = job.duration.toLowerCase().includes('present');

  return (
    <motion.div
      variants={item}
      className={`relative pl-12 md:pl-20 pb-16 group last:pb-0`}
    >
      {/* Timeline Line */}
      <div className="absolute left-[15px] top-0 bottom-0 w-px bg-white/5 group-last:h-4" />

      {/* Timeline Node */}
      <div className={`absolute left-0 top-1 w-8 h-8 rounded-full border-2 bg-void flex items-center justify-center z-10 transition-all duration-500 ${
        isCurrent ? 'border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]' : 'border-white/10 group-hover:border-cyan-500/50'
      }`}>
        <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${
          isCurrent ? 'bg-emerald-500 animate-pulse' : 'bg-white/20 group-hover:bg-cyan-500'
        }`} />
      </div>

      {/* Experience Content */}
      <div className={`glass rounded-3xl p-6 md:p-8 border transition-all duration-500 group-hover:scale-[1.02] ${
        isCurrent ? 'border-emerald-500/20 bg-emerald-500/[0.02]' : 'border-white/5 hover:border-white/10'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className={`font-display font-black text-2xl md:text-3xl transition-colors ${
                isCurrent ? 'text-emerald-400' : 'text-white group-hover:text-cyan-400'
              }`}>
                {job.company}
              </h3>
              {isCurrent && (
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-widest animate-pulse">
                  Currently Working
                </span>
              )}
            </div>
            <p className="font-body text-slate-300 font-semibold text-lg tracking-wide uppercase opacity-90">
              {job.role}
            </p>
          </div>
          <div className="md:text-right">
            <span className="inline-block font-mono text-sm text-slate-500 uppercase tracking-widest border-b border-white/5 pb-1">
              {job.duration}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="pt-10 md:pt-14 pb-20 md:pb-24 relative overflow-hidden" ref={ref}>
      <ExperienceVisual />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionLabel number={2} label="Professional Journey" />

        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-display font-black text-5xl md:text-6xl text-white leading-tight tracking-tighter"
          >
            Work <span className="neon-text-cyan">Experience</span>
          </motion.h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="relative"
        >
          {experience.map((job, index) => (
            <ExperienceCard
              key={`${job.company}-${index}`}
              job={job}
              index={index}
              inView={inView}
            />
          ))}
        </motion.div>

        {/* Minimal Footer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mt-20 text-center"
        >
           <p className="font-mono text-[10px] text-slate-600 uppercase tracking-[0.4em]">
             Professional Journey and Growth
           </p>
        </motion.div>
      </div>
    </section>
  );
}
