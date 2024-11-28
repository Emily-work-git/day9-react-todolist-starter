import React from 'react';
import { TodoContext } from '../App';
export default function TodoItem(props){
    const { dispatch } = React.useContext(TodoContext);

    const handleClick = () => {
        dispatch({type: "UPDATE_DONE", 
            payload: {id: props.item.id}})
    }

    const handleDelete = () => {
        dispatch({type: "DELETE", 
            payload: {id: props.item.id}})
    }

    const TodoItemWrapperStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: "10px",
        margin: "5px",
    }
    
    const TodoItemTextStyle = {
        textDecoration: props.item.done ? "line-through" : "none",
        cursor: "pointer",
        width: "200px",
        wordWrap: "break-word",
        border: "1px solid black",
        margin: "0",
    }

    return(
        <div style={TodoItemWrapperStyle}>
            <p onClick={handleClick} style={TodoItemTextStyle}>
                {props.item.text}
            </p>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}