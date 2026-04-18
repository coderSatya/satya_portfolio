'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// UI
import { CustomCursor, ScrollProgressBar, LoadingScreen } from '@/components/ui/UIElements';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Chatbot from '@/components/ui/Chatbot';

// Sections
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import { Achievements, Hobbies } from '@/components/sections/AchievementsAndHobbies';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Loading screen */}
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Custom cursor */}
      <CustomCursor />

      {/* Scroll progress bar */}
      <ScrollProgressBar />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main
        className="relative"
        style={{ background: 'var(--color-void)' }}
      >
        <Hero />

        {/* Divider glow */}
        <div
          className="h-px w-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.3), transparent)',
          }}
        />

        <About />
        <Experience />
        <Education />

        {/* Divider */}
        <div
          className="h-px w-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)',
          }}
        />

        <Projects />
        <Skills />
        <Achievements />
        <Hobbies />

        {/* Divider */}
        <div
          className="h-px w-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,45,120,0.3), transparent)',
          }}
        />

        <Contact />
      </main>

      <Footer />

      {/* Floating AI Chatbot */}
      <Chatbot />
    </>
  );
}
