'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import { SectionLabel } from '@/components/ui/UIElements';
import { portfolioData } from '@/utils/data';

const FloatingBook = dynamic(() => import('../three/FloatingBook'), { ssr: false });

const { ebookPromo } = portfolioData;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
};

export default function EbookPromo() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="ebook" className="py-12 md:py-16 relative overflow-hidden" ref={ref}>
      {/* Background visual element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 opacity-20 pointer-events-none">
        <FloatingBook />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionLabel number={6} label="My Resources" />

        <div className="mt-8 glass rounded-[3rem] p-8 md:p-12 border border-white/5 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left Column: The Hook */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
              >
                {ebookPromo.title}
              </motion.h2>
              <p className="font-body text-xl text-slate-400 mb-10 leading-relaxed italic">
                "{ebookPromo.subtitle}"
              </p>

              <div className="space-y-6">
                <h4 className="font-mono text-sm uppercase tracking-widest text-red-400/80">The Problem</h4>
                <div className="space-y-4">
                  {ebookPromo.problem.map((p, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="text-red-500 shrink-0">✕</span>
                      <p className="font-body text-slate-500">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: The Solution */}
            <div>
              <div className="p-8 rounded-[2rem] bg-indigo-600/5 border border-indigo-500/10 mb-8">
                <h4 className="font-mono text-sm uppercase tracking-widest text-emerald-400/80 mb-4">The Solution</h4>
                <p className="font-body text-white text-lg mb-8 leading-relaxed">
                  {ebookPromo.solution}
                </p>

                <motion.div
                  variants={container}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="grid sm:grid-cols-2 gap-4"
                >
                  {ebookPromo.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      variants={item}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5"
                    >
                      <span className="text-emerald-500 text-sm shrink-0">✔</span>
                      <p className="font-body text-xs text-slate-400 leading-tight">{feature}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="text-center"
              >
                <a
                  href={ebookPromo.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-10 py-5 font-display font-bold text-white transition-all duration-300 transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 px-10 py-5 rounded-2xl shadow-xl border border-white/20">
                    {ebookPromo.cta}
                  </div>
                </a>
                <p className="mt-4 text-xs font-mono text-slate-500 uppercase tracking-widest">Limited Time Offer • Available Now</p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
