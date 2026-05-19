import {
  createContext,
  useEffect,
  useState,
} from "react";

/* ================= CONTEXT ================= */

export const ThemeContext =
  createContext();

/* ================= PROVIDER ================= */

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] =
    useState(false);

  /* ================= LOAD SAVED THEME ================= */

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  /* ================= TOGGLE THEME ================= */

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  /* ================= UPDATE BODY CLASS ================= */

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");

      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");

      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;