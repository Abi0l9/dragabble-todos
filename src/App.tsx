import React from "react";
import Layout from "./Components/Layout";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white"
      } min-h-screen`}
    >
      <Layout />
    </div>
  );
}

export default App;
