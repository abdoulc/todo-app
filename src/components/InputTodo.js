import React, { useState } from "react";

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleOnchange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle("");
    } else {
      setError("le titre ne peut pas être vide");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleOnchange}
          placeholder="ajouter un todo"
        />
        <button> Ajouter </button>
      </form>
      {error && <span style={{ color: "red" }}>{error}</span>}
    </>
  );
};

export default InputTodo;
