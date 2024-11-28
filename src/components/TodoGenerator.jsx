import { useState, useContext } from "react";
import { TodoContext } from "../App";

export default function TodoGenerator() {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    if (text.trim() === "") {
      return;
    }
    dispatch({ type: "ADD", payload: { text: text.trim() } });
  };

  const TodoGeneratorWrapperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    width: "100%",
  }

  const addButtonStyle = {
    backgroundColor: "blue",
    color: "white",
    border: 0,
    borderRadius: "5px",
  }

  return (
    <div style={TodoGeneratorWrapperStyle}>
      <input type="text" value={text} onChange={handleInputChange} />
      <button style={addButtonStyle} onClick={handleClick}>add</button>
    </div>
  );
}
