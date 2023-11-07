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
  dragTodo: (item: ITodo) => void;
  dragOverTodo: (e: React.DragEvent<HTMLDivElement>) => void;
  dropTodo: (targetItem: ITodo) => void;
  touchDrag: (e: React.TouchEvent<HTMLDivElement>) => void;
  todos: ITodo[];
  getAll: (state: State) => void;
  clear: () => void;
  touchStart: (item: ITodo) => void;
};

const Main = ({
  updateTodo,
  addNewTodo,
  deleteTodo,
  dragTodo,
  dragOverTodo,
  dropTodo,
  touchStart,
  touchDrag,
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
            touchStart={touchStart}
            onTouchDrag={touchDrag}
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
