import { createContext, useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { InitialState, todoReducer } from "./context/todoReducer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import { Navigate } from "react-router-dom";
import DoneList from "./components/DoneList";
import Help from "./components/Help";
import HardStop from "./components/HardStop";
export const TodoContext = createContext();

function App() {
  const [state, dispatch] = useReducer(todoReducer, InitialState);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <Router>
          <nav>
            <Link to="/todo-list">Todo List </Link>/
            <Link to="/done-list">Done List </Link> / 
            <Link to="/help">Help </Link>
          </nav>
          <Routes>
            <Route path="/" element={<Navigate to="/todo-list" />} />
            <Route path="/done-list" element={<DoneList />} />
            <Route path="/todo-list" element={<TodoList />} />
            <Route path="/help" element={<Help />} />
            <Route path="/500" element={<HardStop />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
