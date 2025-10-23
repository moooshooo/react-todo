function TodoList({ todos, setTodos }) {
  return (
    <div id="todos-section">
      {todos.map((todo, index) => (
        <div className="todo-div" id={index}>
          <input type="checkbox" />
          <p>
            Nr: {index} - {todo}
          </p>
          <button
            id="delete-task"
            onClick={() => {
              const newTodosList = todos.filter(
                (todoX, indexX) => indexX !== index
              );

              setTodos(newTodosList);
              console.log("klick");
            }}
          >
            Ta bort Nr:{index}
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;

{
  /* {todos.map((todo) => (
        <p>{todo}</p>
      ))} */
}

/* 
            const divToDel = document.getElementById({index})
            divToDel.textContent = ""  */
