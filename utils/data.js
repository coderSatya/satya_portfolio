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
      impact: "Leading high-performance frontend initiatives using Next.js and AI-integrated workflows.",
      highlights: [
        "Improved website performance by 40% using advanced SSR and optimization techniques.",
        "Built scalable architecture using Next.js and GraphQL for enterprise-level diagnostic systems.",
        "Optimized API handling and reduced initial load time by 30% through effective code splitting.",
        "Collaborated with cross-functional teams to ensure seamless data flow and high design fidelity."
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind", "GraphQL", "Strapi"],
      scale: "Serving 600+ centers across India",
      logo: "/images/int-logo.png"
    },
    {
      company: "Webskitters Technology Solutions",
      role: "JavaScript Developer (ReactJS)",
      duration: "Sep 2023 – Jul 2025",
      location: "Kolkata",
      impact: "Developed complex healthcare and e-commerce ecosystems with high data scale and performance needs.",
      highlights: [
        "Built a high-speed healthcare hiring platform handling 8000+ hospital data points.",
        "Implemented real-time analytics and dynamic data visualization dashboards.",
        "Significantly improved UI responsiveness and core web vitals across legacy projects.",
        "Developed a library of reusable UI components that reduced development time by 20%."
      ],
      techStack: ["React.js", "Redux", "React Query", "PayPal", "High Performance"],
      scale: "Trusted by 8000+ medical institutions",
      logo: "/images/webskitters-logo.png"
    },
    {
      company: "Jai Infoway Pvt. Ltd.",
      role: "Software Engineer",
      duration: "Apr 2023 – Sep 2023",
      location: "Ranchi",
      impact: "Focused on global platform migrations and SEO performance optimization.",
      highlights: [
        "Migrated complex legacy Drupal systems to modern Next.js architectures.",
        "Improved global SEO visibility and rankings through structured data and metadata optimization.",
        "Enhanced page load speeds significantly using edge caching and SSR.",
        "Balanced UI/UX improvements with performance and maintainability."
      ],
      techStack: ["Next.js", "Drupal", "SEO Optimization", "SSR"],
      scale: "International Content Platform Delivery",
      logo: "/images/jai-logo.png"
    },
    {
      company: "CodeClouds IT Solutions",
      role: "Frontend Developer",
      duration: "Dec 2022 – Apr 2023",
      location: "Kolkata",
      impact: "Delivered enterprise-grade UI components and integrated complex backend APIs.",
      highlights: [
        "Built reusable UI component libraries for enterprise analytics and HR management platforms.",
        "Integrated complex RESTful APIs for real-time data handling in HR portals.",
        "Focused on creating accessible and high-fidelity frontends from Figma designs."
      ],
      techStack: ["React.js", "UI Kit Development", "API Integration"],
      scale: "Enterprise HR & Analytics Solutions",
      logo: "/images/codeclouds-logo.png"
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

  cricketAchievement: {
    title: "Cricket Achievement 🏏",
    highlight: "Life Science Legends – Champions (INT. Cricket League 2026)",
    performanceSummary: "66* runs off 26 balls (7 sixes, 5 fours)",
    award: "Man of the Match",
    venue: "NKDA Cricket Stadium, Kolkata",
    stats: [
      { label: "Runs", value: "66*" },
      { label: "Balls", value: "26" },
      { label: "Sixes", value: "7" },
      { label: "Fours", value: "5" },
    ],
    gallery: [
      { url: "/images/cric1.jpeg", caption: "Lifting the Trophy" },
      { url: "/images/cric2.jpeg", caption: "Batting in Style" },
    ],
    videoUrl: "https://www.youtube.com/embed/G7jwCMr6JHM", // Fixed for iframe embed
  },

  ebookPromo: {
    title: "Frontend Interview Mastery 📘",
    subtitle: "Most frontend developers fail interviews not because they don’t know React — but because they lack clarity.",
    problem: [
      "Random DSA questions that never get asked",
      "Stuck in a loop of endless tutorials",
      "Lack of clarity on output-based questions",
      "No idea what high-tier interviewers actually look for",
    ],
    solution: "A structured, battle-tested ebook built on real interview patterns from top tech companies.",
    features: [
      "Most frequently asked technical questions",
      "Frontend-optimized DSA patterns",
      "Coding & output-based challenges",
      "Deep dives into JS, React, and Next.js",
      "Comprehensive interview roadmaps",
      "Curated learning resources",
      "Leveraging AI tools in development",
    ],
    cta: "Download Ebook",
    downloadUrl: "https://superprofile.bio/satyaprakash15/SNnfThwgAC",
  },
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
