import { useContext } from "react";
import { TodoContext } from "../App";
import TodoItem from "./TodoItem";

export default function TodoGroup() {
  const { state } = useContext(TodoContext);
  return (
    <div>
      {state == null || state.length === 0 ? (
        <p>Add the things you need to do today</p>
      ) : (
        state.map((todo) => <TodoItem key={todo.id} item={todo} />)
      )}
    </div>
  );
}
