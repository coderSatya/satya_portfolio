'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CustomCursor, ScrollProgressBar, LoadingScreen } from '@/components/ui/UIElements';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Chatbot from '@/components/ui/Chatbot';
import ErrorBoundary from '@/components/ui/ErrorBoundary';

export default function GlobalLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch-only devices to disable the custom cursor
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          {!isTouchDevice && <CustomCursor />}
          <ScrollProgressBar />
          <Navbar />
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
          <Footer />
          <ErrorBoundary>
            <Chatbot />
          </ErrorBoundary>
        </>
      )}
    </>
  );
}
