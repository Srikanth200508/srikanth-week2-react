import { useState } from "react";
import TodoItem from "../components/TodoItem";
import Button from "../components/Button";

function Todo() {
  const [task, setTask] = useState("");

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React components",
      completed: true,
    },
    {
      id: 2,
      text: "Practice props and state",
      completed: false,
    },
  ]);

  function addTodo(event) {
    event.preventDefault();

    const trimmedTask = task.trim();

    if (!trimmedTask) {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: trimmedTask,
      completed: false,
    };

    setTodos((currentTodos) => [...currentTodos, newTodo]);
    setTask("");
  }

  function deleteTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  }

  function toggleTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  return (
    <section className="page">
      <div className="page-heading">
        <p className="eyebrow">STATE MANAGEMENT</p>

        <h1>My To-Do App</h1>

        <p>
          Add tasks, mark them as completed, and delete tasks using
          React state.
        </p>
      </div>

      <form className="todo-form" onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />

        <Button type="submit">Add Task</Button>
      </form>

      <div className="todo-list">
        {todos.length === 0 ? (
          <div className="empty-state">
            <h3>No tasks yet</h3>
            <p>Add your first task above.</p>
          </div>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onToggle={toggleTodo}
            />
          ))
        )}
      </div>

      <div className="todo-count">
        Total Tasks: <strong>{todos.length}</strong>
      </div>
    </section>
  );
}

export default Todo;