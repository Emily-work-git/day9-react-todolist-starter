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

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={handleClick}>add</button>
    </div>
  );
}
