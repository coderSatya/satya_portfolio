'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionLabel } from '@/components/ui/UIElements';
import { portfolioData } from '@/utils/data';

const { experience } = portfolioData;

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div
        className="absolute top-0 right-1/4 w-80 h-80 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'var(--color-neon-cyan)' }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel number={2} label="Experience" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display font-extrabold text-4xl md:text-5xl mt-4 mb-16"
        >
          Work <span className="neon-text-violet">History</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="h-full timeline-line origin-top"
            />
          </div>

          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-6 md:left-1/2 top-6 w-3 h-3 rounded-full -translate-x-1.5 md:-translate-x-1.5 z-10"
                style={{
                  background: 'var(--color-neon-cyan)',
                  boxShadow: '0 0 16px var(--color-neon-cyan)',
                }}
              />

              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />

              {/* Card */}
              <div className="ml-12 md:ml-0 md:w-[calc(50%-2rem)]">
                <div
                  className="glass rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 group"
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                    <div>
                      <h3 className="font-display font-bold text-xl text-white mb-1">
                        {job.role}
                      </h3>
                      <p className="font-body text-neon-cyan font-medium">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-slate-500 mt-1">{job.duration}</p>
                    </div>
                  </div>

                  <p className="text-slate-400 mb-6 flex items-center gap-2 font-mono text-xs">
                    <span>📍</span> {job.location}
                  </p>

                  {/* Projects / Responsibilities */}
                  <ul className="space-y-4 mb-2">
                    {job.projects?.map((proj, i) => (
                      <li key={i} className="font-body text-sm text-slate-400">
                        <span className="font-bold text-white mb-1 block">
                          <span className="text-neon-cyan shrink-0 mr-2">▸</span>
                          {proj.name}
                        </span>
                        <span className="block ml-6 text-slate-500">{proj.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
