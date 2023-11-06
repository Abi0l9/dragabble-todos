import React from "react";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Wrapper = ({ children }: Props) => {
  return (
    <div className="w-full max-h-[80%] overflow-y-auto md:w-2/4 mx-auto flex flex-col  px-3 ">
      {children}
    </div>
  );
};

export default Wrapper;
