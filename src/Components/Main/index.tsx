import React, { useEffect, useState } from "react";
import Input from "./Input";
import Wrapper from "../Wrapper";
import CardWrapper from "../Card/CardWrapper";
import Card from "../Card";
import todo from "../../services/todo";
import { ITodo } from "../../types";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";

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
        todos?.map((todo, idx) => (
          <Draggable key={todo.id} draggableId={todo.id} index={idx}>
            {(provided) => (
              <Card
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                update={update}
                remove={handleDelete}
                todo={todo}
              />
            )}
          </Draggable>
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

  const onDragEnd = (result: DropResult) => {
    console.log(result);
    if (!result.destination) return;

    const items = Array.from(todos);
    const [reorderedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItems);

    setTodos(items);
  };

  return (
    <Wrapper>
      <Input add={handleNewTodo} />
      <div className="">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todos">
            {(provided) => (
              <CardWrapper {...provided.droppableProps} ref={provided.innerRef}>
                <>{renderTodos()}</>
                <>{provided.placeholder}</>
              </CardWrapper>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </Wrapper>
  );
};

export default Main;
