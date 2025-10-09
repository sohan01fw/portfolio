// App.jsx
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Darkmode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div>
      <button
        onClick={toggleDarkMode}
        className="flex items-center gap-2 px-4 py-2  text-white rounded mb-6 transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-700"
      >
        {isDarkMode ? (
          <>
            <FaSun className="text-yellow-400" />
          </>
        ) : (
          <>
            <FaMoon className="text-gray-700 " />
          </>
        )}
      </button>
    </div>
  );
}

export default Darkmode;
