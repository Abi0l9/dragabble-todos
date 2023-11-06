import { useState } from "react";

export type Theme = "dark" | "light";

const useTheme = () => {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  const toggleMode = () => {
    setIsDark(!isDark);

    setTheme(isDark ? "dark" : "light");
  };

  return {
    theme,
    toggler: toggleMode,
  };
};

export default useTheme;
