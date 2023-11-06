import React, { useEffect, useState } from "react";
import Input from "./Input";
import Wrapper from "../Wrapper";
import CardWrapper from "../Card/CardWrapper";
import Card from "../Card";
import todo from "../../services/todo";
import { ITodo } from "../../types";
// import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";

const Main = () => {
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

  const renderTodos = () => {
    return (
      (todos?.length > 0 &&
        todos?.map((todo) => (
          <Card
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            key={todo.id}
            update={update}
            remove={handleDelete}
            todo={todo}
          />
        ))) || <div></div>
    );
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

  return (
    <Wrapper>
      <Input add={handleNewTodo} />
      <>
        <CardWrapper>
          <>{renderTodos()}</>
        </CardWrapper>
      </>
    </Wrapper>
  );
};

export default Main;
