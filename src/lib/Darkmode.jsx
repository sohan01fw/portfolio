// App.jsx
import { useEffect, useState } from "react";

function Darkmode() {
  // Set initial state based on localStorage or default to light mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply the theme class to the document element on load and on toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Toggle function for the button
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-teal-500 text-white rounded mb-6"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default Darkmode;
