'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionLabel } from '@/components/ui/UIElements';
import { portfolioData } from '@/utils/data';

const { chessChallenge } = portfolioData;

const FloatingPiece = ({ children, delay, x, y, rotate }) => (
  <motion.div
    initial={{ opacity: 0, x, y, rotate: rotate - 20 }}
    animate={{ 
      opacity: [0.3, 0.6, 0.3], 
      y: [y, y - 40, y],
      rotate: [rotate - 10, rotate + 10, rotate - 10]
    }}
    transition={{ 
      duration: 6, // Fixed duration to avoid hydration mismatch
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className="absolute text-5xl md:text-7xl opacity-20 pointer-events-none filter blur-[1px]"
  >
    {children}
  </motion.div>
);

export default function ChessChallenge() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="chess" className="py-16 md:py-24 relative overflow-hidden" ref={ref}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      {/* Floating Chess Pieces */}
      <FloatingPiece x="-10%" y="10%" rotate={-15} delay={0}>♟️</FloatingPiece>
      <FloatingPiece x="80%" y="20%" rotate={15} delay={1}>♞</FloatingPiece>
      <FloatingPiece x="10%" y="70%" rotate={5} delay={0.5}>♜</FloatingPiece>
      <FloatingPiece x="85%" y="65%" rotate={-10} delay={2}>♛</FloatingPiece>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionLabel number={7} label="Challenge" />

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-6 animate-pulse">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Win {chessChallenge.prize} 💰
            </div>

            <h2 className="font-display font-black text-5xl md:text-7xl text-white mb-6 leading-tight">
              {chessChallenge.headline}
            </h2>

            <p className="font-body text-xl text-slate-400 mb-8 leading-relaxed italic">
              "{chessChallenge.quote}"
            </p>

            <p className="font-body text-lg text-slate-300 mb-10 leading-relaxed">
              {chessChallenge.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <a
                href={chessChallenge.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-5 font-display font-bold text-void transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-white rounded-2xl blur-lg opacity-40 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white px-10 py-5 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  {chessChallenge.cta} →
                </div>
              </a>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest text-center sm:text-left">
                {chessChallenge.disclaimer}
              </span>
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Animated Chess Board Visual */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border border-white/5 backdrop-blur-3xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full opacity-10">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`${(Math.floor(i / 8) + (i % 8)) % 2 === 0 ? 'bg-white' : 'bg-transparent'}`}
                    />
                  ))}
                </div>
                
                {/* Center Icons */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <motion.div 
                     animate={{ 
                       rotateY: [0, 180, 360],
                       y: [0, -20, 0]
                     }}
                     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                     className="text-[12rem] md:text-[18rem] drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                   >
                     ♔
                   </motion.div>
                </div>
              </div>
              
              {/* Glow effects */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-white/10 to-transparent blur-3xl opacity-30 rounded-full pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
