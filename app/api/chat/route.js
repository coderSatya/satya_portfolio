// app/api/chat/route.js
// AI Chatbot route using OpenAI GPT
// Requires: OPENAI_API_KEY in .env.local

import OpenAI from 'openai';
import { NextResponse } from 'next/server';
import { chatbotSystemPrompt } from '@/utils/data';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    // If no API key, use rule-based fallback
    if (!process.env.OPENAI_API_KEY) {
      const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';
      return NextResponse.json({
        reply: getRuleBasedReply(lastMessage),
      });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      max_tokens: 200,
      temperature: 0.7,
      messages: [
        { role: 'system', content: chatbotSystemPrompt },
        ...messages.slice(-10), // Keep last 10 messages for context
      ],
    });

    const reply = completion.choices[0]?.message?.content || "I couldn't generate a response. Please try again.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    // Fallback to rule-based if OpenAI fails
    const lastMessage = messages?.[messages.length - 1]?.content?.toLowerCase() || '';
    return NextResponse.json({
      reply: getRuleBasedReply(lastMessage),
    });
  }
}

// Rule-based fallback when OpenAI is not available
function getRuleBasedReply(message) {
  if (message.includes('skill') || message.includes('tech') || message.includes('stack')) {
    return "Satya's core stack is React.js, Next.js, JavaScript, TypeScript, and Tailwind CSS. He also works with Node.js, PostgreSQL, and React Query. Frontend is his superpower! 🚀";
  }
  if (message.includes('project') || message.includes('work')) {
    return "Satya has built 20+ projects including a MultiVendor E-Commerce platform with Stripe/Razorpay, a Dynamic Template Builder used by 5+ clients, and a high-performance Analytics Dashboard handling 100K+ records. 💼";
  }
  if (message.includes('experience') || message.includes('job') || message.includes('company')) {
    return "Satya has 2.5+ years of experience as a JavaScript Developer at Webskitters Technology Solutions in Kolkata. He's built 10+ production apps and improved performance by 40%! 🏆";
  }
  if (message.includes('education') || message.includes('degree') || message.includes('college')) {
    return "Satya holds an MCA (Master of Computer Applications) from Burdwan University, completed in 2021 with First Class honors. 🎓";
  }
  if (message.includes('hobby') || message.includes('hobbies') || message.includes('interest')) {
    return "Outside of coding, Satya loves playing Chess ♟️, watching Cricket 🏏, exploring AI/ML trends 🤖, and consuming tech content on YouTube 📺!";
  }
  if (message.includes('contact') || message.includes('hire') || message.includes('email')) {
    return "You can reach Satya via the Contact form on this page, or directly at satya.prakash@example.com. He's open to exciting opportunities! 📬";
  }
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hey there! 👋 I'm Satya's AI assistant. I can tell you about his skills, projects, experience, or how to get in touch. What would you like to know?";
  }
  if (message.includes('about') || message.includes('who')) {
    return "Satya Prakash is a passionate Frontend Developer from Kolkata, India with 2.5+ years of experience. He specializes in React.js and Next.js, building high-performance, beautiful web apps. 🧑‍💻";
  }
  return "Great question! I'm best at answering about Satya's skills, projects, experience, and education. Feel free to ask about any of those! 😊";
}
