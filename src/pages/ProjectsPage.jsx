import ProjectsSection from "../components/sections/ProjectsSection";

/**
 * ProjectsPage — Notion-style page: Projects gallery/database view
 */
const ProjectsPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-10">
      {/* Notion page header */}
      <div className="mb-8">
        <div className="text-5xl mb-3 select-none">🚀</div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Projects
        </h1>
        <p className="text-sm text-gray-400 dark:text-gray-600 mt-1">
          Things I&apos;ve built — side projects, client work &amp; experiments
        </p>
      </div>

      <div className="border-t border-gray-100 dark:border-gray-800 mb-8" />

      <ProjectsSection />
    </div>
  );
};

export default ProjectsPage;
