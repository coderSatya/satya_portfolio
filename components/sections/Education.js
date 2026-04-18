'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionLabel } from '@/components/ui/UIElements';
import { portfolioData } from '@/utils/data';

const { education } = portfolioData;

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel number={3} label="Education" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display font-extrabold text-4xl md:text-5xl mt-4 mb-16"
        >
          Academic <span className="neon-text-pink">Background</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="group relative glass rounded-2xl p-8 overflow-hidden cursor-default hover:scale-[1.02] transition-all duration-300"
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${
                    i === 0 ? 'rgba(0,245,255,0.08)' : 'rgba(255,45,120,0.08)'
                  } 0%, transparent 70%)`,
                }}
              />

              {/* Degree icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6"
                style={{
                  background:
                    i === 0
                      ? 'rgba(0,245,255,0.1)'
                      : 'rgba(255,45,120,0.1)',
                  border: `1px solid ${i === 0 ? 'rgba(0,245,255,0.2)' : 'rgba(255,45,120,0.2)'}`,
                }}
              >
                🎓
              </div>

              <div className="mb-1">
                <span
                  className="font-mono text-xs tracking-wider"
                  style={{ color: i % 2 === 0 ? 'var(--color-neon-cyan)' : 'var(--color-neon-pink)' }}
                >
                  {edu.duration || edu.year}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-2">
                {edu.degree}
              </h3>
              <p className="font-body text-slate-400 mb-1">{edu.college || edu.school}</p>
              {edu.university && (
                <p className="font-body text-sm text-slate-500 mb-4">{edu.university}</p>
              )}

              <div className="flex items-center gap-3 mt-4">
                <span
                  className="px-3 py-1 rounded-full font-mono text-xs"
                  style={{
                    background: 'rgba(240,180,41,0.1)',
                    border: '1px solid rgba(240,180,41,0.25)',
                    color: '#f0b429',
                  }}
                >
                  ⭐ {edu.percentage || `Honours: ${edu.honours} | Agg: ${edu.aggregate}`}
                </span>
              </div>

              {edu.highlights && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs font-mono px-2 py-1 rounded"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        color: '#94a3b8',
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
