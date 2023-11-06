import React from "react";
import Logo from "./Logo";
import Toggler from "./Toggler";
import Wrapper from "../Wrapper";

const Header = () => {
  return (
    <Wrapper>
      <div className="w-full text-gray-100 z-50 flex flex-row justify-between items-center py-10">
        <Logo />
        <Toggler />
      </div>
    </Wrapper>
  );
};

export default Header;
