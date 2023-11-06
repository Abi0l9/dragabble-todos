import React from "react";
import useTheme from "../../hooks/useTheme";
import { State } from "../Layout";
import { ITodo } from "../../types";

type Prop = {
  children: JSX.Element[] | JSX.Element;
  todos: ITodo[];
  getAll: (state: State) => void;
  clear: () => void;
};

const CardWrapper = ({ children, todos, getAll, clear }: Prop) => {
  const { theme } = useTheme();
  return (
    <div
      className={`w-full  ${
        theme === "dark" ? "bg-gray-700" : "bg-gray-200"
      } rounded-md drop-shadow-lg flex flex-col gap-y-[1px] mt-8 mb-4 max-h-[400px] overflow-y-auto`}
    >
      {children}
      <div
        className={`flex flex-row w-full items-center text-xs lg:text-base gap-x-2 p-2 py-3 ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="cursor-pointer hover:font-bold">
          {todos?.length || 0} items left
        </div>
        <div className="flex-1 flex flex-row justify-center gap-x-3 items-center">
          <div
            onClick={() => getAll("all")}
            className="cursor-pointer hover:font-bold"
          >
            All
          </div>
          <div
            onClick={() => getAll("active")}
            className="cursor-pointer hover:font-bold"
          >
            {" "}
            Active{" "}
          </div>
          <div
            onClick={() => getAll("completed")}
            className="cursor-pointer hover:font-bold"
          >
            Completed
          </div>
        </div>
        <div onClick={clear} className="cursor-pointer hover:font-bold">
          Clear Completed
        </div>
      </div>
    </div>
  );
};

export default CardWrapper;
