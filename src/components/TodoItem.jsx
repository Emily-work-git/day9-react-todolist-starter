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
        const requestBody = {
            id: props.item.id,
            text: props.item.text,
            done: !props.item.done
        }
        updateTodo(props.item.id, requestBody)
        .then((response) => {
            console.log(response)
            dispatch({type: Actions.UPDATE, 
                payload: {id: props.item.id, todo: response}})
        })
    }

    const handleDelete = () => {
        deleteTodo(props.item.id).then(() => {
            dispatch({type: Actions.DELETE, 
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
        width: "30vw",
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
            <UpdateTodoModal item={props.item}/>
        </div>
    )
}