import React from 'react';

export const TodoItem = ({ description, onDeleteTodo, id, done, onToggleTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span
          aria-label="span"
          className={`align-self-center ${done ? 'text-decoration-line-through' : ''}`}
          onClick={() => onToggleTodo(id)}
        >
          {description}
        </span>
        <button onClick={() => onDeleteTodo(id)} className="btn btn-danger">
          Borrar
        </button>
      </li>
    </>
  );
};
