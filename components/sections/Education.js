'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionLabel } from '@/components/ui/UIElements';
import { portfolioData } from '@/utils/data';

const { education } = portfolioData;

// Lazy load 3D background
const EducationVisual = dynamic(() => import('@/components/three/EducationVisual'), {
  ssr: false,
  loading: () => null,
});

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="pt-10 md:pt-14 pb-14 md:pb-20 relative overflow-hidden" ref={ref}>
      {/* 3D Visual Background */}
      <EducationVisual />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionLabel number={3} label="Education" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display font-extrabold text-4xl md:text-5xl mt-4 mb-12"
        >
          Academic <span className="neon-text-pink">Path</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15, duration: 0.8 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group relative glass rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-pink-500/20 transition-all duration-500 shadow-xl hover:shadow-pink-500/10"
            >
              {/* Header: Year & Icon */}
              <div className="flex items-center justify-between mb-8">
                <div
                  className="px-4 py-1.5 rounded-full font-mono text-[10px] tracking-widest uppercase border"
                  style={{
                    background: i % 2 === 0 ? 'rgba(0,245,255,0.05)' : 'rgba(255,45,120,0.05)',
                    borderColor: i % 2 === 0 ? 'rgba(0,245,255,0.2)' : 'rgba(255,45,120,0.2)',
                    color: i % 2 === 0 ? 'var(--color-neon-cyan)' : 'var(--color-neon-pink)',
                  }}
                >
                  {edu.duration || edu.year}
                </div>
                <div className="text-3xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                  🎓
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-pink-400 transition-colors">
                {edu.degree}
              </h3>
              <p className="font-body text-slate-300 font-medium text-lg mb-1">
                {edu.college || edu.school}
              </p>
              {edu.university && (
                <p className="font-body text-sm text-slate-500 mb-6">{edu.university}</p>
              )}

              {/* Grade/Result */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                <span className="font-mono text-xs text-yellow-400/80">
                  {edu.percentage ? `Aggregate: ${edu.percentage}` : `Honours: ${edu.honours}`}
                </span>
              </div>

              {/* Visual accents */}
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
