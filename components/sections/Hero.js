'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { portfolioData } from '@/utils/data';
import Image from 'next/image';

const { personal } = portfolioData;

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
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-left"
          >
            {/* Pre-title badge */}
            {/* <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass glow-border-cyan">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: 'var(--color-neon-cyan)' }}
              />
              <span className="font-mono text-[10px] md:text-xs tracking-wider" style={{ color: 'var(--color-neon-cyan)' }}>
                AVAILABLE FOR WORK
              </span>
            </div> */}

            {/* Name */}
            <h1
              className="font-display font-extrabold leading-none tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              <span className="block text-white">SATYA</span>
              <span className="block gradient-text">PRAKASH</span>
            </h1>

            {/* Typing subtitle */}
            <div className="mb-6 h-8">
              <span className="font-mono text-base md:text-lg text-slate-400">
                {`// `}
              </span>
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  1500,
                  'Full Stack Developer',
                  1500,
                  'MERN Stack Expert',
                  1500,
                  'AI Enthusiast',
                  1500,
                  'Problem Solver',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-mono text-base md:text-lg font-medium"
                style={{ color: 'var(--color-neon-cyan)' }}
              />
            </div>

            {/* Description */}
            <p className="max-w-xl text-slate-400 text-base md:text-lg leading-relaxed mb-8 font-body">
              {personal.summary}
            </p>

            {/* Social/Contact Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-neon-cyan transition-colors group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-neon-cyan/50 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </div>
                <span className="font-mono text-xs">LinkedIn</span>
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-neon-violet transition-colors group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-neon-violet/50 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                </div>
                <span className="font-mono text-xs">GitHub</span>
              </a>
              <a href={personal.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-neon-pink transition-colors group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-neon-pink/50 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </div>
                <span className="font-mono text-xs">Instagram</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <svg className="w-4 h-4 text-neon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <span className="font-mono text-xs">{personal.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 group col-span-1 sm:col-span-2">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <svg className="w-4 h-4 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span className="font-mono text-xs truncate">{personal.email}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="group relative px-8 py-4 rounded-xl font-body font-semibold text-void transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, var(--color-neon-cyan), #00d4e6)',
                  boxShadow: '0 0 20px rgba(0,245,255,0.2)',
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Link>

              <Link
                href="/contact"
                className="group px-8 py-4 rounded-xl font-body font-semibold text-white border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/20 active:scale-95 text-center"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-cyan/20 to-neon-violet/20 blur-3xl animate-pulse" />
              <div className="absolute -inset-4 border border-white/5 rounded-full animate-spin-slow pointer-events-none" />

              <div className="relative w-full h-full rounded-2xl md:rounded-[40px] overflow-hidden border border-white/10 group-hover:border-neon-cyan/30 shadow-2xl glass p-3 transition-all duration-500">
                <div className="w-full h-full rounded-xl md:rounded-[30px] overflow-hidden relative">
                  <Image
                    src="/images/satya.jpeg"
                    alt="Satya Prakash - Software Engineer"
                    className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-110"
                    width={450}
                    height={450}
                    loading="eager"
                    priority
                  />
                  {/* Subtle glass overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-void/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Float Experience badge */}
              <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 glass rounded-2xl p-4 border border-white/10 shadow-xl hidden md:block">
                <div className="text-neon-cyan font-display font-bold text-3xl mb-0.5">{personal.experience}</div>
                <div className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">Experience</div>
              </div>
            </div>
          </motion.div>

        </div>

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
