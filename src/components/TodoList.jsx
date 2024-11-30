import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import React from "react";
import { getTodos } from "../api/todo";
import { TodoContext } from "../App";
import { Actions } from "../context/todoReducer";
import { Spin } from "antd";

export default function TodoList() {
  const { dispatch } = React.useContext(TodoContext);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getTodos()
      .then((todos) => {
        dispatch({ type: Actions.INIT, payload: todos });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const TodolistWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  };
  return isLoading ? (
    <Spin></Spin>
  ) : (
    <div style={TodolistWrapperStyle}>
      <h1>This is the TodoList Component</h1>
      <TodoGenerator />
      <TodoGroup />
    </div>
  );
}
