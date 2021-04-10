import React, { useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";

const TodoContainer = () => {
  const initialState = [
    {
      id: 1,
      title: "item 1",
      completed: false
    },
    {
      id: 2,
      title: "item 2",
      completed: true
    },
    {
      id: 3,
      title: "item 3",
      completed: false
    }
  ];

  const [todos, setTodos] = useState(initialState);

  const handleInputChange = id => {
    let newTodos = [...todos];
    newTodos.map(todo => todo.id === id && (todo.completed = !todo.completed));

    setTodos([...newTodos]);
  };

  const handleDelete = id => {
    const newTodos = [...todos].filter(todo => todo.id !== id);
    setTodos([...newTodos]);
  };

  const addTodoItem = title => {
    const newTodo = {
      id: new Date(),
      title: title,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <Header />
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList
        todos={todos}
        handleInputChange={handleInputChange}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default TodoContainer;
