import React from "react";
import Logo from "./Logo";
import Toggler from "./Toggler";
import Wrapper from "../Wrapper";

const Header = () => {
  return (
    <Wrapper>
      <div className="w-full flex flex-row justify-between items-center">
        <Logo />
        <Toggler />
      </div>
    </Wrapper>
  );
};

export default Header;
