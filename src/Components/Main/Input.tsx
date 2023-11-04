import React, { useState } from "react";

const Input = () => {
  const [data, setData] = useState({
    completed: false,
    content: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    const key = target.name;
    const value = target.value;

    if (target.name === "completed" && target.checked) {
      setData({ ...data, completed: true });
    } else setData({ ...data, [key]: value });
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);

    setData({
      completed: false,
      content: "",
    });
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col w-full p-3 rounded-md"
      >
        <div className="flex flex-row gap-x-3">
          <input
            type="radio"
            name="completed"
            id="completed"
            className="w-4"
            value={""}
            onChange={handleChange}
          />
          <input
            type="text"
            id="content"
            name="content"
            value={data.content}
            onChange={handleChange}
            className={`flex flex-1 w-full focus:outline-none px-3 rounded-md py-2 `}
            placeholder="Add A Todo..."
          />
        </div>
      </form>
    </div>
  );
};

export default Input;
