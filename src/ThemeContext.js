import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const themes = ["light", "dark", "retro", "neon"];

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
