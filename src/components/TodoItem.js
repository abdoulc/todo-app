import React from "react";

const TodoItem = ({ todo, handleInputChange, handleDelete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleInputChange(todo.id)}
      />
      {todo.title}
      <button onClick={() => handleDelete(todo.id)} disabled={!todo.completed}>
        supprimer
      </button>
    </li>
  );
};
export default TodoItem;
