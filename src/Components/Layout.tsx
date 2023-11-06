import React, { useEffect, useState } from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import { ITodo } from "../types";
import todo from "../services/todo";

export type State = "completed" | "active" | "all";

const Layout = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [draggedItem, setDraggedItem] = useState<ITodo>({} as ITodo);

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

  const handleDragStart = (
    _e: React.DragEvent<HTMLDivElement>,
    item: ITodo
  ) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (
    _e: React.DragEvent<HTMLDivElement>,
    targetItem: ITodo
  ) => {
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

  return (
    <div className="">
      <Header />
      <Main
        todos={todos}
        updateTodo={update}
        deleteTodo={handleDelete}
        addNewTodo={handleNewTodo}
        dragTodo={handleDragStart}
        dragOverTodo={handleDragOver}
        dropTodo={handleDrop}
      />
      <Footer todos={todos} getAll={getAll} />
    </div>
  );
};

export default Layout;
