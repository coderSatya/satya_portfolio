// utils/data.js — Central knowledge base for portfolio and chatbot

export const portfolioData = {
  personal: {
    name: "Satya Prakash",
    role: "Software Engineer | Full Stack Developer",
    experience: "4+ Years",
    location: "Kolkata, India",
    phone: "+91-8506056814",
    email: "sprakash6233@gmail.com",
    github: "https://github.com/coderSatya",
    linkedin: "https://linkedin.com/in/satya-prakash-sp",
    tagline: "Building Scalable Web Apps with React, Next.js & AI",
    summary:
      "Software Engineer with 4+ years of experience building scalable, high-performance MERN stack applications using React.js and Next.js. Improved page load speed by 40% and user engagement by 25%. Expert in full-stack architecture, SSR, SSG, and AI-assisted development.",
  },

  skills: {
    frontend: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
    ],
    ui: [
      "Tailwind CSS",
      "Material UI (MUI)",
      "Ant Design",
      "Shadcn",
      "Radix UI",
      "Responsive Design",
    ],
    stateAndData: [
      "Redux",
      "Zustand",
      "TanStack React Query",
      "REST APIs",
      "GraphQL",
    ],
    performance: [
      "SSR",
      "SSG",
      "PWA",
      "Web Vitals",
      "SEO Optimization",
      "Code Splitting",
      "Lazy Loading",
    ],
    tools: [
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "Postman",
      "VS Code",
    ],
    ai: [
      "ChatGPT",
      "Claude",
      "GitHub Copilot",
      "Cursor AI",
      "n8n",
      "Prompt Engineering",
    ],
  },

  achievements: [
    "Improved page load speed by 40%",
    "Increased user engagement by 25%",
    "Handled large datasets (8000+ records)",
    "Delivered multiple production-level applications",
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      college: "Marwari College, Ranchi",
      university: "Ranchi University",
      duration: "2018 – 2021",
      percentage: "81.65%",
    },
    {
      degree: "B.Sc. IT",
      college: "Marwari College, Ranchi",
      university: "Ranchi University",
      duration: "2014 – 2017",
      honours: "74.13%",
      aggregate: "65.50%",
    },
    {
      degree: "Class 12 (CBSE)",
      school: "Saraswati Shishu Vidya Mandir, Ranchi",
      year: "2013",
      percentage: "64.2%",
    },
    {
      degree: "Class 10 (ICSE)",
      school: "Don Bosco Academy",
      year: "2011",
      percentage: "76.4%",
    },
  ],

  experience: [
    {
      company: "Indus Net Technologies",
      role: "Software Engineer",
      duration: "Jul 2025 – Present",
      location: "Kolkata",
      projects: [
        {
          name: "Bengal – Soulfully Yours",
          description:
            "Built SEO-optimized tourism pages using Next.js, Drupal CMS, and SSR/SSG. Developed AI-driven tourism modules with dynamic routing.",
        },
        {
          name: "Lupin Diagnostics",
          description:
            "Developed a full medical booking system with filtering, scheduling, and GraphQL APIs for efficient data handling.",
        },
      ],
    },
    {
      company: "Webskitters Technology Solutions",
      role: "JavaScript Developer (ReactJS)",
      duration: "Sep 2023 – Jul 2025",
      location: "Kolkata",
      projects: [
        {
          name: "American Murder Song",
          description:
            "E-commerce platform with PayPal integration, SSR optimization, and improved performance by 40%.",
        },
        {
          name: "Nurse Report",
          description:
            "Healthcare hiring platform with 8000+ hospital data, advanced filtering, dashboards, and charts.",
        },
      ],
    },
    {
      company: "Jai Infoway Pvt. Ltd.",
      role: "Software Engineer",
      duration: "Apr 2023 – Sep 2023",
      location: "Ranchi",
      projects: [
        {
          name: "JKYOG Website Migration",
          description:
            "Migrated Drupal website to Next.js with SSR, improving performance and SEO.",
        },
      ],
    },
    {
      company: "CodeClouds IT Solutions",
      role: "Frontend Developer",
      duration: "Dec 2022 – Apr 2023",
      location: "Kolkata",
      projects: [
        {
          name: "CADS Reports & PYPA HR",
          description:
            "Built reusable UI components and integrated APIs for analytics and HR platforms.",
        },
      ],
    },
  ],

  projects: [
    {
      id: "bengal-tourism",
      name: "Bengal – Soulfully Yours",
      url: "https://soulfulbengal.com/",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Drupal CMS"],
      category: "Full Stack / AI",
      description:
        "A premium tourism platform featuring built-from-scratch Next.js architecture with optimized SSR/SSG. It includes a custom AI discovery engine that suggests destinations based on user categories, improving performance by over 40% and significantly boosting SEO rankings.",
      color: "#ff2d78",
    },
    {
      id: "lupin-diagnostics",
      name: "Lupin Diagnostics",
      url: "https://www.lupindiagnostics.com/",
      tech: ["React.js", "Node.js", "GraphQL", "Strapi CMS"],
      category: "Healthcare",
      description:
        "An enterprise-scale diagnostic platform serving 600+ centers. Engineered the complete test booking cycle with real-time LIMS integration, dynamic GraphQL querying, and a custom healthcare package system delivered via a Strapi-powered CMS.",
      color: "#00f5ff",
    },
    {
      id: "nurse-report",
      name: "Nurse Report",
      url: "https://nurse.report/",
      tech: ["React.js", "Redux", "React Query", "High Performance"],
      category: "Healthcare Recruiting",
      description:
        "A heavy-duty healthcare hiring platform managing data for over 8000 hospitals. I implemented advanced real-time filtering, high-speed data dashboards, and optimized API layers for seamless recruiter experiences.",
      color: "#38bdf8",
    },
    {
      id: "american-murder-song",
      name: "American Murder Song",
      url: "https://americanmurdersong.com/",
      tech: ["Next.js", "PayPal", "E-commerce"],
      category: "E-commerce",
      description:
        "A custom-tailored e-commerce experience featuring complex server-side rendering, seamless PayPal integration, and a unique visual theme. Improved page performance by 40% while maintaining high design fidelity.",
      color: "#e11d48",
    },
    {
      id: "jkyog",
      name: "JKYOG",
      url: "https://www.jkyog.org/",
      tech: ["Next.js", "Drupal", "Performance"],
      category: "Content Platform",
      description:
        "A global content-driven platform migrated from legacy systems to a high-speed Next.js architecture. Focused on core web vitals optimization, global accessibility, and headless CMS synchronization to deliver a smooth user experience.",
      color: "#8b5cf6",
    },
    {
      id: "besimplified",
      name: "BeSimplified",
      url: "https://www.besimplified.com/",
      tech: ["React.js", "Modern UI", "Web Experience"],
      category: "Modern Web App",
      description:
        "A clean, minimalist web experience designed with modern frontend principles. Focused on reducing bloat, implementing smooth micro-interactions, and building a custom design system for consistent brand identity across all touchpoints.",
      color: "#f59e0b",
    },
  ],

  certifications: [
    {
      title: "React - The Complete Guide 2024",
      platform: "Udemy",
      url: "https://www.udemy.com/certificate/UC-81d7cf41-bd3c-4ee2-a954-277b486284ec/",
    },
    {
      title: "The Complete JavaScript Course 2024: From Zero to Expert!",
      platform: "Udemy",
      url: "https://www.udemy.com/certificate/UC-9cd475ed-d19f-4cac-891a-e1e56f9a6598/",
    },
    {
      title: "Next.js 14 & 15 - The Complete Guide",
      platform: "Udemy",
      url: "https://www.udemy.com/certificate/UC-dedfedaa-921c-4d68-bf82-1e4decd07a2a/",
    },
  ],
};

export const chatbotSystemPrompt = `You are Satya's personal AI assistant on his developer portfolio. Answer questions about Satya based on this context:
NAME: Satya Prakash
ROLE: Software Engineer | Full Stack Developer
PHONE: +91-8506056814
EMAIL: sprakash6233@gmail.com
EXPERIENCE: 4+ Years (Indus Net, Webskitters, Jai Infoway, CodeClouds)
SKILLS: MERN Stack, React.js, Next.js, Node.js, Express, MongoDB, Redux, Zustand, Tailwind CSS, GraphQL, SSR, AI (ChatGPT, Copilot).
EDUCATION: MCA, B.Sc. IT
PROJECTS: Bengal Tourism, Lupin Diagnostics, Nurse Report, American Murder Song.

Be concise, friendly, and helpful. Redirect off-topic questions.`;

export default portfolioData;
