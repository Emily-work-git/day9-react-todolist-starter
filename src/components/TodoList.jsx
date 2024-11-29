import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import React from "react";
import { getTodos } from "../api/todo";
import { TodoContext } from "../App";
import { Actions } from "../context/todoReducer";

export default function TodoList() {
  const { dispatch } = React.useContext(TodoContext);

  React.useEffect(() => {
    getTodos().then((todos) => {
      dispatch({ type: Actions.INIT, payload: todos });
    });
  }, []);

  return (
    <div>
      <h1>This is the TodoList Component</h1>
      <TodoGroup />
      <TodoGenerator />
    </div>
  );
}
