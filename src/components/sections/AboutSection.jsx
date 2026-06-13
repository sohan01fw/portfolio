import { profile } from "../../lib/data";

/**
 * AboutSection — Notion-style bio and education block.
 */
const AboutSection = () => {
  const { education } = profile;

  return (
    <section className="mb-8">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-3">
        About
      </h2>

      {/* Education callout */}
      <div className="rounded-md border border-gray-200 dark:border-gray-800 overflow-hidden">
        {/* Header row */}
        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center gap-2">
          <span className="text-base">🎓</span>
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
            {education.degree}
          </span>
        </div>

        {/* Content */}
        <div className="px-4 py-3 space-y-2 bg-white dark:bg-gray-950">
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <span className="font-medium text-gray-600 dark:text-gray-400">Institution</span>
            <span className="text-gray-300 dark:text-gray-700">·</span>
            <span>{education.college}</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed pt-1">
            {education.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
