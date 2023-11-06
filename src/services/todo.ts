// import axios from "axios";
import todos from "../data";
import { ITodo } from "../types";

const getAll = () => {
  return todos;
};

const addToStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const storeTodos = (todos: ITodo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const retrieveTodos = () => {
  const data: ITodo[] = JSON.parse(localStorage.getItem("todos")!);
  return data;
};

const updateTodo = (id: string) => {
  const allTodos = retrieveTodos();

  const updated = allTodos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });

  storeTodos(updated);

  return updated;
};

const addTodo = (data: ITodo[]) => {
  storeTodos(data);

  return data;
};

const deleteTodo = (id: string) => {
  const allTodos = retrieveTodos();

  const filteredList = allTodos?.filter((todo) => todo.id !== id);
  storeTodos(filteredList);
  return filteredList;
};

const clearCompleted = () => {
  const allTodos = retrieveTodos();

  const filteredList = allTodos?.filter((todo) => !todo.completed);
  storeTodos(filteredList);
  return filteredList;
};

export default {
  getAll,
  updateTodo,
  addToStorage,
  retrieveTodos,
  storeTodos,
  addTodo,
  deleteTodo,
  clearCompleted,
};
