'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CustomCursor, ScrollProgressBar, LoadingScreen } from '@/components/ui/UIElements';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Chatbot from '@/components/ui/Chatbot';

export default function GlobalLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If we want to simulate a network load or just simple minimum time
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
          <CustomCursor />
          <ScrollProgressBar />
          <Navbar />
          {children}
          <Footer />
          <Chatbot />
        </>
      )}
    </>
  );
}
