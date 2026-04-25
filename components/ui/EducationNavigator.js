'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'education', label: 'Academic Path', icon: '🎓' },
  { id: 'certifications', label: 'Certifications', icon: '📜' },
  { id: 'hackathon', label: 'INT Hackathon', icon: '🚀' },
  { id: 'ebook', label: 'E-book Store', icon: '📚' },
  { id: 'chess', label: 'Chess Challenge', icon: '♟️' },
  { id: 'cricket', label: 'Extra-Curricular', icon: '🏏' }
];

export default function EducationNavigator() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // Account for navigator + gap
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update Scroll Progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight);
      setScrollProgress(progress);

      // Detect Active Section
      const scrollPosition = window.scrollY + 200;
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section.id);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLabel = sections.find(s => s.id === activeSection)?.label || 'Jump to Section';
  const activeIcon = sections.find(s => s.id === activeSection)?.icon || '📍';

  return (
    <div className="sticky top-20 z-[80] flex flex-col items-center px-6 pointer-events-none">
      <div className="relative w-full max-w-xs pointer-events-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between gap-4 px-6 py-4 rounded-2xl bg-void/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] group transition-all hover:border-pink-500/30 overflow-hidden"
        >
          <div className="flex items-center gap-3">
            <span className="text-lg">{activeIcon}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">{activeLabel}</span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="text-slate-500 group-hover:text-pink-400"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
          
          {/* Progress Bar Background */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/5" />
          
          {/* Animated Progress Bar */}
          <motion.div 
            className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-pink-500 via-cyan-400 to-pink-500"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full mt-3 w-full bg-void/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-[81]"
            >
              <div className="p-2 space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeSection === section.id 
                        ? 'bg-pink-500/10 text-pink-400' 
                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="text-lg grayscale-0 group-hover:grayscale-0">{section.icon}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest">{section.label}</span>
                    {activeSection === section.id && (
                      <motion.div layoutId="activeDot" className="ml-auto w-1.5 h-1.5 rounded-full bg-pink-500" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
