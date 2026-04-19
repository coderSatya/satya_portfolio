'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/UIElements';
import { portfolioData } from '@/utils/data';

const { experience } = portfolioData;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const bulletContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const bulletItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 }
};

function ExperienceCard({ job, index, inView }) {
  const isCurrent = job.duration.toLowerCase().includes('present');

  return (
    <motion.div
      variants={item}
      className="relative pl-10 md:pl-16 pb-12 group last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-[11px] top-0 bottom-0 w-px bg-white/10 group-last:h-8" />

      {/* Timeline Dot */}
      <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-2 bg-void flex items-center justify-center z-10 transition-all duration-500 ${isCurrent ? 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'border-white/10 group-hover:border-cyan-500/50'
        }`}>
        <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${isCurrent ? 'bg-emerald-500 animate-pulse' : 'bg-white/20 group-hover:bg-cyan-500'
          }`} />
      </div>

      {/* Content Card */}
      <div className={`glass rounded-[2rem] p-6 md:p-8 border transition-all duration-500 group-hover:translate-y-[-4px] ${isCurrent
        ? 'border-emerald-500/20 bg-emerald-500/[0.02] shadow-[0_20px_50px_rgba(16,185,129,0.05)]'
        : 'border-white/5 hover:border-white/10'
        }`}>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className={`font-display font-black text-2xl transition-colors ${isCurrent ? 'text-emerald-400' : 'text-white group-hover:text-cyan-400'
                }`}>
                {job.company}
              </h3>
              {isCurrent && (
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-wider animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Present
                </span>
              )}
            </div>
            <p className="font-body text-slate-300 font-semibold">{job.role}</p>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <span className="inline-block font-mono text-[20px] text-slate-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-md border border-white/5 self-start md:self-auto">
              {job.duration}
            </span>
          </div>
        </div>

        {/* Impact Summary */}
        <p className="font-body text-base text-slate-400 leading-relaxed mb-6 italic opacity-80">
          "{job.impact}"
        </p>

        {/* Improved Bullet Points */}
        <motion.ul
          variants={bulletContainer}
          className="space-y-3 mb-8"
        >
          {job.highlights.map((point, i) => (
            <motion.li
              key={i}
              variants={bulletItem}
              className="flex items-start gap-3 group/item"
            >
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${isCurrent ? 'bg-emerald-500/40' : 'bg-cyan-500/40'
                }`} />
              <span className="text-sm font-body text-slate-300 leading-relaxed group-hover/item:text-white transition-colors duration-300">
                {point}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Tech Stack Footer */}
        <div className="flex flex-wrap gap-2 pb-4 border-b border-white/5">
          {job.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 bg-white/[0.03] border border-white/5 rounded text-[15px] font-mono text-slate-500 uppercase tracking-tight"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-4 opacity-50">
          <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span className="text-[10px] font-body text-slate-500 uppercase tracking-tighter">{job.scale}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="pt-20 pb-12 md:pt-24 md:pb-14 lg:pt-28 relative overflow-hidden" ref={ref}>
      {/* Decorative Glows */}
      <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionLabel number={2} label="Professional Journey" />

        <div className="mt-2 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-display font-black text-5xl md:text-6xl text-white leading-tight tracking-tighter"
          >
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 opacity-80">Experience</span>
          </motion.h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col space-y-2 md:space-y-4"
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 pt-12 border-t border-white/5 flex justify-center"
        >
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all duration-300"
          >
            <span className="text-lg font-display font-bold text-white">Explore My Projects</span>
            <div className="p-2 rounded-full bg-cyan-500/20 group-hover:bg-cyan-500 transition-colors duration-300">
              <svg
                className="w-5 h-5 text-cyan-400 group-hover:text-white transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
