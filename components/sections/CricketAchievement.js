'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import { SectionLabel } from '@/components/ui/UIElements';
import { portfolioData } from '@/utils/data';

const CricketBall = dynamic(() => import('../three/CricketBall'), { ssr: false });

const { cricketAchievement } = portfolioData;

export default function CricketAchievement() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="cricket" className="py-12 md:py-16 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionLabel number={5} label="Extra-Curricular" />

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6">
              {cricketAchievement.title}
            </h2>
            
            <div className="glass rounded-3xl p-8 border border-white/5 mb-8">
              <p className="font-display font-bold text-xl text-yellow-400 mb-2">
                {cricketAchievement.highlight}
              </p>
              <p className="font-body text-slate-300 text-lg mb-4 italic">
                "{cricketAchievement.performanceSummary}"
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-mono font-bold">
                  🏆 {cricketAchievement.award}
                </span>
                <span className="px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400 text-sm font-mono">
                  📍 {cricketAchievement.venue}
                </span>
              </div>

              {/* Stat Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cricketAchievement.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center"
                  >
                    <p className="text-2xl font-display font-black text-white">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Media */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden glass border border-white/10 aspect-video"
            >
              <iframe
                className="w-full h-full"
                src={cricketAchievement.videoUrl}
                title="Match Highlights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-display font-bold">Match Highlights 📺</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {cricketAchievement.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl overflow-hidden border border-white/10 aspect-square group relative"
                >
                  <img src={img.url} alt={img.caption} className="w-full h-full object-cover transition-all duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <p className="text-white text-xs text-center font-bold tracking-tight">{img.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Ball Background element */}
        <div className="absolute -top-12 -right-12 w-64 h-64 pointer-events-none opacity-40 mix-blend-screen">
          <CricketBall />
        </div>
      </div>
    </section>
  );
}
