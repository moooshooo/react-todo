import { useState } from "react";
import "./mos.css";
import TodoList from "./todos";

function App() {
  const [todos, setTodos] = useState([]); //Skapar en array
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e) => setUserInput(e.target.value);

  const addTodo = () => {
    const newTodoList = [...todos, userInput];
    setTodos(newTodoList);
    setUserInput("");
  };


  return (
    <>
      <div id="todo-container">
        <h1>MoS ToDo</h1>
        <div id="add-section">
          <input
            type="text"
            id="input"
            onChange={handleUserInput}
            value={userInput}
          />
          <button id="add-task" onClick={addTodo}>
            Lägg till{" "}
          </button>
        </div>

        <TodoList todos={todos} setTodos={setTodos}  />

        {/* 
        <div id="todos-section">
          {todos.map((todo) => (
            <p>{todo}</p>
            ))}
        </div>
 */}
      </div>
    </>
  );
}

export default App;
