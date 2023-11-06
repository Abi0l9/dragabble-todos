import React, { ReactNode, createContext } from "react";
import useTheme, { Theme } from "./useTheme";

type Props = {
  theme: Theme;
  toggler: () => void;
};

const defaultState: Props = {
  theme: "light",
  toggler: () => {},
};

const ThemeContext = createContext<Props>(defaultState);

type ProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ProviderProps) => {
  const { theme, toggler } = useTheme();
  return (
    <ThemeContext.Provider value={{ theme, toggler }}>
      {children}
    </ThemeContext.Provider>
  );
};
