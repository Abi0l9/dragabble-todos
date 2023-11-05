import { v4 as uuidv4 } from "uuid";
import { ITodo } from "./types";

const genId = () => uuidv4();

const getTodos = () => {
  const data: ITodo[] = JSON.parse(localStorage.getItem("todos")!);
  return data;
};

export default { genId, getTodos };
