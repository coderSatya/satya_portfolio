'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { SectionLabel } from '@/components/ui/UIElements';
import { portfolioData } from '@/utils/data';

const { achievements } = portfolioData;

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="group glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-default flex items-center gap-4"
              style={{ borderLeft: '4px solid #f0b429' }}
            >
              <div className="text-3xl text-gradient-gold group-hover:scale-110 transition-transform duration-300 shrink-0">
                ⭐
              </div>
              <p className="font-body font-medium text-white text-lg tracking-wide">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
