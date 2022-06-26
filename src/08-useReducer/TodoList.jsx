import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map(({ id, description, done }) => (
          <TodoItem
            key={id}
            description={description}
            id={id}
            done={done}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </ul>
    </>
  );
};
