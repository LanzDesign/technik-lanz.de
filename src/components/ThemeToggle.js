import React, { useState, useEffect } from "react";
import "./ThemeToggle.css";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.body.classList.add("light-mode");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);

    if (isDarkMode) {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={
        isDarkMode ? "Zu hellem Modus wechseln" : "Zu dunklem Modus wechseln"
      }
      title={isDarkMode ? "Hell" : "Dunkel"}
    >
      {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default ThemeToggle;
