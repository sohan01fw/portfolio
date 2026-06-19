import Ghumfir from "../assets/Ghumfir.png";
import job from "../assets/jobboardhome.png";
import shortly from "../assets/shortly.png";

// ─── Personal Info ─────────────────────────────────────────────────────────────
export const profile = {
  name: "Sohan Shiwakoti",
  handle: "cwact",
  avatar: "https://avatars.githubusercontent.com/u/121301775?v=4",
  location: "Itahari, Sunsari · Nepal",
  email: "sohancwactfw@gmail.com",
  title: "Full-Stack Web Developer",
  bio: "👋 Creative Web Developer with a passion for crafting user-friendly digital experiences. I thrive on solving complex problems with clean, efficient code and love building solutions that make life easier. Always learning, always innovating.",
  education: {
    degree: "BSc. Computer Science & Information Technology",
    college: "Sushma Godawari College, Itahari",
    description:
      "A rigorous program focused on programming, algorithms, database management, and software engineering — blending technical skills with practical project experience.",
  },
  social: {
    github: "https://github.com/sohan01fw",
    twitter: "https://x.com/sohan064",
    linkedin: "https://www.linkedin.com/in/sohan-shiwakoti-1497072a4/",
  },
  resume: "/src/assets/sohanlatestresume.pdf",
};

// ─── Skills ────────────────────────────────────────────────────────────────────
export const skillGroups = [
  {
    label: "Frontend",
    emoji: "🎨",
    skills: [
      "HTML", "CSS", "JavaScript (ES6+)", "TypeScript",
      "React.js", "Next.js", "Redux", "Zustand",
      "Tailwind CSS", "Bootstrap", "DaisyUI", "Shadcn UI",
    ],
  },
  {
    label: "Backend",
    emoji: "⚙️",
    skills: [
      "Node.js", "Express.js", "NestJS", "FastAPI", "Python",
      "RESTful APIs", "Strapi (CMS)", "Redis", "Socket.io",
    ],
  },
  {
    label: "Database & ORMs",
    emoji: "🗄️",
    skills: [
      "MongoDB", "Mongoose (ODM)", "Prisma (ORM)", "Drizzle ORM", "PostgreSQL",
    ],
  },
  {
    label: "DevOps & Monitoring",
    emoji: "📊",
    skills: [
      "Grafana", "Prometheus", "Docker", "Git", "GitHub",
    ],
  },
  {
    label: "Cloud & Auth",
    emoji: "🔐",
    skills: [
      "NextAuth", "Clerk", "JWT Auth", "Firebase", "Supabase",
    ],
  },
];

// ─── Projects ──────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: "shortly",
    imgSrc: shortly,
    title: "Shortly",
    emoji: "🔗",
    tags: ["React", "Bun", "PostgreSQL", "Redis"],
    goal: "Production-minded URL shortener with Redis caching, Nginx gateway, Prometheus + Grafana monitoring, and k6 load testing — built like a real service, not just a demo.",
    codeLink: "https://github.com/sohan01fw/shortly",
    detail: {
      overview:
        "Shortly turns long, messy links into clean short URLs with a React frontend, a Bun/Express backend, PostgreSQL persistence, Redis redirect caching, Nginx gateway routing, and a full Prometheus + Grafana monitoring stack. URL creation and redirect traffic run as separate backend processes, redirects are optimized through Redis, migrations run automatically before startup, and k6 load tests validate the system under traffic.",
      problem:
        "Long URLs are hard to share, easy to break, and not friendly for social posts, resumes, campaigns, QR codes, or messaging. Shortly solves that by creating short, stable, shareable links while keeping the backend ready for operational concerns such as reliability, caching, metrics, and load testing.",
      architecture:
        "The React UI communicates through an Nginx gateway on port 5000. Internally, a Creation Server (port 5001) handles POST /urls with PostgreSQL writes and Redis cache warming, while a Redirect Server (port 5002) handles short-code lookups with Redis cache hits falling back to PostgreSQL. This separation mirrors how high-traffic URL shorteners are scaled: creation is write-heavy, redirects are read-heavy and cache-friendly.",
      techStack: [
        { name: "React 19 + Vite 8", reason: "Modern frontend with TypeScript and Tailwind CSS 4 for rapid UI development" },
        { name: "TanStack React Query + Axios", reason: "Declarative data fetching with caching and mutation support" },
        { name: "Bun + Express 5", reason: "Fast runtime with TypeScript backend and lightweight API framework" },
        { name: "PostgreSQL 17", reason: "Reliable relational persistence for URL mappings and metadata" },
        { name: "Redis 8", reason: "High-speed redirect caching and negative cache for missing short codes" },
        { name: "Nginx", reason: "Gateway routing that separates creation and redirect traffic" },
        { name: "Prometheus + Grafana", reason: "Full observability stack with metrics, dashboards, and alerting" },
        { name: "Grafana k6", reason: "Load testing to validate performance under traffic" },
        { name: "Docker Compose", reason: "One-command local infrastructure for all services" },
      ],
      challenges: [
        "Designing concurrency-safe short-code generation to avoid collisions under parallel write traffic.",
        "Implementing a dual-cache strategy: warming Redis on creation and adding negative caching for missing codes to reduce unnecessary database hits.",
        "Separating creation and redirect into independent servers behind Nginx while keeping the system simple to run locally via Docker Compose.",
      ],
      optimizations: {
        highlights: "Nginx upstream keepalive, DB pool size, removing redundant database SELECT queries, and Redis redirect caching.",
        list: [
          {
            title: "Nginx Connection Limits",
            desc: "Increased worker_connections from 512 to 4096, bumped open file limits from 1024 to 8192, and enabled worker_processes auto to utilize all CPU cores."
          },
          {
            title: "Nginx Upstream Keepalive",
            desc: "Prevented Nginx from opening a new TCP connection to the backend processes on every incoming request by configuring keepalive connection reuse."
          },
          {
            title: "Database Connection Pool",
            desc: "Scaled up the DB pool size from 10 to 30, resolving write bottlenecks during concurrent 1000 VU stress tests."
          },
          {
            title: "Query Optimization",
            desc: "Removed the redundant SELECT query before URL INSERTs, allowing PostgreSQL to handle uniqueness constraints directly and safely."
          },
          {
            title: "Schema Cleanup",
            desc: "Removed unused URL IDs, sequences, and secondary indexes to minimize page write overhead."
          },
          {
            title: "Redis Cache Optimization",
            desc: "Warmed Redis cache instantly on URL creation and implemented negative caching for missing codes to protect the DB from query flooding."
          }
        ]
      },
      learnings:
        "Shortly deepened my understanding of service decomposition, cache-aware redirect design, structured error responses, and measurable performance validation. Building the full monitoring stack (Prometheus + Grafana) and running k6 load tests taught me how to think about production readiness beyond basic CRUD.",
      loadTestResults: {
        title: "Production Load Test Performance & Scaling",
        description: "Scenarios run locally via k6 load-testing scripts against the Docker Compose stack (tested June 18, 2026).",
        scenarios: [
          { path: "URL creation (POST /urls)", result: "1000 VUs · 763 req/sec · 109ms p95 · 0% failures", meaning: "Handles heavy write traffic well locally" },
          { path: "Hot redirect (GET /:code)", result: "1000 VUs · 788 req/sec · 3.46ms p95 · 0% failures", meaning: "Redis cache path is extremely strong" },
          { path: "500 VU redirect", result: "400 req/sec · 3.39ms p95 · 0% failures", meaning: "Scaling from 500 to 1000 VUs barely changes latency" }
        ],
        dailyProjections: [
          { metric: "Redirect Capacity (GET)", value: "68 Million Requests / Day", calculation: "788 req/sec × 86,400 sec/day" },
          { metric: "Creation Capacity (POST)", value: "66 Million Requests / Day", calculation: "763 req/sec × 86,400 sec/day" }
        ],
        claim: "This application is locally proven to handle 1,000 concurrent virtual users with around 750-800 requests/second on both creation and hot-cache redirect paths."
      },
      status: "Live",
      timeline: "1 month",
    },
  },
  {
    id: "job-board",
    imgSrc: job,
    title: "Job Board",
    emoji: "💼",
    tags: ["AI", "React", "Node.js", "PostgreSQL"],
    goal: "AI-powered job board with intelligent recruiter-applicant matching, AI-assisted job posting, and social media-style engagement.",
    siteLink: "https://job-board-all.vercel.app/",
    codeLink: "https://github.com/sohan01fw/job-board",
    detail: {
      overview:
        "A full-stack AI-powered job board that reimagines how recruiters and candidates connect. The platform uses AI for intelligent job-candidate matching, AI-assisted posting creation, and a social feed to boost visibility.",
      problem:
        "Traditional job boards are passive — candidates upload CVs and hope. There's no intelligent matching, no engagement layer, and no feedback loop. I wanted to build something that actively surfaces the right opportunities to the right people.",
      architecture:
        "The app follows a client-server architecture with a Next.js frontend (App Router) and a Node.js/Express API backend. AI features are powered by the OpenAI API, injected at the API layer so the frontend stays clean. PostgreSQL (via Prisma) handles structured data, and Redis caches AI results to reduce latency and API costs. Auth is handled by Clerk for session management and social login.",
      techStack: [
        { name: "Next.js (App Router)", reason: "SSR + file-based routing for fast page loads and SEO" },
        { name: "Node.js + Express", reason: "Lightweight REST API with middleware flexibility" },
        { name: "PostgreSQL + Prisma", reason: "Relational data model for jobs, users, and applications" },
        { name: "OpenAI API", reason: "AI-assisted job description generation and semantic matching" },
        { name: "Redis", reason: "Cache AI responses to reduce repeated API calls" },
        { name: "Clerk", reason: "Plug-and-play auth with Google/GitHub OAuth out of the box" },
        { name: "Tailwind CSS", reason: "Rapid UI development with consistent design tokens" },
        { name: "Vercel", reason: "Zero-config deployment for Next.js with edge functions" },
      ],
      challenges: [
        "Designing the AI matching algorithm to be accurate without hallucinating — solved by using structured prompts with strict JSON output schemas.",
        "Handling rate limits on the OpenAI API under concurrent user load — mitigated with Redis caching and request queuing.",
        "Building a social feed that feels real-time without WebSockets — used polling with SWR for now, with Socket.io planned for v2.",
      ],
      learnings:
        "This project deepened my understanding of AI integration patterns — specifically prompt engineering, output validation, and cost-efficient caching strategies. I also learned how important schema design is early in the project, as changing the Prisma schema mid-build caused several painful migrations.",
      status: "Live",
      timeline: "3 months",
    },
  },
  {
    id: "ghumfir",
    imgSrc: Ghumfir,
    title: "Ghumfir",
    emoji: "🗺️",
    tags: ["React", "Chakra UI", "Node.js", "MongoDB"],
    goal: "Smart travel itinerary web app that helps users plan trips, manage budgets, add destinations with Google Maps, and take notes — all in one place.",
    siteLink:
      "https://photos.google.com/share/AF1QipMO832iExh3ZJsiVspECf8vWUjRB7Bs2-8c__7jH-s13hnv97OTYFCMl01y38Yk-w/photo/AF1QipNlRb5LRsZqa9rvqQHTU1SpMPQ0mNGumzaorMNU?key=ZHltZXFhbThYUUNjdmdDV0RqSjY3NXIxQmx2T19B",
    codeLink: "https://github.com/sohan01fw/Ghumfir",
    detail: {
      overview:
        "Ghumfir is a smart travel itinerary web app designed to make trip planning simple, organized, and fun. It provides features like Google Maps location search, daily route itineraries, budget/expense tracking, notes/reminders, and secure user authentication.",
      problem:
        "Planning a trip often requires juggling multiple separate tools: Google Maps for directions, notepad apps for itineraries, and spreadsheets for budget tracking. Ghumfir consolidates these tasks into a single platform, eliminating the friction of switching between apps.",
      architecture:
        "A full-stack application featuring a React.js client built with Vite and Chakra UI, and a Node.js/Express.js backend written in TypeScript. The backend interfaces with MongoDB via Mongoose and secures sessions using express-session and MongoDB store, alongside JWT/bcrypt authentication.",
      techStack: [
        { name: "React.js + Vite", reason: "Modern, fast frontend tooling and component-driven UI rendering" },
        { name: "Google Maps API", reason: "Search, autocomplete, and display travel destinations interactively" },
        { name: "Chakra UI", reason: "Component library for building responsive and accessible layouts" },
        { name: "Node.js + Express.js", reason: "Lightweight and robust backend server environment" },
        { name: "TypeScript", reason: "Static typing for scalable and reliable server-side code" },
        { name: "MongoDB + Mongoose", reason: "NoSQL database and schema modeling for flexible itinerary structure" },
        { name: "JWT & bcrypt", reason: "Secure token-based authentication and password hashing" },
        { name: "Express-session & MongoDB Store", reason: "Secure, persistent session management" },
        { name: "Framer Motion", reason: "Smooth animations and transition effects" },
      ],
      challenges: [
        "Integrating Google Maps API to search and pin destinations while ensuring smooth rendering.",
        "Managing user session state securely across both cookie-based sessions and JWTs.",
        "Designing a responsive budget tracking interface with real-time expense calculations using Chakra UI.",
      ],
      learnings:
        "Building Ghumfir reinforced my understanding of full-stack TypeScript/Node.js development and NoSQL schema design for complex, nested data like travel itineraries. I also gained practical experience with secure session storage and integrating the Google Maps API.",
      status: "Demo",
      timeline: "2 months",
    },
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    role: "Fullstack Developer",
    company: "Wove",
    subtitle: "A Relationship Intelligence Software",
    duration: "1 month (Ongoing)",
    type: "Contract",
    emoji: "💼",
    highlights: [
      "Built full-stack product flows for Wove’s relationship intelligence app, including contacts, Gmail sync status, dashboard recommendations, and contact detail pages.",
      "Integrated frontend screens with NestJS APIs for CRIS relationship scores, CRIL contact memory, follow-up context, and email timelines.",
      "Contributed lightly to the Python pipeline side that processes Gmail data into relationship scores, recommendations, and warm-intro intelligence."
    ]
  },
  {
    role: "Frontend Developer",
    company: "Socially",
    subtitle: "Social Media Management Platform",
    duration: "2 months",
    type: "Contract",
    emoji: "📱",
    highlights: [
      "Worked on Next.js for the client-side landing page and React.js (React Query, Axios) for the core functional app, focusing on performance optimization.",
      "Built complex calendar and posting features, improving interactivity and user experience."
    ]
  },
  {
    role: "Backend Intern",
    company: "Maanche",
    duration: "1 month",
    emoji: "⚙️",
    highlights: [
      "Used Express.js, Postman, and REST APIs for backend authentication and integration tasks.",
      "Assisted in developing secure authentication workflows and API endpoints for internal systems."
    ]
  }
];

// ─── Nav Pages (Notion-style sidebar pages) ────────────────────────────────────
export const navPages = [
  { emoji: "🏠", label: "Home",     path: "/" },
  { emoji: "🚀", label: "Projects", path: "/projects" },
];
