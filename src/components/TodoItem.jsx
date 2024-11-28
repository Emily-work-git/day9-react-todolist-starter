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

    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: "10px"
        }}>
            <p onClick={handleClick} style={{
                textDecoration: props.item.done ? "line-through" : "none",
                cursor: "pointer",
                width: "200px",
                wordWrap: "break-word",
                border: "1px solid black",
            }}>
                {props.item.text}
            </p>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}