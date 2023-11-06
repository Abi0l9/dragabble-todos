import React, { ReactNode, createContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type Props = {
  theme: Theme;
  toggler: () => void;
};

const defaultState: Props = {
  theme: "light",
  toggler: () => {},
};

export const ThemeContext = createContext<Props>(defaultState);

type ProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggler = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    setTheme(savedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggler }}>
      {children}
    </ThemeContext.Provider>
  );
};
