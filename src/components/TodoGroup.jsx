import { useContext } from "react";
import { TodoContext } from "../App";
import TodoItem from "./TodoItem";
import { Pagination } from "antd";
import React from "react";

export default function TodoGroup() {
  const { state } = useContext(TodoContext);
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 3;

  const handleChange = (page) => {
    console.log("clicked")
    setCurrentPage(page);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {state == null || state.length === 0 ? (
        <p>Add the things you need to do today</p>
      ) : (
        <>
          {state.
            slice((currentPage - 1) * pageSize, currentPage * pageSize)
            .map((todo) => <TodoItem key={todo.id} item={todo} />)}
          <Pagination
            defaultCurrent={1}
            pageSize={pageSize}
            onChange={handleChange}
            total={state.length}
            showSizeChanger={false}
            />
        </>
      )}

    </div>
  );
}
