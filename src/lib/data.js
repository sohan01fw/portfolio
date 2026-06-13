import Ghumfir from "../assets/Ghumfir.png";
import job from "../assets/jobboardhome.png";

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
      "RESTful APIs", "GraphQL", "Strapi (CMS)", "Redis", "Socket.io",
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
    tags: ["Maps", "React", "Travel", "Planning"],
    goal: "Interactive map-based travel planning platform — explore destinations, create itineraries, manage budgets, and record journey notes.",
    siteLink:
      "https://photos.google.com/share/AF1QipMO832iExh3ZJsiVspECf8vWUjRB7Bs2-8c__7jH-s13hnv97OTYFCMl01y38Yk-w/photo/AF1QipNlRb5LRsZqa9rvqQHTU1SpMPQ0mNGumzaorMNU?key=ZHltZXFhbThYUUNjdmdDV0RqSjY3NXIxQmx2T19B",
    codeLink: "https://github.com/sohan01fw/Ghumfir",
    detail: {
      overview:
        "Ghumfir (meaning 'to roam' in Nepali) is an interactive travel planning web app. Users can explore map-based destinations, pin points of interest, build day-by-day itineraries, track budgets, and keep travel notes — all in one place.",
      problem:
        "Most travellers plan across three or four apps simultaneously — Google Maps for routes, Notion for itineraries, a spreadsheet for budgets. Ghumfir collapses this into a single, map-first interface purpose-built for travel.",
      architecture:
        "Single-page React app with a component-driven architecture. State is managed locally with React Context for shared trip data. The map is powered by the Leaflet.js library with OpenStreetMap tiles to avoid Google Maps API costs. User data is persisted in localStorage for the MVP, with a backend API planned for v2.",
      techStack: [
        { name: "React.js", reason: "Component reusability across map pins, itinerary blocks, and note cards" },
        { name: "Leaflet.js + OpenStreetMap", reason: "Free, open-source map tiles with full customisation" },
        { name: "React Context API", reason: "Lightweight global state for trip data without the overhead of Redux" },
        { name: "Tailwind CSS", reason: "Rapid responsive layout for side panels and map overlays" },
        { name: "LocalStorage", reason: "MVP data persistence without needing a backend" },
      ],
      challenges: [
        "Synchronising map state with the itinerary panel — solved by lifting pin state to a shared React Context.",
        "Leaflet.js conflicts with React's virtual DOM — required using refs carefully and lazy-loading the map component.",
        "Budget tracking with currency conversion required a third-party exchange rate API and careful debouncing of updates.",
      ],
      learnings:
        "This project taught me how to work with third-party map libraries inside React's rendering model, and how to think about offline-first design. The MVP-first approach (localStorage before a real backend) let me validate the UX quickly before investing in infrastructure.",
      status: "Demo",
      timeline: "2 months",
    },
  },
];

// ─── Nav Pages (Notion-style sidebar pages) ────────────────────────────────────
export const navPages = [
  { emoji: "🏠", label: "Home",     path: "/" },
  { emoji: "🚀", label: "Projects", path: "/projects" },
];
