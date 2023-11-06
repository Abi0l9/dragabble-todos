import React from "react";
import Layout from "./Components/Layout";
import useTheme from "./hooks/useTheme";
import { ThemeProvider } from "./hooks/ThemeContext";

function App() {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <ThemeProvider>
      <div className={`${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
