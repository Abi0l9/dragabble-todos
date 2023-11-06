import React from "react";
import { Icon } from "@iconify/react";
import moon from "@iconify/icons-mdi/star-crescent";
import useTheme from "../../hooks/useTheme";

const Toggler = () => {
  const { toggler } = useTheme();
  return (
    <div>
      <Icon
        onClick={toggler}
        className="cursor-pointer"
        icon={moon}
        width={24}
      />
    </div>
  );
};

export default Toggler;
