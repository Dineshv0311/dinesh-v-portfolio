import {
  NavItem,
  StatItem,
  SkillCategory,
  ProjectItem,
  ServiceItem,
  WhyHireItem,
  TestimonialItem,
  ContactInfo,
  SocialLink,
} from "./types";

export const personalDetails = {
  name: "Dinesh V",
  monogram: "DV",
  tagline: "Full-Stack Web Developer & AI Solutions Developer",
  location: "Chennai, India",
  college: "VIT Chennai",
  specialization: "AI & Robotics",
  availabilityText: "Available for Freelance Projects",
  headline: "I Build Websites That Win Clients",
  subHeadline:
    "From idea to deployed product — clean code, fast delivery, real results.",
  bio: "I'm Dinesh V, a CS undergrad at VIT Chennai specializing in AI & Robotics. I build full-stack web apps, AI-powered tools, and handle cloud deployments end-to-end. I've shipped real products — not just tutorials. Every line I write is clean, documented, and built to scale.",
  typingRoles: [
    "Full-Stack Developer",
    "AI Solutions Builder",
    "DevOps Engineer",
    "Freelance Web Developer",
  ],
  resumeLink: "#contact",
};

export const navItems: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Why Me", href: "#why-me" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const statsData: StatItem[] = [
  {
    id: "projects",
    value: 5,
    suffix: "+",
    label: "Projects Shipped",
    description: "Production-ready web & AI apps delivered",
  },
  {
    id: "internships",
    value: 2,
    suffix: "",
    label: "Internships",
    description: "Hands-on engineering industry experience",
  },
  {
    id: "domains",
    value: 3,
    suffix: "+",
    label: "Tech Domains",
    description: "Full-stack web, Generative AI, Cloud DevOps",
  },
  {
    id: "focus",
    value: 100,
    suffix: "%",
    label: "Client Focus",
    description: "On-time delivery, clear daily communication",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    description: "Crafting lightning-fast, pixel-perfect, accessible user interfaces",
    skills: [
      { name: "React", level: 92, iconName: "SiReact", featured: true },
      { name: "Next.js", level: 90, iconName: "SiNextdotjs", featured: true },
      { name: "TypeScript", level: 88, iconName: "SiTypescript", featured: true },
      { name: "Tailwind CSS", level: 95, iconName: "SiTailwindcss", featured: true },
      { name: "HTML5", level: 98, iconName: "SiHtml5" },
      { name: "CSS3", level: 92, iconName: "SiCss" },
    ],
  },
  {
    category: "Backend",
    description: "Architecting secure, scalable microservices and RESTful backends",
    skills: [
      { name: "Node.js", level: 88, iconName: "SiNodedotjs", featured: true },
      { name: "Express", level: 86, iconName: "SiExpress" },
      { name: "Python", level: 92, iconName: "SiPython", featured: true },
      { name: "Flask", level: 85, iconName: "SiFlask" },
      { name: "REST APIs", level: 94, iconName: "TbApi", featured: true },
    ],
  },
  {
    category: "AI & ML",
    description: "Leveraging state-of-the-art LLMs, automation agents & robotics sim",
    skills: [
      { name: "Gemini API", level: 94, iconName: "SiGooglegemini", featured: true },
      { name: "OpenAI API", level: 90, iconName: "RiOpenaiFill", featured: true },
      { name: "LangChain", level: 82, iconName: "TbBrain" },
      { name: "MuJoCo", level: 80, iconName: "TbRobot" },
    ],
  },
  {
    category: "DevOps & Cloud",
    description: "Continuous delivery, containerization, and VPS server configuration",
    skills: [
      { name: "Docker", level: 84, iconName: "SiDocker", featured: true },
      { name: "GitHub Actions", level: 85, iconName: "SiGithubactions" },
      { name: "Linux VPS", level: 88, iconName: "SiLinux", featured: true },
      { name: "Nginx", level: 82, iconName: "SiNginx" },
      { name: "Vercel", level: 95, iconName: "SiVercel" },
      { name: "Render", level: 90, iconName: "SiRender" },
      { name: "Railway", level: 88, iconName: "SiRailway" },
    ],
  },
  {
    category: "Databases",
    description: "High-performance relational and NoSQL storage pipelines",
    skills: [
      { name: "PostgreSQL", level: 88, iconName: "SiPostgresql", featured: true },
      { name: "Supabase", level: 90, iconName: "SiSupabase", featured: true },
      { name: "MongoDB", level: 84, iconName: "SiMongodb" },
      { name: "MySQL", level: 85, iconName: "SiMysql" },
    ],
  },
  {
    category: "Tools & Workflow",
    description: "Productivity, version control, API testing, and interface design",
    skills: [
      { name: "Git", level: 92, iconName: "SiGit" },
      { name: "GitHub", level: 94, iconName: "SiGithub", featured: true },
      { name: "Postman", level: 90, iconName: "SiPostman" },
      { name: "Figma", level: 82, iconName: "SiFigma" },
      { name: "VS Code", level: 96, iconName: "TbBrandVscode" },
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "edubot-platform",
    title: "EduBot Cloud-Native Platform",
    tagline: "Enterprise Multi-Tenant Assessment & Training Portal",
    description:
      "Full-scale cloud-native company portal built for educational institutes and corporate training. Features real-time assessment engines, granular skill analytics dashboards, automated scoring, role-based access control, and decoupled microservices deployed on AWS with CI/CD.",
    categories: ["Company Websites", "Full-Stack SaaS"],
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
    image: "/images/projects/edubot.webp",
    metrics: "AWS Cloud Native • 99.9% Uptime",
    githubUrl: "https://github.com/Dineshv0311/EduBot",
    liveUrl: "https://github.com/Dineshv0311/EduBot",
    featured: true,
    highlights: [
      "Decoupled enterprise portal containerized with multi-stage Docker builds",
      "Full AWS deployment leveraging EC2, S3, RDS, and automated GitHub Actions CI/CD",
      "Robust PostgreSQL schema design handling high-volume user traffic and test runs",
    ],
  },
  {
    id: "cryptotransfer-ecommerce",
    title: "CryptoTransfer Digital Checkout",
    tagline: "Frictionless Web3 E-Commerce Payment Gateway",
    description:
      "Next-generation digital transaction dApp enabling online businesses and e-commerce stores to accept borderless cryptocurrency payments. Features 1-click MetaMask wallet connection, smart contract transaction authorization, and real-time ledger verification.",
    categories: ["E-Commerce & Payments"],
    tags: ["React", "Solidity", "Ethers.js", "Tailwind CSS", "Web3"],
    image: "/images/projects/cryptotransfer.webp",
    metrics: "Instant Checkout & Verified Receipts",
    githubUrl: "https://github.com/Dineshv0311/Web3.0-CryptoTransfer",
    liveUrl: "https://github.com/Dineshv0311/Web3.0-CryptoTransfer",
    featured: true,
    highlights: [
      "Seamless customer checkout experience with zero third-party payment gateway fees",
      "Smart contract-powered transaction verification with automated receipt generation",
      "Mobile-optimized responsive payment modal designed for high checkout conversions",
    ],
  },
  {
    id: "livesync-chat",
    title: "LiveSync Customer Portal",
    tagline: "Real-Time Client Communication & Support System",
    description:
      "Enterprise customer messaging and support application built for real-time collaboration. Features instantaneous bi-directional WebSocket messaging, JWT secure authentication, online presence tracking, and clean modern interface built for SaaS and company websites.",
    categories: ["Company Websites", "Full-Stack SaaS"],
    tags: ["React", "Vite", "Node.js", "Express", "WebSockets", "JWT"],
    image: "/images/projects/livesync.webp",
    metrics: "<50ms Message Latency • Real-Time",
    githubUrl: "https://github.com/Dineshv0311/Websocket-based-ChatApp",
    liveUrl: "https://github.com/Dineshv0311/Websocket-based-ChatApp",
    featured: true,
    highlights: [
      "Sub-50ms instantaneous client communication using native WebSocket protocols",
      "Secure JWT cookie-based session management and authenticated API endpoints",
      "Designed as a plug-and-play live support widget for customer-facing websites",
    ],
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: "fullstack-dev",
    title: "Full-Stack Web Development",
    description:
      "Complete web applications built from scratch — modern React/Next.js frontend, scalable Node/Python backend, rock-solid database schema, and live deployment.",
    startingPrice: 50,
    iconName: "Globe",
    popular: true,
    features: [
      "Custom UI design with Tailwind CSS & responsive layouts",
      "Robust REST or GraphQL API backend",
      "Database schema design (PostgreSQL/Supabase/MongoDB)",
      "Authentication, security, and payment readiness",
      "Full source code & setup documentation",
    ],
    deliveryTime: "3-7 Days",
  },
  {
    id: "ai-integration",
    title: "AI Integration & Agents",
    description:
      "Infuse your app with intelligence: custom AI chatbots, Gemini & OpenAI API integrations, smart search, automated summarization, or agent workflows.",
    startingPrice: 40,
    iconName: "Bot",
    popular: true,
    features: [
      "Google Gemini & OpenAI GPT model integration",
      "Streaming chat UI with markdown & code styling",
      "Prompt engineering & context guardrails",
      "Document ingestion and semantic retrieval",
      "Cost-optimized token handling & rate limiting",
    ],
    deliveryTime: "2-4 Days",
  },
  {
    id: "cloud-devops",
    title: "Cloud Deployment & DevOps",
    description:
      "Take your project from localhost to a secure production URL on VPS (Ubuntu/Nginx), Render, Railway, or Vercel with automated CI/CD and custom domains.",
    startingPrice: 30,
    iconName: "Cloud",
    features: [
      "Docker containerization & multi-stage builds",
      "Linux VPS setup: Nginx reverse proxy, SSL certs",
      "GitHub Actions automated CI/CD pipelines",
      "Environment secrets and DNS configuration",
      "Zero-downtime deployment setup",
    ],
    deliveryTime: "1-2 Days",
  },
  {
    id: "responsive-design",
    title: "Responsive Website Design",
    description:
      "Transform your Figma design or ideas into blazing fast, mobile-first websites with smooth animations, dark mode, and high conversion landing pages.",
    startingPrice: 35,
    iconName: "Palette",
    features: [
      "Pixel-perfect implementation of Figma / sketches",
      "Smooth Framer Motion micro-interactions",
      "Mobile, tablet, and widescreen tested",
      "Dark mode & light mode toggle included",
      "Lighthouse 90+ performance & accessibility",
    ],
    deliveryTime: "2-4 Days",
  },
  {
    id: "api-development",
    title: "REST API Development",
    description:
      "Build fast, secure, well-documented backend APIs using Node.js/Express or Python/Flask, tailored for web platforms or mobile backends.",
    startingPrice: 40,
    iconName: "Cpu",
    features: [
      "Clean RESTful endpoints with input validation",
      "JWT / OAuth authentication & role permissions",
      "Database ORM / raw queries optimization",
      "Postman collection & OpenAPI/Swagger docs",
      "Error handling & logging architecture",
    ],
    deliveryTime: "2-5 Days",
  },
  {
    id: "code-review",
    title: "Bug Fixing & Code Review",
    description:
      "Stuck on a tricky bug or slow performance? I will debug your code, fix errors, refactor spaghetti structure, and provide a clear explanation.",
    startingPrice: 20,
    iconName: "Wrench",
    features: [
      "Rapid bug diagnosis & fix verification",
      "Performance profiling and load time optimization",
      "Code refactoring for maintainability & types",
      "Comprehensive diff report explaining changes",
      "Follow-up support to verify fixes in production",
    ],
    deliveryTime: "Within 24 Hours",
  },
];

export const whyHireMeData: WhyHireItem[] = [
  {
    id: "fast-delivery",
    title: "Fast Delivery",
    description:
      "I respect deadlines with strict discipline. You get early milestones, fast turnarounds, and no last-minute surprises.",
    iconName: "Zap",
    highlight: "Strict Deadlines Honored",
  },
  {
    id: "clean-code",
    title: "Clean Code",
    description:
      "Every line is TypeScript-typed, modular, readable, and thoroughly commented. Built so any developer can pick it up effortlessly.",
    iconName: "Code2",
    highlight: "Zero Technical Debt",
  },
  {
    id: "clear-comm",
    title: "Clear Communication",
    description:
      "Daily asynchronous updates, video walkthroughs, and prompt replies. You will always know what is completed and what comes next.",
    iconName: "MessageSquare",
    highlight: "Zero Ghosting Guarantee",
  },
  {
    id: "free-revisions",
    title: "Free Revisions",
    description:
      "I don't call a job finished until you are 100% satisfied. Iterations and polish are built right into the project collaboration.",
    iconName: "RotateCcw",
    highlight: "100% Satisfaction Focused",
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    name: "Alex Vance",
    role: "Founder & Product Lead",
    company: "SaaS Studio",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    content:
      "Dinesh delivered our Next.js dashboard ahead of schedule. His understanding of Gemini AI integration made our product 10x better than our initial spec. Truly a rare breed of developer who gets both design and backend.",
    rating: 5,
    projectWorkedOn: "AI Dashboard & Web App",
  },
  {
    id: "2",
    name: "Rohit Krishnan",
    role: "Tech Lead",
    company: "DevSprint Labs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    content:
      "Dinesh helped us containerize our multi-service application with Docker and set up automated Nginx reverse proxy on our VPS. The deployment went without a hitch. Extremely clean work and clear instructions.",
    rating: 5,
    projectWorkedOn: "Cloud VPS & Docker Pipeline",
  },
  {
    id: "3",
    name: "Sarah Jenkins",
    role: "Operations Director",
    company: "Apex Media",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    content:
      "Communication was phenomenal. Daily Loom demos, immediate bug fixes, and transparent pricing. The UI animations he added gave our client site an Apple-grade feel. Will definitely hire him again!",
    rating: 5,
    projectWorkedOn: "Full-Stack Landing Platform",
  },
];

export const contactInfo: ContactInfo = {
  email: "dineshv.public@gmail.com",
  linkedin: "https://www.linkedin.com/in/dinesh-v-486367289",
  github: "https://github.com/Dineshv0311",
  location: "Chennai, India",
  availability: "Available for new projects",
  responseRate: "Replies within 2 hours",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Dineshv0311",
    iconName: "SiGithub",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dinesh-v-486367289",
    iconName: "SiLinkedin",
  },
  {
    name: "Email",
    url: "mailto:dineshv.public@gmail.com",
    iconName: "SiGmail",
  },
];

export const projectTypes = [
  "Full-Stack Web Application",
  "AI Tool / LLM Integration",
  "Cloud Deployment & DevOps",
  "Landing Page & UI Design",
  "Backend REST API",
  "Bug Fix / Code Optimization",
  "Other Custom Project",
];

export const budgetRanges = [
  "Under $50",
  "$50 - $150",
  "$150 - $300",
  "$300 - $600",
  "$600+",
];
