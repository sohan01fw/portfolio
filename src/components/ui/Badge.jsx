/**
 * Badge — Notion-style inline tag/badge chip.
 * @param {string} children - label text
 * @param {string} variant  - "default" | "muted"
 */
const Badge = ({ children, variant = "default" }) => {
  const base =
    "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium transition-colors duration-150";

  const variants = {
    default:
      "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700",
    muted:
      "bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-500 border border-gray-200 dark:border-gray-700",
  };

  return (
    <span className={`${base} ${variants[variant]}`}>{children}</span>
  );
};

export default Badge;
