import { createContext, useReducer } from "react";
import './App.css';
import TodoList from "./components/TodoList";
import { todoReducer } from "./context/todoReducer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import {Navigate} from "react-router-dom";

export const TodoContext = createContext();

function App() {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <Router>
           <Routes>
              <Route path="*" element={<NotFound/>} />
              <Route path="/" element={<Navigate to="/todo-list"/>} />
              <Route path="/todo-list" element={<TodoList />} />
           </Routes>
        </Router>  
      </TodoContext.Provider>
    </div>
  );
}

export default App;
