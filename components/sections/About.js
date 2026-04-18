'use client';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { SectionLabel } from '@/components/ui/UIElements';
import { portfolioData } from '@/utils/data';

const { personal, stats } = portfolioData;

function StatCard({ value, label, suffix, delay, inView }) {
  const numVal = parseFloat(value);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-2xl p-6 text-center glow-border-cyan group hover:scale-105 transition-transform duration-300"
    >
      <div className="font-display font-extrabold text-4xl md:text-5xl mb-2 gradient-text">
        {inView ? (
          <>
            <CountUp
              end={numVal}
              duration={2}
              decimals={numVal % 1 !== 0 ? 1 : 0}
              delay={delay}
            />
            {suffix}
          </>
        ) : (
          `0${suffix}`
        )}
      </div>
      <p className="font-body text-sm text-slate-400 uppercase tracking-wider">{label}</p>
    </motion.div>
  );
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'var(--color-neon-violet)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel number={1} label="About Me" />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="font-display font-extrabold mb-6 leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Crafting{' '}
              <span className="neon-text-cyan">Digital</span>
              <br />
              Experiences
            </h2>

            <div className="space-y-4 font-body text-slate-400 leading-relaxed text-lg">
              <p>
                I'm <span className="text-white font-medium">Satya Prakash</span>, a Frontend
                Developer from Kolkata, India with{' '}
                <span className="text-neon-cyan font-medium">2.5+ years</span> of hands-on
                experience building modern web applications.
              </p>
              <p>
                At{' '}
                <span className="text-white font-medium">Webskitters Technology Solutions</span>, I
                lead frontend development for diverse client projects — from e-commerce platforms to
                data-heavy dashboards. My toolkit centers around{' '}
                <span className="text-neon-violet font-medium">React.js & Next.js</span>.
              </p>
              <p>
                I'm passionate about{' '}
                <span className="text-neon-pink font-medium">performance optimization</span>,
                clean code architecture, and creating interfaces that users love. Currently exploring
                AI integrations and 3D web experiences.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { label: 'Location', value: '📍 Kolkata, India' },
                { label: 'Role', value: '💻 Frontend Developer' },
                { label: 'Experience', value: '⚡ 2.5+ Years' },
                { label: 'Status', value: '✅ Open to Work' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="px-4 py-3 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <p className="font-mono text-xs text-slate-600 mb-1">{item.label}</p>
                  <p className="font-body text-sm text-slate-300">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Avatar + Stats */}
          <div>
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto w-64 h-64 mb-12"
            >
              {/* Rotating ring */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  background:
                    'conic-gradient(from 0deg, var(--color-neon-cyan), var(--color-neon-violet), var(--color-neon-pink), var(--color-neon-cyan))',
                  padding: '2px',
                }}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{ background: 'var(--color-void)' }}
                />
              </div>

              {/* Avatar placeholder */}
              <div
                className="absolute inset-2 rounded-full flex items-center justify-center overflow-hidden"
                style={{ background: 'linear-gradient(135deg, var(--color-deep), var(--color-surface))' }}
              >
                <span
                  className="font-display font-black"
                  style={{
                    fontSize: '5rem',
                    background:
                      'linear-gradient(135deg, var(--color-neon-cyan), var(--color-neon-violet))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  S
                </span>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 glass rounded-xl px-3 py-2 glow-border-cyan"
              >
                <p className="font-mono text-xs text-neon-cyan">2.5+ yrs exp.</p>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {Object.values(stats).map((stat, i) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  delay={0.3 + i * 0.1}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
