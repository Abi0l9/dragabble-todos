import React from "react";
import { Icon } from "@iconify/react";
import moon from "@iconify/icons-mdi/moon-waning-crescent";
import sun from "@iconify/icons-mdi/white-balance-sunny";
import useTheme from "../../hooks/useTheme";

const Toggler = () => {
  const { theme, toggler } = useTheme();
  return (
    <div>
      <Icon
        onClick={toggler}
        className="cursor-pointer"
        icon={theme === "dark" ? sun : moon}
        width={24}
      />
    </div>
  );
};

export default Toggler;
