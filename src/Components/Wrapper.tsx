import React from "react";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Wrapper = ({ children }: Props) => {
  return (
    <div className="w-full md:w-2/4 mx-auto flex flex-col  px-3 py-7">
      {children}
    </div>
  );
};

export default Wrapper;
