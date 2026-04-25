'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import toast from 'react-hot-toast';
import { SectionLabel } from '@/components/ui/UIElements';
import { portfolioData } from '@/utils/data';

const { personal } = portfolioData;

const QuickAction = ({ icon, label, href, colorClass }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/5 transition-all duration-500 hover:scale-105 active:scale-95 glass ${colorClass}`}
  >
    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest leading-none mb-1">
        Reach via
      </span>
      <span className="font-body font-bold text-sm text-white group-hover:text-white/90">
        {label}
      </span>
    </div>
  </a>
);

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        toast.success('Message sent successfully! ✅');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        toast.error(data.error || 'Something went wrong.');
      }
    } catch {
      toast.error('Network error. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="pt-10 md:pt-14 pb-14 md:pb-20 relative overflow-hidden" ref={ref}>
      {/* Background Decorative Glow */}
      <div
        className="absolute bottom-0 right-1/2 translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-5 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--color-neon-cyan), var(--color-neon-violet), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionLabel number={8} label="Connect" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mt-12">
          {/* Left - Info & Availability */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h2 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-8">
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Something</span> <br />
              Amazing Together
            </h2>

            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-10 h-[1px] bg-cyan-500" />
                <p className="font-body text-slate-400 text-lg md:text-xl">
                  I’m available for full-time roles, freelance projects, and collaborations.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                  I usually respond within 24 hours.
                </p>
              </div>
            </div>

            {/* Quick Contact Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <QuickAction
                icon="✉️"
                label="Email Me"
                href={`mailto:${personal.email}`}
                colorClass="hover:border-cyan-500/30"
              />
              <QuickAction
                icon="📞"
                label="Call Me"
                href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                colorClass="hover:border-blue-500/30"
              />
              <QuickAction
                icon="💬"
                label="WhatsApp"
                href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}`}
                colorClass="hover:border-emerald-500/30"
              />
              <QuickAction
                icon="🔗"
                label="LinkedIn"
                href={personal.linkedin}
                colorClass="hover:border-violet-500/30"
              />
            </div>
          </motion.div>

          {/* Right - Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative glass rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl overflow-hidden"
              noValidate
            >
              {/* Success Overlay */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-50 glass flex flex-col items-center justify-center text-center p-10"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center text-4xl mb-6 border border-emerald-500/20">
                      ✅
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white mb-2">Message Sent!</h3>
                    <p className="font-body text-slate-400">Thanks for reaching out, Satya will get back to you soon.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-6">
                <div>
                  <label className="font-mono text-[10px] text-slate-500 block mb-3 tracking-[0.2em] uppercase">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full bg-white/[0.03] border rounded-2xl px-6 py-4 font-body text-white outline-none transition-all duration-300 focus:bg-white/[0.05] ${
                      errors.name ? 'border-red-500/50' : 'border-white/5 focus:border-cyan-500/50'
                    }`}
                  />
                  {errors.name && <p className="mt-2 text-[10px] font-mono text-red-400 uppercase tracking-wider">{errors.name}</p>}
                </div>

                <div>
                  <label className="font-mono text-[10px] text-slate-500 block mb-3 tracking-[0.2em] uppercase">Email</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full bg-white/[0.03] border rounded-2xl px-6 py-4 font-body text-white outline-none transition-all duration-300 focus:bg-white/[0.05] ${
                      errors.email ? 'border-red-500/50' : 'border-white/5 focus:border-cyan-500/50'
                    }`}
                  />
                  {errors.email && <p className="mt-2 text-[10px] font-mono text-red-400 uppercase tracking-wider">{errors.email}</p>}
                </div>

                <div>
                  <label className="font-mono text-[10px] text-slate-500 block mb-3 tracking-[0.2em] uppercase">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project, role, or just say hi..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`w-full bg-white/[0.03] border rounded-2xl px-6 py-4 font-body text-white outline-none transition-all duration-300 focus:bg-white/[0.05] resize-none ${
                      errors.message ? 'border-red-500/50' : 'border-white/5 focus:border-cyan-500/50'
                    }`}
                  />
                  {errors.message && <p className="mt-2 text-[10px] font-mono text-red-400 uppercase tracking-wider">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full relative group overflow-hidden py-5 rounded-2xl font-body font-black text-void transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-wait"
                  style={{ background: 'linear-gradient(135deg, var(--color-neon-cyan), #00d4e6)' }}
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {sending ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        CONNECTING...
                      </>
                    ) : (
                      <>
                        LET'S WORK TOGETHER 🚀
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
