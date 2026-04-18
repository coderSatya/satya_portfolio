// utils/data.js — Central knowledge base for portfolio and chatbot

export const portfolioData = {
  personal: {
    name: "Satya Prakash",
    role: "AI-Integrated Frontend Developer",
    experience: "4+ Years",
    location: "Kolkata, India",
    phone: "+91-8506056814",
    email: "sprakash6233@gmail.com",
    github: "https://github.com/coderSatya",
    linkedin: "https://linkedin.com/in/satya-prakash-sp",
    tagline: "Building Scalable Web Apps with React, Next.js & AI",
    summary:
      "Frontend Developer with 4+ years of experience building scalable, SEO-optimized, high-performance web applications using React.js and Next.js. Improved page load speed by 40% and user engagement by 25%. Strong in SSR, SSG, APIs, and AI-assisted development.",
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
      name: "Bengal – Soulfully Yours",
      url: "https://soulfulbengal.com/",
      tech: ["Next.js", "Drupal", "SSR"],
      description:
        "Tourism platform with SEO optimization and AI-driven content modules.",
    },
    {
      name: "Lupin Diagnostics",
      url: "https://www.lupindiagnostics.com/",
      tech: ["React", "GraphQL"],
      description:
        "Medical booking system with filtering, scheduling, and API integration.",
    },
    {
      name: "Nurse Report",
      url: "https://nurse.report/",
      tech: ["React", "Redux", "React Query"],
      description:
        "Healthcare hiring platform with 8000+ hospital data and dashboards.",
    },
    {
      name: "American Murder Song",
      tech: ["Next.js", "PayPal"],
      description:
        "E-commerce platform with payment integration and optimized performance.",
    },
  ],
};

export const chatbotSystemPrompt = `You are Satya's personal AI assistant on his developer portfolio. Answer questions about Satya based on this context:
NAME: Satya Prakash
ROLE: AI-Integrated Frontend Developer
PHONE: +91-8506056814
EMAIL: sprakash6233@gmail.com
EXPERIENCE: 4+ Years (Indus Net, Webskitters, Jai Infoway, CodeClouds)
SKILLS: React.js, Next.js, Redux, Zustand, Tailwind CSS, GraphQL, SSR, AI (ChatGPT, Copilot).
EDUCATION: MCA, B.Sc. IT
PROJECTS: Bengal Tourism, Lupin Diagnostics, Nurse Report, American Murder Song.

Be concise, friendly, and helpful. Redirect off-topic questions.`;

export default portfolioData;
