'use client';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { SectionLabel } from '@/components/ui/UIElements';
import { portfolioData } from '@/utils/data';

const { personal } = portfolioData;

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 relative" ref={ref}>
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'var(--color-neon-violet)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel number={1} label="About Me" />

        <div className="mt-12 max-w-4xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2
              className="font-display font-extrabold mb-8 leading-tight text-white"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Crafting <span className="neon-text-cyan">Digital</span> <span className="neon-text-violet">Success</span>
            </h2>

            <div className="space-y-6 font-body text-slate-400 leading-relaxed text-lg md:text-xl">
              <p>
                {personal.summary}
              </p>
              <p>
                As a software engineer with over <span className="text-white font-medium">{personal.experience}</span> of hands-on experience, I specialize in building complex, high-performance web systems. My expertise lies in <span className="text-neon-cyan font-medium">React.js, Next.js, and TypeScript</span>, with a deep focus on architectural scalability and performance optimization.
              </p>
              <p>
                I thrive at the intersection of <span className="text-neon-violet font-medium">clean code and intelligent design</span>. Whether it's optimizing page metrics by 40% or integrating advanced AI workflows into modern interfaces, I am dedicated to delivering products that are not just functional, but exceptional.
              </p>
            </div>

            {/* Quick facts in a clean horizontal layout */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Location', value: personal.location, color: 'var(--color-neon-cyan)' },
                { label: 'Specialization', value: 'Web/AI Systems', color: 'var(--color-neon-violet)' },
                { label: 'Experience', value: personal.experience, color: 'var(--color-neon-pink)' },
                { label: 'Status', value: 'Open to Work', color: '#10b981' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded-2xl glass border border-white/5 hover:border-white/10 transition-colors"
                >
                  <p className="font-mono text-[10px] text-slate-600 mb-2 uppercase tracking-[0.2em]">{item.label}</p>
                  <p className="font-body text-sm text-slate-300 font-medium" style={{ borderLeft: `2px solid ${item.color}`, paddingLeft: '12px' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
