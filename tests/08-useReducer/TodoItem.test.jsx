import { render, screen, fireEvent } from '@testing-library/react';

import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en el <TodoItem />', () => {
  const todo = {
    id: 1,
    description: 'Piedra del Alma',
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  xtest('should mostrar el Todo Pendiente de completar', () => {
    render(
      <TodoItem
        description={todo.description}
        done={todo.done}
        id={todo.id}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain(`align-self-center`);

    // ${todo.done ? 'text-decoration-line-through' : ''}
    // screen.debug();
  });

  xtest('should mostrar el todoCompletado', () => {
    todo.done = true;

    render(
      <TodoItem
        description={todo.description}
        done={todo.done}
        id={todo.id}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('should llamar el toggleTodo cuando se hace click', () => {
    todo.done = true;

    render(
      <TodoItem
        description={todo.description}
        done={todo.done}
        id={todo.id}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
