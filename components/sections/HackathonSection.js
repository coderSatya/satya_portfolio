'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionLabel } from '@/components/ui/UIElements';

export default function HackathonSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    "Auto-schedule interviews by syncing candidate and interviewer calendars",
    "Suggest optimal interview slots using availability and priority rules",
    "Send automated confirmations and reminders via email or WhatsApp",
    "Handle last-minute rescheduling and slot conflict resolution"
  ];

  return (
    <section id="hackathon" className="py-16 md:py-24 relative overflow-hidden" ref={ref}>
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <SectionLabel number={5} label="Competitions" />

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-8">
            🚀 INT INTERNAL HACKATHON
          </div>
          
          <h2 className="font-display font-black text-5xl md:text-7xl text-white mb-8 leading-tight">
            Recruitment <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Assistance AI</span>
          </h2>

          <p className="font-body text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
             Built an intelligent <span className="text-white font-bold">Interview Scheduler Agent</span> with n8n and Drupal to automate complex hiring logistics for the organization.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16 text-left max-w-3xl mx-auto">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 transition-all hover:bg-white/[0.05]">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0">
                  <span className="text-indigo-400 text-sm">⚡</span>
                </div>
                <p className="font-body text-slate-300 text-sm leading-snug">{feature}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-6 justify-center items-center">
            <a
              href="/images/interview flow.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-5 font-display font-bold text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-cyan-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white/5 hover:bg-white/10 px-10 py-5 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3 text-cyan-400 text-lg">
                View System Flow 🛠️
              </div>
            </a>

            <a
              href="/pdf/hackathon.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-5 font-display font-bold text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-indigo-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-indigo-600 px-10 py-5 rounded-2xl border border-white/10 shadow-xl text-lg">
                Read Proposal PDF →
              </div>
            </a>
          </div>

          {/* Quick Tech Badge */}
          <div className="mt-16 flex justify-center gap-8 opacity-40">
              <div className="flex flex-col items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Automation</span>
                <span className="text-white font-bold text-sm">n8n Workflow</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">CMS</span>
                <span className="text-white font-bold text-sm">Drupal</span>
              </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
