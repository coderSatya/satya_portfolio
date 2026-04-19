'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionLabel } from '@/components/ui/UIElements';
import { portfolioData } from '@/utils/data';

const { certifications } = portfolioData;

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="py-12 md:py-16 lg:py-20 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel number={4} label="Certifications" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display font-extrabold text-4xl md:text-5xl mt-4 mb-12"
        >
          Recognized <span className="neon-text-violet">Expertise</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="group relative glass rounded-3xl p-8 border border-white/5 hover:border-violet-500/20 transition-all duration-500 flex flex-col h-full"
            >
              {/* Icon/Badge */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  📜
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-white mb-2 leading-tight flex-grow group-hover:text-violet-400 transition-colors">
                {cert.title}
              </h3>
              
              <div className="flex items-center gap-2 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                  {cert.platform}
                </p>
              </div>

              {/* Action */}
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-body font-semibold text-sm transition-all duration-300 bg-white/5 text-slate-300 hover:bg-violet-500 hover:text-white border border-white/10 hover:border-violet-400"
              >
                View Certificate
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
