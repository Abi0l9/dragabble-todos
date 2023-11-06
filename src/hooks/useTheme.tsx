import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const useTheme = () => {
  const { theme, toggler } = useContext(ThemeContext);

  return {
    theme,
    toggler,
  };
};

export default useTheme;
