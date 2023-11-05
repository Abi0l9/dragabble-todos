import React, { useState } from "react";
import { Icon } from "@iconify/react";
import del from "@iconify/icons-mdi/close";
import { ITodo } from "../../types";

type Props = {
  todo: ITodo;
  update: (id: string) => void;
  remove: (id: string) => void;
  ref: (element: HTMLElement | null) => void;
};

const Card = ({ todo, update, remove, ref }: Props) => {
  const { id, content, completed } = todo;
  const [value, setValue] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    setValue(checked);
  };

  return (
    <div
      ref={ref}
      className="w-full flex flex-row items-center gap-x-3  bg-gray-100  p-2 rounded-md"
    >
      <input
        type="radio"
        id={id}
        className="rounded-full"
        checked={completed}
        value={value ? "" : ""}
        onClick={() => update(id)}
        onChange={handleChange}
      />
      <div
        id={id}
        className={`flex-1 cursor-grab ${
          completed ? "line-through text-gray-500" : ""
        }`}
      >
        {content}
      </div>
      <div className="cursor-pointer">
        <Icon icon={del} onClick={() => remove(id)} width={24} />
      </div>
    </div>
  );
};

export default Card;
