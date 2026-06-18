import { experiences } from "../../lib/data";

/**
 * ExperienceSection — Notion-style professional experience list.
 */
const ExperienceSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-3">
        Experience
      </h2>

      <div className="space-y-4">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="rounded-md border border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            {/* Header row */}
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="text-base select-none">{exp.emoji || "💼"}</span>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {exp.role} <span className="text-gray-400 dark:text-gray-500 font-normal">at</span> {exp.company}
                </span>
              </div>
              {exp.subtitle && (
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                  {exp.subtitle}
                </span>
              )}
            </div>

            {/* Highlights */}
            <div className="px-4 py-3 bg-white dark:bg-gray-950">
              <ul className="list-disc pl-4 space-y-1.5 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
