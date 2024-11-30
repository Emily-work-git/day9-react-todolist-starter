import React from 'react';
import { TodoContext } from '../App';
import { Button } from '@mui/material';
import { deleteTodo, updateTodo } from '../api/todo';
import { Actions } from '../context/todoReducer';
import { DeleteOutlined } from '@ant-design/icons';
import UpdateTodoModal from './UpdateTodoModal';

export default function TodoItem(props){
    const { dispatch } = React.useContext(TodoContext);

    const handleClick = () => {
        updateTodo(props.item.id, {done: !props.item.done})
        .then(() => {
            dispatch({type: Actions.UPDATE_DONE, 
                payload: {id: props.item.id}})
        })
    }

    const handleDelete = () => {
        deleteTodo(props.item.id).then(() => {
            dispatch({type: "DELETE", 
                payload: {id: props.item.id}})
        })
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
            <Button onClick={handleDelete} variant='outlined' size="small"> <DeleteOutlined /> </Button>
            <UpdateTodoModal itemId={props.item.id}/>
        </div>
    )
}