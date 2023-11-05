import { ITodo } from "./types";
import utils from "./utils";

const todos: ITodo[] = [
  {
    completed: false,
    content: "This is the first todo",
    id: utils.genId(),
  },
  {
    completed: false,
    content: "This is the second todo",
    id: utils.genId(),
  },
  {
    completed: false,
    content: "This is the third todo",
    id: utils.genId(),
  },
];

export default todos;
