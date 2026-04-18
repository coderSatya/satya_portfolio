'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-12 relative"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-xs"
              style={{
                background: 'linear-gradient(135deg, var(--color-neon-cyan), var(--color-neon-violet))',
                color: 'var(--color-void)',
              }}
            >
              SP
            </div>
            <span className="font-display font-bold text-white">Satya Prakash</span>
          </div>

          {/* Center */}
          <p className="font-body text-sm text-slate-600 text-center">
            Designed & built with{' '}
            <span className="text-neon-pink">♥</span>
            {' '}by Satya Prakash · {year}
          </p>

          {/* Nav links */}
          <div className="flex gap-6">
            {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs text-slate-600 hover:text-neon-cyan transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
