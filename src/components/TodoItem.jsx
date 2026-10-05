import styles from "./styles/TodoItem.module.css";

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div className={`${styles.item} ${todo.completed ? styles.completed : ""}`}>
      <label className={styles.left}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        <span>{todo.text}</span>
      </label>

      <button
        className={styles.deleteButton}
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;