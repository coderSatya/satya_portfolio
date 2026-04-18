'use client';
import { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useScrollProgress } from '@/hooks/index';

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const ringSpringX = useSpring(ringX, { damping: 30, stiffness: 150 });
  const ringSpringY = useSpring(ringY, { damping: 30, stiffness: 150 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY, ringX, ringY]);

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="custom-cursor-ring"
        style={{ x: ringSpringX, y: ringSpringY }}
      />
    </>
  );
}

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="progress-bar"
      style={{ scaleX: progress / 100 }}
    />
  );
}

export function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="loading-screen fixed inset-0 z-[100] flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Animated logo */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        className="mb-8 relative"
      >
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-violet flex items-center justify-center">
          <span className="font-display font-bold text-3xl text-void">SP</span>
        </div>
        <div
          className="absolute inset-0 rounded-2xl animate-ping opacity-30"
          style={{ background: 'rgba(0,245,255,0.3)' }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="font-mono text-neon-cyan text-sm tracking-widest"
      >
        LOADING PORTFOLIO
      </motion.p>

      {/* Progress bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '180px' }}
        transition={{ duration: 1.8, ease: 'linear' }}
        className="mt-8 h-px"
        style={{ background: 'linear-gradient(90deg, var(--color-neon-cyan), var(--color-neon-violet))' }}
      />
    </motion.div>
  );
}

export function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <span className="section-number">{String(number).padStart(2, '0')}.</span>
      <span className="section-number text-slate-500">{label}</span>
      <div
        className="flex-1 h-px"
        style={{ background: 'linear-gradient(90deg, rgba(0,245,255,0.3), transparent)' }}
      />
    </div>
  );
}
