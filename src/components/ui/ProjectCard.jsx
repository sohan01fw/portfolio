import { Link } from "react-router-dom";
import Badge from "./Badge";

/**
 * ProjectCard — Notion-style project block card.
 * Shows image, title, tags, goal text, links, and a circular detail button.
 */
const ProjectCard = ({ project }) => {
  const { id, imgSrc, title, emoji, tags = [], goal, siteLink, codeLink } = project;

  return (
    <div className="group rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-md dark:hover:shadow-gray-900/60 transition-shadow duration-200">
      {/* Image */}
      {imgSrc && (
        <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 h-40">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        {/* Title row + circular detail button */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">{emoji}</span>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm leading-snug">
              {title}
            </h3>
          </div>

          {/* Circular "detail" button */}
          <Link
            to={`/projects/${id}`}
            title={`View ${title} details`}
            className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700
                       flex items-center justify-center
                       text-gray-400 dark:text-gray-500
                       hover:border-gray-900 dark:hover:border-gray-100
                       hover:text-gray-900 dark:hover:text-gray-100
                       hover:bg-gray-50 dark:hover:bg-gray-800
                       transition-all duration-150"
          >
            <svg
              className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        )}

        {/* Goal */}
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
          {goal}
        </p>

        {/* Links */}
        <div className="flex items-center gap-3 pt-1 border-t border-gray-100 dark:border-gray-800">
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150 flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              Source Code
            </a>
          )}
          {siteLink && (
            <a
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150 flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
