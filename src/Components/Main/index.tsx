import React, { useEffect, useState } from "react";
import Input from "./Input";
import Wrapper from "../Wrapper";
import CardWrapper from "../Card/CardWrapper";
import Card from "../Card";
import todo from "../../services/todo";
import { ITodo } from "../../types";

const Main = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

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
            update={update}
            remove={handleDelete}
            todo={todo}
            key={todo.id}
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

  return (
    <Wrapper>
      <Input add={handleNewTodo} />
      <div className="">
        <CardWrapper>{renderTodos()}</CardWrapper>
      </div>
    </Wrapper>
  );
};

export default Main;
