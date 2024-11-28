import { useContext, useReducer } from 'react';
import { TodoContext } from '../App';
import TodoItem from './TodoItem';

export default function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext);
    return (
        <div>
            {state.map((todo) => {
                return <TodoItem key={todo.id} item={todo} />
            })}
        </div>
    )
}