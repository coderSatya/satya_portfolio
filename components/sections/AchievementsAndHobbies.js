'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { SectionLabel } from '@/components/ui/UIElements';
import { portfolioData } from '@/utils/data';

const { achievements, hobbies } = portfolioData;

export function Achievements() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="achievements" className="py-24 relative" ref={ref}>
      <div
        className="absolute inset-0 cyber-grid-bg opacity-20 pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel number={6} label="Achievements" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display font-extrabold text-4xl md:text-5xl mt-4 mb-16"
        >
          Impact & <span className="gradient-text-gold">Results</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="group glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-default"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div
                className="font-display font-extrabold text-3xl md:text-4xl mb-2"
                style={{ color: '#f0b429' }}
              >
                {item.value}
              </div>
              <p className="font-body font-medium text-white text-sm mb-1">{item.label}</p>
              <p className="font-body text-xs text-slate-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Hobbies() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="hobbies" className="py-24 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel number={7} label="Beyond Code" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display font-extrabold text-4xl md:text-5xl mt-4 mb-16"
        >
          When I'm <span className="neon-text-violet">Not Coding</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 0.1 + i * 0.1,
                type: 'spring',
                stiffness: 200,
                damping: 15,
              }}
              className="group glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-default"
              whileHover={{ y: -6 }}
            >
              <motion.div
                className="text-4xl mb-4"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              >
                {hobby.icon}
              </motion.div>
              <h3 className="font-display font-bold text-white mb-2">{hobby.name}</h3>
              <p className="font-body text-xs text-slate-500">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
