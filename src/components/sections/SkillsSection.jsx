import { skillGroups } from "../../lib/data";
import Badge from "../ui/Badge";

/**
 * SkillsSection — Notion-style grouped skills blocks.
 * Each group is rendered as a toggle-like labeled section.
 */
const SkillsSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-3">
        Skills
      </h2>

      <div className="space-y-4">
        {skillGroups.map((group) => (
          <div key={group.label}>
            {/* Group label */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm">{group.emoji}</span>
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                {group.label}
              </span>
              <span className="flex-1 border-t border-gray-100 dark:border-gray-800 ml-1" />
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 pl-6">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
