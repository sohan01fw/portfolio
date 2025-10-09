// Skills.jsx

const skills = [
  // Frontend
  "HTML",
  "CSS",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux",
  "Zustand",
  "Tailwind CSS",
  "Bootstrap",
  "DaisyUI",
  "Shadcn UI",
  "NextUI",
  "Chakra UI",
  "Pusher",

  // Backend
  "Node.js",
  "Express.js",
  "RESTful APIs",
  "Strapi (CMS)",
  "Redis",
  "Socket.io",

  // Database
  "MongoDB",
  "Mongoose (ODM)",
  "Prisma (ORM)",
  "PostgreSQL",

  // Authentication
  "NextAuth",
  "Clerk",
  "JWT Auth",

  // Others / Tools
  "Git",
  "GitHub",
  "Open Source Contribution",
  "Firebase",
  "Supabase",
  "Docker",
];

const Skills = () => {
  return (
    <div className="mt-10 px-6 md:px-10 m-10 mb-20 pb-10  overflow-y-scroll">
      <h2 className="text-2xl font-semibold mb-5 text-teal-600 dark:text-teal-400">
        🧠 Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-full text-sm font-medium border border-teal-400
                       bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100
                       transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-teal-200 dark:hover:bg-teal-800 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
