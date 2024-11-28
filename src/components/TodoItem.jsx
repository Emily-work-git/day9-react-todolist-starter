import React from 'react';
import { TodoContext } from '../App';
export default function TodoItem(props){
    const { dispatch } = React.useContext(TodoContext);

    const handleClick = () => {
        console.log(props.item)
        console.log("clicked")
        dispatch({type: "UPDATE_DONE", 
            payload: {id: props.item.id}})
    }

    return(
        <div onClick={handleClick} style={{
            textDecoration: props.item.done ? "line-through" : "none"
        }}>
            {props.item.text}
        </div>
    )
}