import React, { useState } from "react";
import utils from "../../utils";
import { ITodo } from "../../types";
import useTheme from "../../hooks/useTheme";

type Props = {
  add: (data: ITodo) => void;
};

const Input = ({ add }: Props) => {
  const [data, setData] = useState<ITodo>({
    id: utils.genId(),
    completed: false,
    content: "",
  });
  const { theme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    const key = target.name;
    const value = target.value;

    // if (target.name === "completed" && target.checked) {
    //   setValue(true);
    //   setData({ ...data, completed: true });
    // } else

    setData({ ...data, [key]: value });
  };

  const handleSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    setData({ ...data, completed: checked });
  };

  const handleClick = () => {
    setData({ ...data, completed: !data.completed });
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.content.length) {
      add({ ...data, id: utils.genId() });

      setData({
        id: "",
        completed: false,
        content: "",
      });
    }
  };

  return (
    <div
      className={`drop-shadow-lg  ${
        theme === "dark" ? "bg-gray-800 text-gray-100" : "bg-white"
      } rounded-md`}
    >
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col w-full p-3 py-1 rounded-md"
      >
        <div className="flex flex-row gap-x-3">
          <input
            type="radio"
            name="completed"
            id="completed"
            className="w-4"
            value={data.completed ? "" : ""}
            checked={data.completed}
            onChange={handleSelection}
            onClick={handleClick}
          />
          <input
            type="text"
            id="content"
            name="content"
            value={data.content}
            onChange={handleChange}
            className={`flex flex-1 w-full focus:outline-none px-3 bg-transparent rounded-md py-2 `}
            placeholder="Add A Todo..."
          />
        </div>
      </form>
    </div>
  );
};

export default Input;
