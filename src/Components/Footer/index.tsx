import React from "react";
import Wrapper from "../Wrapper";
import { ITodo } from "../../types";
import type { State } from "../Layout";

type Props = {
  todos: ITodo[];
  getAll: (state: State) => void;
};

const Footer = ({ todos, getAll }: Props) => {
  return (
    <Wrapper>
      <div className="flex flex-row w-full items-center gap-x-2 p-2 bg-gray-100 rounded-md">
        <div className="cursor-pointer">{todos?.length || 0} items left</div>
        <div className="flex-1 flex flex-row justify-center gap-x-3 items-center">
          <div onClick={() => getAll("all")} className="cursor-pointer">
            All
          </div>
          <div onClick={() => getAll("active")} className="cursor-pointer">
            {" "}
            Active{" "}
          </div>
          <div onClick={() => getAll("completed")} className="cursor-pointer">
            Completed
          </div>
        </div>
        <div className="cursor-pointer">Clear Completed</div>
      </div>
      <div className="mt-10 text-center text-gray-500">
        drag and drop items to rearrange
      </div>
    </Wrapper>
  );
};

export default Footer;
