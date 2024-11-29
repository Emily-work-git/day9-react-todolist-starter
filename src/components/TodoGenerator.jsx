import { useState, useContext } from "react";
import { TodoContext } from "../App";
import Button from "@mui/material/Button";
import React from "react";
import { addTodos } from "../api/todo";
export default function TodoGenerator() {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);
  const maxInputLength = 100;


  const handleInputChange = (event) => {
    if (event.target.value.length > maxInputLength) {
      alert("The input has exceed the maximum length allowed");
      return;
    }
    setText(event.target.value);
  };

  const handleClick = async() => {
    if (text.trim() === "") {
      return;
    }
    const newTodo = { text: text.trim(), done: false };
    const response = await addTodos(newTodo);
    dispatch({ type: "ADD", payload: response });
    setText("");
  };

  const TodoGeneratorWrapperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    width: "100%",
  };

  return (
    <div style={TodoGeneratorWrapperStyle}>
      <input
        type="text"
        maxLength={maxInputLength}
        value={text}
        onChange={handleInputChange}
      />
      <Button variant="contained" size="small" onClick={handleClick}>
        add
      </Button>
    </div>
  );
}
