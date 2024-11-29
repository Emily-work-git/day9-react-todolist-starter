import { useContext } from "react"
import { TodoContext } from "../App"

export default function DoneList(){
    const { state } = useContext(TodoContext);

    const doneList = (state) => {
        console.log(state)
        return (state.filter(todo => todo.done).map((todo) => 
         (<p key={todo.id}>{todo.text}</p>)))
    }

    return (<>
        <h1>Done List</h1>
        {doneList(state)}
    </>)
}