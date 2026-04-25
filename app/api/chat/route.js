


import { NextResponse } from 'next/server';
import { chatbotSystemPrompt } from '@/utils/data';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({ status: 'Chat API is active and ready for POST requests.' });
}

export async function POST(request) {

  let messages = [];

  try {
    const body = await request.json();
    messages = body.messages;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    if (process.env.GEMINI_API_KEY) {
      try {
        const lastMessage = messages[messages.length - 1].content;
        const fullPrompt = `${chatbotSystemPrompt}\n\nUser Question: ${lastMessage}`;

        // ✅ No package — direct fetch to REST API
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: fullPrompt }] }],
            }),
          }
        );

        const data = await res.json();


        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) return NextResponse.json({ reply: text });


      } catch {
        // Gemini API failed, fall through to rule-based fallback
      }
    }

    // Fallback
    const lastMsgContent = messages?.[messages.length - 1]?.content?.toLowerCase() || '';
    return NextResponse.json({ reply: getRuleBasedReply(lastMsgContent) });

  } catch {
    return NextResponse.json({
      reply: "I'm having trouble connecting right now. Feel free to explore my projects!",
    });
  }
}

function getRuleBasedReply(message) {
  if (message.includes('skill') || message.includes('tech') || message.includes('stack') || message.includes('ai'))
    return "Satya is an expert in React.js, Next.js, TypeScript, GraphQL, Tailwind CSS, and is Anthropic Claude 101 Certified! 🚀";
  if (message.includes('project') || message.includes('work'))
    return "Key projects: Lupin Diagnostics (600+ centers), Bengal Tourism, Nurse Report (8k+ hospitals), Dev Tinder. 💼";
  if (message.includes('experience') || message.includes('job') || message.includes('company'))
    return "4+ years experience. Currently at Indus Net Technologies (INT), previously Webskitters and Jai Infoway. 🏆";
  if (message.includes('education') || message.includes('degree') || message.includes('college'))
    return "MCA (81.65%) and B.Sc. IT (74.13%) from Ranchi University. 🎓";
  if (message.includes('hackathon') || message.includes('competition'))
    return "Satya built 'Recruitment Assistance AI' at INT Internal Hackathon — an n8n-powered Interview Scheduler Agent! 🤖";
  if (message.includes('cricket') || message.includes('sports'))
    return "Satya scored 66* off just 26 balls with 7 sixes in INT Cricket League 2026 — nicknamed 'Life Science Legend'! 🏏🔥";
  if (message.includes('chess') || message.includes('game'))
    return "Beat Satya on Chess.com and win ₹5,000! ♟️💰";
  if (message.includes('contact') || message.includes('hire') || message.includes('email') || message.includes('phone'))
    return "📧 sprakash6233@gmail.com | 📞 +91-8506056814 | Kolkata, India — open to opportunities! 📬";
  if (message.includes('hello') || message.includes('hi') || message.includes('hey'))
    return "Hey! 👋 I'm Satya's AI assistant. Ask about his experience, projects, cricket 🏏 or ₹5,000 chess challenge ♟️!";
  if (message.includes('about') || message.includes('who'))
    return "Satya Prakash — Software Engineer, Kolkata. 4+ years building scalable apps for healthcare, tourism & e-commerce. 🧑‍💻";
  return "I'm best at answering about Satya's skills, projects, and experience. What would you like to know? 😊";
}
