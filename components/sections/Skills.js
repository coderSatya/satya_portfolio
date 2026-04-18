'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionLabel } from '@/components/ui/UIElements';
import { portfolioData } from '@/utils/data';

const { skills } = portfolioData;

function SkillItem({ name, color, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
    >
      <div className="w-2 h-2 rounded-full shadow-[0_0_8px]" style={{ background: color, shadowColor: color }} />
      <span className="font-body text-sm text-slate-300 font-medium tracking-wide">
        {name}
      </span>
    </motion.div>
  );
}

function SkillCategory({ title, items, color, icon, delay, inView }) {
  if (!items) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="glass rounded-2xl p-8"
    >
      <div className="flex items-center gap-3 mb-8">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-lg"
          style={{ background: `${color}15`, border: `1px solid ${color}30` }}
        >
          {icon}
        </div>
        <h3 className="font-display font-bold text-lg text-white tracking-wide">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {items.map((skill, i) => (
          <SkillItem
            key={skill}
            name={skill}
            color={color}
            delay={delay + i * 0.05}
            inView={inView}
          />
        ))}
      </div>
    </motion.div>
  );
}

const categories = [
  { title: 'Frontend Core', icon: '⚡', color: 'var(--color-neon-cyan)', key: 'frontend' },
  { title: 'UI & Styling', icon: '🎨', color: 'var(--color-neon-pink)', key: 'ui' },
  { title: 'State & Data', icon: '🧠', color: 'var(--color-neon-violet)', key: 'stateAndData' },
  { title: 'Performance', icon: '🚀', color: '#00f5ff', key: 'performance' },
  { title: 'Development Tools', icon: '🛠️', color: '#8b5cf6', key: 'tools' },
  { title: 'AI Integration', icon: '🤖', color: '#ff2d78', key: 'ai' },
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div
        className="absolute top-1/2 left-0 w-80 h-80 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'var(--color-neon-cyan)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel number={5} label="Skills" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display font-extrabold text-4xl md:text-5xl mt-4 mb-16"
        >
          Tech <span className="neon-text-cyan">Arsenal</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={ref}>
          {categories.map((cat, i) => (
            <SkillCategory
              key={cat.key}
              title={cat.title}
              items={skills[cat.key]}
              color={cat.color}
              icon={cat.icon}
              delay={0.1 + i * 0.15}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
