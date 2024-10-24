import React from "react";

const Todo = ({ todo, todos, setTodos, listId }) => {
  const deleteTodo = () => {
    setTodos((prevTodos) => ({
      ...prevTodos,
      [listId]: prevTodos[listId].filter((el) => el.id !== todo.id),
    }));
  };

  return (
    <div className="todo-item">
      <p>{todo.name}</p>
      <button
        onClick={deleteTodo}
        style={{ background: "red", padding: "5px 10px" }}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
