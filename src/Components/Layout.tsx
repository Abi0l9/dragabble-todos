import React, { useEffect, useState } from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import { ITodo } from "../types";
import todo from "../services/todo";
import day from "./../assets/mountain .jpg";
import night from "./../assets/night.jpg";
import useTheme from "../hooks/useTheme";

export type State = "completed" | "active" | "all";

const Layout = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [draggedItem, setDraggedItem] = useState<ITodo>({} as ITodo);
  const { theme } = useTheme();

  useEffect(() => {
    const data = todo.retrieveTodos();
    setTodos(data);
  }, [setTodos]);

  const update = (id: string) => {
    const data = todo.updateTodo(id);
    setTodos(data);
  };

  const handleNewTodo = (data: ITodo) => {
    if (todos?.length) {
      const addedList = [data, ...todos];
      todo.addTodo(addedList);
      setTodos(addedList);
    } else {
      todo.addTodo([data]);
      setTodos([data]);
    }
  };

  const handleDelete = (id: string) => {
    const newList = todo.deleteTodo(id);
    setTodos(newList);
  };

  const handleDragStart = (item: ITodo) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    // e.preventDefault();
    console.log(e);
  };

  const handleDrop = (targetItem: ITodo) => {
    const updatedTodos = [...todos];
    const draggedIndex = updatedTodos.findIndex(
      (todo) => todo.id === draggedItem.id
    );
    const targetIndex = updatedTodos.findIndex(
      (todo) => todo.id === targetItem.id
    );

    updatedTodos[draggedIndex] = targetItem;
    updatedTodos[targetIndex] = draggedItem;
    todo.addTodo(updatedTodos);
    setTodos(updatedTodos);

    setDraggedItem({} as ITodo);
  };

  const getAll = (state: State) => {
    const data = todo.retrieveTodos();

    switch (state) {
      case "active":
        setTodos(data?.filter((todo) => !todo.completed));
        break;
      case "completed":
        setTodos(data?.filter((todo) => todo.completed));
        break;
      case "all":
        setTodos(todo.retrieveTodos());
        break;
      default:
        setTodos(todo.retrieveTodos());
        break;
    }
  };

  const clear = () => {
    const data = todo.clearCompleted();
    setTodos(data);
  };

  return (
    <div className="font-sans">
      <div className="w-full h-[240px] fixed">
        <img
          src={theme === "dark" ? night : day}
          alt=""
          className="w-full h-full"
        />
      </div>
      <div
        className={`w-full ${
          theme === "dark" ? "bg-gradient-to-l" : "bg-gradient-to-r"
        } from-purple-800 to-orange-800 opacity-50 h-[240px] fixed`}
      ></div>
      <Header />
      <Main
        todos={todos}
        getAll={getAll}
        updateTodo={update}
        deleteTodo={handleDelete}
        addNewTodo={handleNewTodo}
        dragTodo={handleDragStart}
        dragOverTodo={handleDragOver}
        dropTodo={handleDrop}
        touchDrag={handleTouchMove}
        clear={clear}
      />
      <Footer />
    </div>
  );
};

export default Layout;
