import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ todos, handleInputChange, handleDelete }) => {
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleInputChange={handleInputChange}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
