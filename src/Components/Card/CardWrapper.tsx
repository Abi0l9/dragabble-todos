import React from "react";

type Prop = {
  children: JSX.Element[] | JSX.Element;
};

const CardWrapper = ({ children }: Prop) => {
  return <div className="w-full flex flex-col gap-y-1 mt-8">{children}</div>;
};

export default CardWrapper;
