import { useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import Sidebar from "./Sidebar";

/**
 * PageLayout — Main app shell.
 * Renders a fixed sidebar on desktop, a slide-in drawer on mobile.
 * Children = page content.
 */
const PageLayout = ({ isDark, onToggleTheme, children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* ── Desktop Sidebar ──────────────────────────────────── */}
      <div className="hidden md:flex md:flex-shrink-0 md:w-60 lg:w-64">
        <Sidebar isDark={isDark} onToggleTheme={onToggleTheme} />
      </div>

      {/* ── Mobile Drawer Overlay ─────────────────────────────── */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* ── Mobile Drawer ─────────────────────────────────────── */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 shadow-2xl transform transition-transform duration-200 ease-out md:hidden
          ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar
          isDark={isDark}
          onToggleTheme={onToggleTheme}
          onClose={() => setDrawerOpen(false)}
        />
      </div>

      {/* ── Main Content ──────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile top bar */}
        <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 md:hidden flex-shrink-0">
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Open menu"
          >
            <FiMenu className="w-5 h-5" />
          </button>

          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Sohan Shiwakoti
          </span>

          <button
            onClick={onToggleTheme}
            className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <FiSun className="w-4 h-4 text-yellow-400" />
            ) : (
              <FiMoon className="w-4 h-4" />
            )}
          </button>
        </header>

        {/* Scrollable page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageLayout;
