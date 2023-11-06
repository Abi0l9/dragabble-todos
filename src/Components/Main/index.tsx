import React from "react";
import Input from "./Input";
import Wrapper from "../Wrapper";
import CardWrapper from "../Card/CardWrapper";
import Card from "../Card";
import { ITodo } from "../../types";
import { State } from "../Layout";

type Props = {
  updateTodo: (id: string) => void;
  addNewTodo: (data: ITodo) => void;
  deleteTodo: (id: string) => void;
  dragTodo: (_e: React.DragEvent<HTMLDivElement>, item: ITodo) => void;
  dragOverTodo: (e: React.DragEvent<HTMLDivElement>) => void;
  dropTodo: (_e: React.DragEvent<HTMLDivElement>, targetItem: ITodo) => void;
  todos: ITodo[];
  getAll: (state: State) => void;
  clear: () => void;
};

const Main = ({
  updateTodo,
  addNewTodo,
  deleteTodo,
  dragTodo,
  dragOverTodo,
  dropTodo,
  todos,
  getAll,
  clear,
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
      <div className="z-50">
        <Input add={handleNewTodo} />
        <>
          <CardWrapper clear={clear} todos={todos} getAll={getAll}>
            <>{renderTodos()}</>
          </CardWrapper>
        </>
      </div>
    </Wrapper>
  );
};

export default Main;
