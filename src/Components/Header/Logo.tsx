import React from "react";
import useTheme from "../../hooks/useTheme";

const Logo = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`tracking-[.25em]  ${
        theme === "dark" && "text-gray-100"
      } text-2xl md:text-3xl`}
    >
      TODO
    </div>
  );
};

export default Logo;
