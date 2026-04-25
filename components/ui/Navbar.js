'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { 
    label: 'Education', 
    href: '/education',
    subLinks: [
      { label: 'Academic Path', href: '/education#education', icon: '🎓' },
      { label: 'Certifications', href: '/education#certifications', icon: '📜' },
      { label: 'INT Hackathon', href: '/education#hackathon', icon: '🚀' },
      { label: 'E-books', href: '/education#ebook', icon: '📚' },
      { label: 'Chess Challenge', href: '/education#chess', icon: '♟️' },
      { label: 'Extra-Curricular', href: '/education#cricket', icon: '🏏' },
    ]
  },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

function NavLink({ link, isActive, pathname }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group h-full flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={link.href}
        className={`relative font-body text-sm transition-colors duration-300 py-2 flex items-center gap-1 ${isActive ? 'text-neon-cyan' : 'text-slate-400 hover:text-white'}`}
      >
        {link.label}
        {link.subLinks && (
          <svg className={`w-3 h-3 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        )}
        <span className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-neon-cyan to-neon-violet transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
      </Link>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {link.subLinks && isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56 z-50 pointer-events-auto"
          >
            <div className="glass border border-white/10 rounded-2xl p-2 shadow-2xl overflow-hidden">
              {link.subLinks.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group/sub"
                >
                  <span className="text-lg opacity-80 group-hover/sub:scale-110 group-hover/sub:opacity-100 transition-all">{sub.icon}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 group-hover/sub:text-white">{sub.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-white/5 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-violet opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-void text-sm">
              SP
            </span>
          </div>
          <span
            className="font-display font-bold text-lg hidden sm:block"
            style={{ color: 'var(--color-neon-cyan)' }}
          >
            Satya<span className="text-white opacity-60">Prakash</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 h-full">
          {navLinks.map((link) => (
            <NavLink 
              key={link.href} 
              link={link} 
              isActive={pathname === link.href} 
              pathname={pathname}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/pdf/Satya_Prakash_Resume.pdf"
            download
            className="btn-shimmer px-4 py-2 rounded-lg border text-sm font-body font-medium transition-all duration-300"
            style={{
              borderColor: 'rgba(0,245,255,0.3)',
              color: 'var(--color-neon-cyan)',
            }}
          >
            Resume ↓
          </a>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg text-sm font-body font-medium text-void transition-all duration-300 hover:shadow-lg"
            style={{ background: 'var(--color-neon-cyan)', boxShadow: '0 0 20px rgba(0,245,255,0.3)' }}
          >
            Hire Me
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={
                menuOpen
                  ? i === 0
                    ? { rotate: 45, y: 8 }
                    : i === 1
                    ? { opacity: 0 }
                    : { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              className="block h-px w-6 bg-neon-cyan"
              style={{ display: 'block' }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-body transition-colors ${isActive ? 'text-neon-cyan' : 'text-slate-300 hover:text-white'}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 px-4 py-3 rounded-lg text-sm text-center font-body font-medium text-void"
                style={{ background: 'var(--color-neon-cyan)' }}
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
