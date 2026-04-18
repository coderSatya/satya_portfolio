'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionLabel } from '@/components/ui/UIElements';
import { portfolioData } from '@/utils/data';

const { skills } = portfolioData;

function SkillBar({ name, level, color, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-body text-sm text-slate-300 group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="font-mono text-xs" style={{ color }}>
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 w-full rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </motion.div>
  );
}

function SkillCategory({ title, items, color, icon, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="glass rounded-2xl p-8"
    >
      <div className="flex items-center gap-3 mb-8">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
          style={{ background: `${color}15`, border: `1px solid ${color}30` }}
        >
          {icon}
        </div>
        <h3 className="font-display font-bold text-lg text-white">{title}</h3>
      </div>
      <div className="space-y-5">
        {items.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={color}
            delay={delay + i * 0.07}
            inView={inView}
          />
        ))}
      </div>
    </motion.div>
  );
}

const categories = [
  {
    title: 'Frontend',
    icon: '⚡',
    color: 'var(--color-neon-cyan)',
    key: 'frontend',
  },
  {
    title: 'Backend Basics',
    icon: '🔧',
    color: 'var(--color-neon-violet)',
    key: 'backend',
  },
  {
    title: 'Tools & DevOps',
    icon: '🛠️',
    color: 'var(--color-neon-pink)',
    key: 'tools',
  },
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

        <div className="grid md:grid-cols-3 gap-6" ref={ref}>
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

        {/* Floating skill badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {[
            'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS',
            'Node.js', 'PostgreSQL', 'Git', 'Figma', 'Vercel', 'Docker', 'Prisma',
          ].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + i * 0.05, type: 'spring', stiffness: 200 }}
              className="skill-badge px-4 py-2 rounded-xl font-mono text-sm cursor-default"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#94a3b8',
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
