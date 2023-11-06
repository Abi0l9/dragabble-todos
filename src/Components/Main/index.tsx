import React from "react";
import Input from "./Input";
import Wrapper from "../Wrapper";
import CardWrapper from "../Card/CardWrapper";
import Card from "../Card";
import { ITodo } from "../../types";

type Props = {
  updateTodo: (id: string) => void;
  addNewTodo: (data: ITodo) => void;
  deleteTodo: (id: string) => void;
  dragTodo: (_e: React.DragEvent<HTMLDivElement>, item: ITodo) => void;
  dragOverTodo: (e: React.DragEvent<HTMLDivElement>) => void;
  dropTodo: (_e: React.DragEvent<HTMLDivElement>, targetItem: ITodo) => void;
  todos: ITodo[];
};

const Main = ({
  updateTodo,
  addNewTodo,
  deleteTodo,
  dragTodo,
  dragOverTodo,
  dropTodo,
  todos,
}: Props) => {
  const update = (id: string) => {
    updateTodo(id);
  };

  const renderTodos = () => {
    return (
      (todos?.length > 0 &&
        todos?.map((todo) => (
          <Card
            onDragStart={dragTodo}
            onDragOver={dragOverTodo}
            onDrop={dropTodo}
            key={todo.id}
            update={update}
            remove={handleDelete}
            todo={todo}
          />
        ))) || <div></div>
    );
  };

  const handleNewTodo = (data: ITodo) => {
    addNewTodo(data);
  };

  const handleDelete = (id: string) => {
    deleteTodo(id);
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
