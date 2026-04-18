// utils/data.js — Central knowledge base for portfolio and chatbot

export const portfolioData = {
  personal: {
    name: "Satya Prakash",
    role: "Software Engineer",
    tagline: "Frontend Developer",
    experience: "2.5+",
    location: "Kolkata, India",
    email: "satya.prakash@example.com",
    github: "https://github.com/satyaprakash",
    linkedin: "https://linkedin.com/in/satyaprakash",
    resumeUrl: "/resume.pdf",
    bio: "I'm a passionate Frontend Developer with 2.5+ years of experience crafting high-performance web applications. I specialize in React.js and Next.js, with a strong eye for design and user experience. Currently at Webskitters, I transform complex problems into elegant, scalable solutions.",
    avatar: "/avatar-placeholder.jpg",
  },

  stats: {
    experience: { value: 2.5, label: "Years Experience", suffix: "+" },
    projects: { value: 20, label: "Projects Delivered", suffix: "+" },
    performance: { value: 40, label: "Performance Improved", suffix: "%" },
    clients: { value: 15, label: "Happy Clients", suffix: "+" },
  },

  experience: [
    {
      id: 1,
      company: "Webskitters Technology Solutions Pvt. Ltd.",
      role: "JavaScript Developer",
      type: "Full-time",
      period: "2022 — Present",
      duration: "2.5+ years",
      location: "Kolkata, India",
      description:
        "Working as a frontend-focused JavaScript developer, building scalable web applications and contributing to full-stack features using React.js, Next.js, and Node.js.",
      responsibilities: [
        "Developed and maintained 10+ client-facing React.js & Next.js applications",
        "Implemented complex UI components with Tailwind CSS and Framer Motion animations",
        "Integrated RESTful APIs and optimized data fetching with React Query",
        "Improved application load time by 40% through code splitting, lazy loading, and image optimization",
        "Collaborated with designers to implement pixel-perfect, responsive interfaces",
        "Set up CI/CD pipelines and contributed to DevOps workflows",
        "Mentored junior developers and conducted code reviews",
        "Built dynamic template systems used across multiple client deployments",
      ],
      tech: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "React Query", "Node.js", "PostgreSQL"],
    },
  ],

  education: [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "University Institute of Technology",
      university: "Burdwan University",
      year: "2019 — 2021",
      grade: "First Class",
      location: "West Bengal, India",
      highlights: ["Full-stack development", "Data Structures & Algorithms", "Database Management", "Software Engineering"],
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "College of Technology",
      university: "Burdwan University",
      year: "2016 — 2019",
      grade: "First Class",
      location: "West Bengal, India",
    },
  ],

  projects: [
    {
      id: 1,
      title: "MultiVendor E-Commerce Platform",
      description:
        "A full-featured e-commerce platform supporting multiple vendors with Stripe & Razorpay payment integration, real-time inventory management, order tracking, and an admin dashboard.",
      longDescription:
        "Built a scalable multi-vendor marketplace with secure payment processing. Implemented complex cart logic, vendor-specific dashboards, coupon systems, and automated email notifications.",
      tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Stripe", "Razorpay", "PostgreSQL", "Prisma"],
      liveUrl: "https://ecommerce-demo.example.com",
      githubUrl: "#",
      color: "#00f5ff",
      category: "Full Stack",
      featured: true,
    },
    {
      id: 2,
      title: "Dynamic Template Builder",
      description:
        "A no-code visual template system where users can drag-and-drop components to build custom pages. Powers 5+ client websites from a single codebase.",
      longDescription:
        "Architected a dynamic template engine supporting 20+ component types with real-time preview. JSON-driven configuration allows non-technical users to create complex layouts.",
      tech: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "React DnD", "JSON Schema"],
      liveUrl: "https://template-builder.example.com",
      githubUrl: "#",
      color: "#8b5cf6",
      category: "Frontend",
      featured: true,
    },
    {
      id: 3,
      title: "Large Dataset Analytics Dashboard",
      description:
        "A high-performance data visualization dashboard handling 100K+ records with virtual scrolling, real-time filtering, and interactive charts.",
      longDescription:
        "Solved performance challenges for massive datasets using virtualization, pagination, and Web Workers. Features real-time data updates via WebSocket and exportable reports.",
      tech: ["React.js", "TypeScript", "React Query", "Recharts", "Web Workers", "WebSocket", "Node.js"],
      liveUrl: "https://analytics-demo.example.com",
      githubUrl: "#",
      color: "#ff2d78",
      category: "Data / Full Stack",
      featured: true,
    },
    {
      id: 4,
      title: "AI Content Generator",
      description:
        "An AI-powered content creation tool integrating OpenAI GPT API for generating blog posts, product descriptions, and social media copy.",
      tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Framer Motion", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      color: "#f0b429",
      category: "AI / Full Stack",
      featured: false,
    },
  ],

  skills: {
    frontend: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "JavaScript", level: 93 },
      { name: "TypeScript", level: 82 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
      { name: "HTML5 / CSS3", level: 97 },
      { name: "Redux / Zustand", level: 78 },
    ],
    backend: [
      { name: "Node.js", level: 72 },
      { name: "Express.js", level: 70 },
      { name: "PostgreSQL", level: 68 },
      { name: "REST APIs", level: 88 },
      { name: "Prisma ORM", level: 72 },
    ],
    tools: [
      { name: "Git / GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 75 },
      { name: "Docker", level: 60 },
      { name: "Vercel / Netlify", level: 88 },
      { name: "Postman", level: 85 },
    ],
  },

  achievements: [
    {
      icon: "🚀",
      value: "20+",
      label: "Projects Delivered",
      description: "Successfully shipped production-grade applications",
    },
    {
      icon: "⚡",
      value: "40%",
      label: "Performance Boost",
      description: "Average load time improvement across projects",
    },
    {
      icon: "👥",
      value: "15+",
      label: "Happy Clients",
      description: "Across diverse industries and domains",
    },
    {
      icon: "🛠️",
      value: "10+",
      label: "Technologies",
      description: "Mastered modern frontend tech stack",
    },
  ],

  hobbies: [
    { name: "Chess", icon: "♟️", description: "Strategic thinking & pattern recognition" },
    { name: "Cricket", icon: "🏏", description: "Team spirit & competitive mindset" },
    { name: "AI & ML", icon: "🤖", description: "Exploring the frontiers of artificial intelligence" },
    { name: "YouTube", icon: "📺", description: "Tech content & developer productivity" },
    { name: "Open Source", icon: "💻", description: "Contributing to the dev community" },
    { name: "Reading", icon: "📚", description: "Tech blogs, system design & philosophy" },
  ],
};

// Chatbot knowledge for AI system prompt
export const chatbotSystemPrompt = `You are Satya's personal AI assistant on his developer portfolio. You are friendly, concise, and helpful. Answer questions about Satya based on the following data:

NAME: Satya Prakash
ROLE: Frontend Developer / Software Engineer
EXPERIENCE: 2.5+ years at Webskitters Technology Solutions
LOCATION: Kolkata, India

SKILLS:
- Frontend: React.js (95%), Next.js (92%), JavaScript (93%), TypeScript (82%), Tailwind CSS (95%), HTML/CSS
- Backend: Node.js, Express.js, PostgreSQL, REST APIs, Prisma
- Tools: Git, Docker, Figma, Vercel, Postman

PROJECTS:
1. MultiVendor E-Commerce - Next.js, Stripe, Razorpay, PostgreSQL
2. Dynamic Template Builder - React, drag-and-drop, JSON-driven
3. Large Dataset Analytics Dashboard - React Query, WebSocket, 100K+ records
4. AI Content Generator - OpenAI API, Next.js

EXPERIENCE:
- Company: Webskitters Technology Solutions
- Role: JavaScript Developer (2022 - Present)
- Built 10+ production applications
- Improved performance by 40%

EDUCATION:
- MCA from Burdwan University (2021)

HOBBIES: Chess, Cricket, AI/ML, YouTube

For any questions not related to Satya or his portfolio, politely redirect the conversation back to what you can help with. Keep responses short (2-4 sentences). Be enthusiastic about Satya's skills.`;

export default portfolioData;
