'use client';
import { Component } from 'react';
import { motion } from 'framer-motion';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // In production you'd send to an error monitoring service
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught:', error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center min-h-[400px] px-6 text-center"
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6"
            style={{ background: 'rgba(255,45,120,0.1)', border: '1px solid rgba(255,45,120,0.2)' }}
          >
            ⚠️
          </div>
          <h2 className="font-display font-bold text-2xl text-white mb-3">
            Something went wrong
          </h2>
          <p className="font-body text-slate-500 text-sm mb-6 max-w-xs">
            This section encountered an error. Try refreshing the page.
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="px-6 py-3 rounded-xl font-body font-bold text-sm text-void transition-all hover:scale-105 active:scale-95"
            style={{ background: 'var(--color-neon-cyan)' }}
          >
            Try Again
          </button>
        </motion.div>
      );
    }

    return this.props.children;
  }
}
