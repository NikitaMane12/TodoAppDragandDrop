import React, { useState } from "react";

import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import CreateTask from "./componets/CreateTask";
import List from "./componets/List";

function App() {
  const [todos, setTodos] = useState({
    todo: [],
    inProgress: [],
    review: [],
    done: [],
    closed: [],
  });

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceList = [...todos[source.droppableId]];
    const destinationList = [...todos[destination.droppableId]];
    const [movedItem] = sourceList.splice(source.index, 1);
    destinationList.splice(destination.index, 0, movedItem);

    setTodos({
      ...todos,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destinationList,
    });
  };

  return (
    <div className="app">
      <h1>Todo List With Drag and Drop</h1>
      <CreateTask todos={todos} setTodos={setTodos} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="columns">
          <List
            title="Todo"
            todos={todos.todo}
            setTodos={setTodos}
            listId="todo"
          />
          <List
            title="In Progress"
            todos={todos.inProgress}
            setTodos={setTodos}
            listId="inProgress"
          />
          <List
            title="Review"
            todos={todos.review}
            setTodos={setTodos}
            listId="review"
          />
          <List
            title="Done"
            todos={todos.done}
            setTodos={setTodos}
            listId="done"
          />
          <List
            title="Closed"
            todos={todos.closed}
            setTodos={setTodos}
            listId="closed"
          />
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
