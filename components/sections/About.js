'use client';
import { motion } from 'framer-motion';
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

            <div className="space-y-6 font-body text-slate-400 leading-relaxed text-lg md:text-xl max-w-3xl">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I started my journey as a frontend enthusiast and evolved into a <span className="text-white font-bold tracking-tight">Full-Stack Software Engineer</span>. I specialize in building scalable, high-performance systems using the <span className="text-neon-cyan font-bold">MERN Stack</span>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                My core expertise lies in <span className="text-white font-bold underline decoration-neon-cyan/30 underline-offset-4">React, Next.js, and TypeScript</span>. On the backend, I leverage <span className="text-white font-bold">Node.js, Express, and MongoDB</span>, coupled with robust <span className="text-white font-bold italic">AWS Deployment</span> strategies.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                With <span className="text-white font-bold font-mono">4+ years of expertise</span>, I have delivered solutions across <span className="text-white font-bold underline decoration-neon-violet/30 underline-offset-4">real-world domains</span> including E-commerce, Healthcare, Tourism, and Trading, managing projects independently from initial concept to successful client delivery.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                In today's fast-paced landscape, I actively champion <span className="text-neon-violet font-bold">AI-integrated development</span>. By leveraging modern AI tools and automated workflows, I build faster, smarter, and more efficient applications that solve complex problems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="pt-4"
              >
                <p className="text-slate-300 font-medium mb-4 italic">
                  "Explore my portfolio to see my skills, projects, and experience."
                </p>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-neon-cyan hover:text-void hover:translate-x-2 transition-all duration-300"
                >
                  View Projects
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
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
