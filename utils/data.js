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
    instagram: "https://www.instagram.com/satya.prakash0715",
    tagline: "Building Scalable Web Apps with React, Next.js & AI",
    summary:
      "Software Engineer with 4+ years of experience, specialized in AI-integrated MERN stack systems. I have delivered scalable applications across Tourism, E-commerce, Healthcare, and Trading domains, with hands-on experience in independently managing projects and directly collaborating with clients—focused on performance, simplicity, and real-world impact."

  },

  skills: {
    frontend: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "PWA",
      "Web Vitals"
    ],
    ui: [
      "CSS3",
      "Tailwind CSS",
      "Material UI (MUI)",
      "Ant Design",
      "Shadcn",
      "Radix UI",
      "Responsive Design",
    ],
    stateAndData: [
      "Redux & Redux Toolkit",
      "Zustand",
      "TanStack React Query",
      "REST APIs",
      "GraphQL",
      "RTK Query"
    ],
    backendAndDevOps: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PM2",
      "Docker",
      "Redis",
      "AWS",
    ],
    tools: [
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "Postman",
      "VS Code",
      "Cursor AI",
    ],
    ai: [
      "ChatGPT",
      "Claude",
      "Cursor AI",
      "n8n",
      "Prompt Engineering",
      "GitHub Copilot",
      "Antigravity"
    ],
  },

  achievements: [
    "Improved page load speed by up to 40% through performance optimization",
    "Increased user engagement by 25% with better UI/UX and responsiveness",
    "Handled and optimized large datasets (8000+ records) efficiently",
    "Delivered multiple production-ready applications across domains",
    "Accelerated project delivery by leveraging AI-assisted development (Antigravity, Claude)",
    "Independently managed end-to-end project development from planning to deployment",
    "Collaborated directly with clients to deliver solutions aligned with business needs",
    "Optimized API performance and reduced load time for better scalability",
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
      id: "dev-tinder",
      name: "Dev Tinder – Developer Matching Platform",
      url: "http://13.201.88.146/",
      githubUrl: "https://github.com/coderSatya",
      tech: ["Next.js", "Node.js", "Express.js", "AWS EC2", "MongoDB", "TypeScript", "Tailwind CSS"],
      category: "Full Stack / MERN Stack / Dating App",
      isFeatured: true,
      description: `
A full-stack “Tinder for developers” platform that enables developers to discover and connect with each other. Built using a MERN-based architecture with a focus on scalability and real-time interactions.

Developed REST APIs using Node.js and Express, handling authentication, user profiles, and connection workflows such as sending, accepting, and managing requests. Implemented complete user authentication including signup, login, logout, and secure profile management.

Built a responsive and interactive UI using Next.js, TypeScript, and Tailwind CSS, enabling users to explore profiles, send connection requests, and manage their network seamlessly.

Deployed the application on AWS (EC2 t3.micro) and managed the hosting independently. Currently working on the next phase to enhance features and scalability.
`,
      impact: [
        { label: "Match Accuracy", value: "92%" },
        { label: "Max Connections", value: "10k+" },
        { label: "Deployment", value: "AWS EC2" },
        { label: "Stack", value: "MERN" }
      ],
      color: "#10b981",
    },
    {
      id: "bengal-tourism",
      name: "Bengal – Soulfully Yours",
      url: "https://soulfulbengal.com/",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Drupal CMS", "PWA", "Tanstack Query"],
      category: "Tourism / About Bengal",
      description: `
A tourism and cultural platform built from scratch to showcase the essence of Bengal, including events, stories, travel experiences, and local culture.

Developed using Next.js, TypeScript, and Drupal CMS, with a focus on performance, scalability, and dynamic content management. Designed responsive UI using Tailwind CSS and implemented SSR, resulting in up to 40–60% improvement in page load performance.

Integrated SEO across static and dynamic pages, leading to significant growth in organic visibility and user engagement. Implemented PWA features to enable offline access and deliver an app-like experience.

During the Durga Puja 2025 launch phase, introduced a dedicated section for Kolkata Durga Pandals with location details and navigation support, helping thousands of users explore pandals across the city.

A key highlight of the project is the DIY AI feature, which provides personalized location recommendations based on user-selected categories, improving user interaction and session engagement.
`,
      impact: [
        { label: "SSR Performance", value: "60% ↑" },
        { label: "Organic Reach", value: "45% ↑" },
        { label: "SEO Score", value: "100" },
        { label: "User Interaction", value: "High" }
      ],
      color: "#ff2d78",
    },
    {
      id: "lupin-diagnostics",
      name: "Lupin Diagnostics",
      url: "https://www.lupindiagnostics.com/",
      tech: ["React.js", "Node.js", "GraphQL", "Strapi CMS"],
      category: "Healthcare",
      description: `
Lupin Diagnostics

An enterprise-scale healthcare diagnostic platform serving 600+ centers across India, designed to streamline the test booking and patient interaction experience.

Developed responsive user interfaces based on Figma designs using React.js, and integrated with Strapi CMS and GraphQL for dynamic data handling and content management.

Engineered a complete end-to-end test booking flow, including test search, filtering, sorting (price, alphabetical), and package selection. Users can choose location, select nearby diagnostic centers, and book tests with options like home collection and slot selection.

Built advanced features such as:

• Smart filtering & search for 2500+ diagnostic tests and packages  
• Age & gender-based recommendations for personalized test selection  
• Package comparison (compare 2–3 packages side-by-side)  
• Patient portal for managing bookings and reports  
• Dedicated sections like LupiKavach health packages, corporate services, and blogs  

Optimized SEO and performance by configuring dynamic meta tags (title, description, canonical tags) and integrating Google Tag Manager (GTM) for analytics and tracking.

Further improved performance by optimizing Core Web Vitals (LCP, FID, CLS) using techniques like React code splitting, lazy loading, and reducing unnecessary re-renders, resulting in faster load times and smoother user interactions. Performance improvements were validated using Chrome Lighthouse and Google PageSpeed Insights.
`,
      impact: [
        { label: "Centers Connected", value: "600+" },
        { label: "Tests Managed", value: "2500+" },
        { label: "Performance", value: "98/100" },
        { label: "Core Web Vitals", value: "Passed" }
      ],
      color: "#00f5ff",
    },
    {
      id: "lupin-diagnostics-nextjs-ai",
      name: "Lupin Diagnostics Next Js Migration Using AI",
      url: "https://www.lupindiagnostics.com/",
      tech: ["Next.js", "GraphQL", "Strapi CMS", "TypeScript", "Antigravity", "Claude"],
      category: "Healthcare",
      description: `Led the migration of the Lupin Diagnostics platform from React.js to Next.js to address performance and SEO challenges.

Followed an AI-first development approach, leveraging tools like Claude and Antigravity to accelerate development and optimize architecture.

Achieved up to 60% reduction in page load time, significantly improved application performance, and resolved SEO issues, resulting in near 100% SEO optimization and better search visibility.`,
      impact: [
        { label: "Migration Speed", value: "2x Fast" },
        { label: "Page Load Time", value: "60% ↓" },
        { label: "SEO Visibility", value: "High" },
        { label: "UX Stability", value: "100%" }
      ],
      color: "#00f5ff",
    },
    {
      id: "nurse-report",
      name: "NURSE REPORT",
      url: "https://www.nurse.report/",
      tech: ["React.js", "Next.js", "REST API", "Node"],
      category: "Healthcare / Job Platform",
      description: `
NURSE REPORT is an employer rating and job platform where users can rate hospitals, explore job opportunities, and apply for roles, while hospitals can post jobs through a dedicated panel. The platform also includes a recruiter panel with ATS (Applicant Tracking System) features for efficient resume filtering and hiring management.

Led frontend development using React.js and Next.js, delivering a fast, responsive, and user-friendly interface.

Built advanced filtering functionality for recruiters, enabling sorting based on hiring needs, salary ranges, specialties, Nurse Report Score, and hospital attributes such as bed counts.

Optimized performance to efficiently handle and display data for 8000+ hospitals, ensuring fast load times and scalable architecture.

Developed hospital and recruiter panels, including job posting workflows and ATS-based resume management features.

Collaborated closely with backend teams to integrate REST APIs and ensure smooth data flow across the platform.

Worked directly with clients to understand requirements and translate them into scalable technical solutions, focusing on clean code and performance optimization.
`,
      impact: [
        { label: "Data Scale", value: "8k+ Hubs" },
        { label: "Recruiter App", value: "Full ATS" },
        { label: "User Rating", value: "Real-time" },
        { label: "Filtering", value: "Advanced" }
      ],
      color: "#00ff9d",
    },
    {
      id: "american-murder-song",
      name: "American Murder Song",
      url: "https://american-murder-song-dev-ui.dedicateddevelopers.us/",
      tech: ["Next.js", "React.js", "MUI", "React Query", "React Hook Form", "PayPal"],
      category: "E-commerce",
      description: `
Developed a fully functional e-commerce platform for the American Murder Song band, featuring a unique murder mystery-themed UI and secure online transactions.

Led frontend development using React.js and Next.js, leveraging Server-Side Rendering (SSR) to improve SEO and overall performance.

Designed responsive UI components using MUI, ensuring seamless user experience across devices.

Integrated PayPal for secure payment processing and built the complete e-commerce flow.

Utilized React Hook Form for efficient form handling and React Query for optimized data fetching and state management.

Focused on performance optimization, clean code practices, and smooth frontend-backend communication through REST API integration.

Collaborated with clients to understand requirements and translate them into scalable solutions while working closely with backend teams for efficient API integration.
`,
      impact: [
        { label: "SEO Optimized", value: "Yes" },
        { label: "Checkout Engine", value: "PayPal" },
        { label: "UI Design", value: "Unique" },
        { label: "Stack Performance", value: "A+" }
      ],
      color: "#ff6b6b",
    },
    {
      id: "jkyog",
      name: "JKYOG",
      url: "https://www.jkyog.org/",
      tech: ["Next.js", "Strapi CMS", "MySQL", "AWS S3", "Ubuntu"],
      category: "Web Platform / CMS",
      description: `
Worked on migrating the JKYOG website from Drupal to Next.js, significantly improving performance, scalability, and overall site speed.

Implemented Server-Side Rendering (SSR) to enhance page load times and deliver a better user experience.

Utilized Strapi CMS integrated with a MySQL database for efficient content management and structured data handling.

Integrated AWS S3 for seamless media storage and optimized asset delivery.

Developed and redesigned UI components, integrated APIs, and ensured smooth communication between frontend, CMS, and media services.

Gained hands-on experience with Ubuntu, managing server configurations, virtual environments, and deployment processes.

Contributed to enhancing the digital presence of Swami Mukundananda by delivering a faster, scalable, and user-friendly platform.
`,
      impact: [
        { label: "Performance", value: "Excellent" },
        { label: "Asset Hosting", value: "AWS S3" },
        { label: "Scalability", value: "Next.js" },
        { label: "CMS Flexibility", value: "Strapi" }
      ],
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
      title: "Anthropic Claude 101",
      platform: "Anthropic",
      url: "/pdf/certificate-wcathrphmzac-1777013839.pdf",
    },
    {
      title: "Namaste Node.js",
      platform: "Akshay Saini",
      url: "https://namastedev.com/sprakash6233/certificates/namaste-node",
      image: "/images/node.jpeg",
    },
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
    award: "Man of the Match, Final",
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
    title: "Frontend Interview Mastery",
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

  chessChallenge: {
    title: "Chess Challenge ♟️",
    headline: "Think you can beat me?",
    prize: "₹5,000",
    description: "I am passionate about chess and regularly play on Chess.com. I believe strategy in code is just as important as strategy on the board. Challenge me for a game, and if you manage to beat me, you win a cash reward!",
    cta: "Challenge Me Now",
    profileUrl: "https://link.chess.com/friend/ECXWvr", // Linked to your sprakash6233 handle
    disclaimer: "Challenge subject to fair play & conditions",
    quote: "Code is my profession, but chess is my strategy.",
  },
};

export const chatbotSystemPrompt = `You are Satya's personal AI assistant on his developer portfolio. Answer questions about Satya based on this context:
NAME: Satya Prakash
ROLE: Software Engineer | Full Stack Developer
PHONE: +91-8506056814
EMAIL: sprakash6233@gmail.com
EXPERIENCE: 4+ Years (Indus Net, Webskitters, Jai Infoway, CodeClouds)
SKILLS: MERN Stack, React.js, Next.js, Node.js, Express, MongoDB, Redux, Zustand, Tailwind CSS, GraphQL, SSR, AI (Anthropic Claude 101 Certified).
EDUCATION: MCA, B.Sc. IT
CHESS CHALLENGE: Challenge Satya to a chess game on Chess.com. If you beat him, you win ₹5,000! Strategy is his game.
PROJECTS: Bengal Tourism, Lupin Diagnostics, Nurse Report, American Murder Song.

Be concise, friendly, and helpful. Redirect off-topic questions.`;

export default portfolioData;
