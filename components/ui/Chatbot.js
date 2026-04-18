'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUICK_QUESTIONS = [
  { label: 'About Me', prompt: 'Tell me about Satya' },
  { label: 'Projects', prompt: 'What projects has Satya built?' },
  { label: 'Skills', prompt: "What are Satya's main skills?" },
  { label: 'Contact', prompt: 'How can I contact Satya?' },
];

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full"
          style={{ background: 'var(--color-neon-cyan)' }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

function Message({ msg }) {
  const isUser = msg.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}
    >
      {!isUser && (
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold mr-2 shrink-0 mt-0.5"
          style={{ background: 'linear-gradient(135deg, var(--color-neon-cyan), var(--color-neon-violet))' }}
        >
          <span className="text-void">AI</span>
        </div>
      )}
      <div
        className="relative max-w-[80%] rounded-2xl px-4 py-3 text-sm font-body leading-relaxed"
        style={
          isUser
            ? {
                background: 'linear-gradient(135deg, rgba(139,92,246,0.35), rgba(139,92,246,0.2))',
                border: '1px solid rgba(139,92,246,0.3)',
                color: '#e2e8f0',
                borderBottomRightRadius: '4px',
              }
            : {
                background: 'rgba(0,245,255,0.06)',
                border: '1px solid rgba(0,245,255,0.12)',
                color: '#e2e8f0',
                borderBottomLeftRadius: '4px',
              }
        }
      >
        {msg.content}
      </div>
    </motion.div>
  );
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! 👋 I'm Satya's AI assistant. Ask me anything about his skills, projects, or experience!",
    },
  ]);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, thinking]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const sendMessage = async (text) => {
    const userMessage = text || input.trim();
    if (!userMessage || thinking) return;

    const newMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setInput('');
    setThinking(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: "Sorry, I'm having trouble connecting. Please try again!",
        },
      ]);
    } finally {
      setThinking(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: 'linear-gradient(135deg, var(--color-neon-cyan), var(--color-neon-violet))',
          boxShadow: '0 0 30px rgba(0,245,255,0.4)',
        }}
        aria-label="Open AI chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-6 h-6 text-void"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.span
              key="open"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="text-2xl"
            >
              🤖
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!open && (
          <span
            className="absolute inset-0 rounded-2xl animate-ping opacity-30"
            style={{ background: 'rgba(0,245,255,0.4)' }}
          />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(8, 13, 31, 0.95)',
              border: '1px solid rgba(0,245,255,0.15)',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 0 60px rgba(0,245,255,0.1), 0 40px 80px rgba(0,0,0,0.6)',
            }}
          >
            {/* Header */}
            <div
              className="px-5 py-4 flex items-center gap-3"
              style={{
                background: 'linear-gradient(135deg, rgba(0,245,255,0.08), rgba(139,92,246,0.08))',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm"
                style={{
                  background: 'linear-gradient(135deg, var(--color-neon-cyan), var(--color-neon-violet))',
                  color: 'var(--color-void)',
                }}
              >
                AI
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm">Satya's Assistant</p>
                <p className="font-mono text-xs" style={{ color: 'var(--color-neon-cyan)' }}>
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full mr-1 animate-pulse"
                    style={{ background: 'var(--color-neon-cyan)' }}
                  />
                  Online
                </p>
              </div>
              <button
                onClick={() =>
                  setMessages([
                    {
                      role: 'assistant',
                      content: "Hi! 👋 I'm Satya's AI assistant. Ask me anything about his skills, projects, or experience!",
                    },
                  ])
                }
                className="ml-auto text-slate-600 hover:text-slate-400 transition-colors font-mono text-xs"
                title="Clear chat"
              >
                Clear
              </button>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto px-4 py-4 space-y-1 scrollbar-thin">
              {messages.map((msg, i) => (
                <Message key={i} msg={msg} />
              ))}
              {thinking && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start mb-3"
                >
                  <div
                    className="rounded-2xl rounded-bl-sm"
                    style={{
                      background: 'rgba(0,245,255,0.06)',
                      border: '1px solid rgba(0,245,255,0.12)',
                    }}
                  >
                    <TypingDots />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick questions */}
            <div
              className="px-4 py-3 flex gap-2 overflow-x-auto"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
            >
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q.label}
                  onClick={() => sendMessage(q.prompt)}
                  disabled={thinking}
                  className="shrink-0 px-3 py-1.5 rounded-lg font-mono text-xs transition-all hover:scale-105 disabled:opacity-50"
                  style={{
                    background: 'rgba(0,245,255,0.06)',
                    border: '1px solid rgba(0,245,255,0.15)',
                    color: 'var(--color-neon-cyan)',
                  }}
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div
              className="px-4 py-3 flex gap-3 items-end"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                rows={1}
                className="flex-1 bg-transparent font-body text-sm text-white placeholder:text-slate-600 outline-none resize-none"
                style={{ maxHeight: '80px' }}
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || thinking}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                style={{
                  background: 'linear-gradient(135deg, var(--color-neon-cyan), var(--color-neon-violet))',
                }}
              >
                <svg
                  className="w-4 h-4 text-void"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
