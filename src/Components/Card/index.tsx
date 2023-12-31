import React, { useState } from "react";
import { Icon } from "@iconify/react";
import del from "@iconify/icons-mdi/close";
import drag from "@iconify/icons-mdi/drag";
import { ITodo } from "../../types";
import useTheme from "../../hooks/useTheme";

type Props = {
  todo: ITodo;
  update: (id: string) => void;
  remove: (id: string) => void;
  onDragStart: (item: ITodo) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (targetItem: ITodo) => void;
  onTouchDrag: (e: React.TouchEvent<HTMLDivElement>) => void;
  touchStart: (item: ITodo) => void;
};

const Card = ({
  todo,
  update,
  remove,
  onDragStart,
  onDragOver,
  onDrop,
  touchStart,
  onTouchDrag,
}: Props) => {
  const { id, content, completed } = todo;
  const [value, setValue] = useState(false);
  const { theme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    setValue(checked);
  };

  return (
    <div
      draggable={true}
      onDragStart={() => onDragStart(todo)}
      onDragOver={onDragOver}
      onDrop={() => onDrop(todo)}
      onTouchStart={() => touchStart(todo)}
      onTouchMove={onTouchDrag}
      className={`w-full flex flex-row items-center gap-x-3 cursor-pointer   ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }  p-2`}
      data-id={todo.id}
    >
      <input
        type="radio"
        id={id}
        className="rounded-full cursor-pointer accent-pink-700"
        checked={completed}
        value={value ? "" : ""}
        onClick={() => update(id)}
        onChange={handleChange}
      />
      <div
        id={id}
        className={`flex-1 flex flex-row justify-between items-center ${
          completed ? "line-through text-gray-500" : ""
        }`}
      >
        <div>{content}</div>
        <div className="cursor-grab">
          <Icon icon={drag} width={24} />
        </div>
      </div>
      <div className="cursor-pointer">
        <Icon icon={del} onClick={() => remove(id)} width={24} />
      </div>
    </div>
  );
};

export default Card;
