import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Todo from "./Todo";

const List = ({ todos, setTodos, listId = "todo" }) => {
  return (
    <div className="list-container">
      <h2>{listId}</h2>
      <Droppable droppableId={listId}>
        {(provided) => (
          <ul
            className="task-list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todos.map((todo, index) => (
              <Draggable key={todo.id} draggableId={todo.id} index={index}>
                {(provided) => (
                  <li
                    className="task-item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Todo
                      todo={todo}
                      todos={todos}
                      setTodos={setTodos}
                      listId={listId}
                    />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

export default List;
