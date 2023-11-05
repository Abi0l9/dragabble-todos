import React from "react";

type Prop = {
  children: JSX.Element[] | JSX.Element;
  ref: (element: HTMLElement | null) => void;
};

const CardWrapper = ({ children, ref }: Prop) => {
  return (
    <div ref={ref} className="w-full flex flex-col gap-y-1 mt-8">
      {children}
    </div>
  );
};

export default CardWrapper;
