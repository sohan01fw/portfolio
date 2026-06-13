import { Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon, FiExternalLink } from "react-icons/fi";
import { navPages, profile } from "../../lib/data";
import resumePDF from "../../assets/sohanlatestresume.pdf";

/**
 * Sidebar — Notion-style left sidebar.
 * Contains workspace header, page navigation, and theme toggle.
 */
const Sidebar = ({ isDark, onToggleTheme, onClose }) => {
  const location = useLocation();

  return (
    <aside className="flex flex-col h-full w-full bg-gray-50 dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800">
      {/* Workspace Header */}
      <div className="px-3 py-3 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-default transition-colors duration-100">
          <img
            src={profile.avatar}
            alt="avatar"
            className="w-5 h-5 rounded-sm object-cover flex-shrink-0"
          />
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
            {profile.name}
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-0.5">
        {/* Section label */}
        <p className="px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600 select-none">
          Pages
        </p>

        {navPages.map((page) => {
          const isActive = location.pathname === page.path;
          return (
            <Link
              key={page.path}
              to={page.path}
              onClick={onClose}
              className={`sidebar-item ${isActive ? "active" : ""}`}
            >
              <span className="text-base leading-none">{page.emoji}</span>
              <span>{page.label}</span>
            </Link>
          );
        })}

        <div className="notion-divider" />

        {/* Social quick links */}
        <p className="px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600 select-none">
          Links
        </p>

        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-item"
        >
          <span className="text-base leading-none">💻</span>
          <span>GitHub</span>
          <FiExternalLink className="ml-auto w-3 h-3 opacity-40" />
        </a>
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-item"
        >
          <span className="text-base leading-none">🔗</span>
          <span>LinkedIn</span>
          <FiExternalLink className="ml-auto w-3 h-3 opacity-40" />
        </a>
        <a
          href={profile.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-item"
        >
          <span className="text-base leading-none">🐦</span>
          <span>Twitter / X</span>
          <FiExternalLink className="ml-auto w-3 h-3 opacity-40" />
        </a>
      </nav>

      {/* Bottom: Resume + Theme Toggle */}
      <div className="px-2 py-3 border-t border-gray-200 dark:border-gray-800 space-y-1">
        <a
          href={resumePDF}
          download="Sohan_Shiwakoti_Resume.pdf"
          className="sidebar-item"
        >
          <span className="text-base leading-none">📄</span>
          <span>Resume</span>
        </a>

        <button
          onClick={onToggleTheme}
          className="sidebar-item w-full text-left"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <>
              <FiSun className="w-4 h-4 text-yellow-400" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <FiMoon className="w-4 h-4" />
              <span>Dark Mode</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
