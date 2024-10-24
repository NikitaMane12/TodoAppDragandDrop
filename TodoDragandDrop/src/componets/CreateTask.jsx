import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./createTask.css";

const CreateTask = ({ todos, setTodos }) => {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid(),
      name: input,
    };

    setTodos({
      ...todos,
      todo: [...todos.todo, newTask],
    });
    setInput("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-input"
        type="text"
        placeholder="Enter a task"
        autoComplete="off"
        value={input}
        onChange={onChange}
      />
      <button className="form-button" type="submit">
        Add
      </button>
    </form>
  );
};

export default CreateTask;
