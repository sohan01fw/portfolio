import { projects } from "../../lib/data";
import ProjectCard from "../ui/ProjectCard";

/**
 * ProjectsSection — Notion-style database/gallery view of projects.
 */
const ProjectsSection = () => {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600">
          Projects
        </h2>
        <span className="text-[10px] text-gray-400 dark:text-gray-600">
          {projects.length} items
        </span>
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
