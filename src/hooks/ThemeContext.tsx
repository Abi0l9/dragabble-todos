import React, { ReactNode, createContext, useState } from "react";

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

  //   console.log(theme);
  const toggler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggler }}>
      {children}
    </ThemeContext.Provider>
  );
};
