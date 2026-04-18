'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

// Lazy load 3D background
const HeroBackground = dynamic(() => import('@/components/three/HeroBackground'), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--color-void)' }}
    >
      {/* 3D canvas background */}
      <div className="absolute inset-0">
        <HeroBackground />
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,245,255,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 50%, rgba(139,92,246,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 50% 50% at 20% 80%, rgba(255,45,120,0.06) 0%, transparent 50%)
          `,
        }}
      />

      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Pre-title badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass glow-border-cyan"
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: 'var(--color-neon-cyan)' }}
          />
          <span className="font-mono text-xs tracking-wider" style={{ color: 'var(--color-neon-cyan)' }}>
            AVAILABLE FOR WORK
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold leading-none tracking-tight mb-6"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
        >
          <span className="block text-white">SATYA</span>
          <span className="block gradient-text">PRAKASH</span>
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-10"
        >
          <span className="font-mono text-lg md:text-xl text-slate-400">
            {`// `}
          </span>
          <TypeAnimation
            sequence={[
              'Frontend Engineer',
              1500,
              'React.js Specialist',
              1500,
              'Next.js Developer',
              1500,
              'AI Enthusiast',
              1500,
              'Problem Solver',
              1500,
              'UI/UX Craftsman',
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-mono text-lg md:text-xl font-medium"
            style={{ color: 'var(--color-neon-cyan)' }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed mb-12 font-body"
        >
          Building <span className="text-white font-medium">high-performance</span> web experiences 
          with modern frontend technologies. 2.5+ years crafting 
          <span className="text-white font-medium"> scalable</span> applications at Webskitters, Kolkata.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group btn-shimmer relative px-8 py-4 rounded-xl font-body font-semibold text-void transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, var(--color-neon-cyan), #00d4e6)',
              boxShadow: '0 0 30px rgba(0,245,255,0.35)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          <a
            href="#contact"
            className="group btn-shimmer px-8 py-4 rounded-xl font-body font-semibold text-white border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: 'rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(10px)',
            }}
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="group btn-shimmer px-8 py-4 rounded-xl font-body font-semibold transition-all duration-300 hover:scale-105"
            style={{ color: 'var(--color-neon-violet)', borderColor: 'rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.06)', border: '1px solid' }}
          >
            <span className="flex items-center gap-2">
              Download CV
              <span className="text-xs">↓</span>
            </span>
          </a>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + i * 0.1 }}
              className="px-3 py-1.5 rounded-lg font-mono text-xs"
              style={{
                background: 'rgba(0,245,255,0.07)',
                border: '1px solid rgba(0,245,255,0.15)',
                color: 'rgba(0,245,255,0.8)',
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-slate-600 tracking-widest">SCROLL</span>
        <div className="w-px h-12 relative overflow-hidden">
          <motion.div
            animate={{ y: [-48, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute w-full h-full"
            style={{ background: 'linear-gradient(180deg, transparent, var(--color-neon-cyan), transparent)' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
