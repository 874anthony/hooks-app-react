import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('Pruebas en el <TodoApp />', () => {
  useTodos.mockReturnValue({
    todos: [
      { id: 1, description: 'Piedra del Alma', done: false },
      { id: 2, description: 'Piedra del Poder', done: true },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleDeleteTodo: jest.fn(),
    handleNewTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });

  test('should mostrar el componente correctamente', () => {
    render(<TodoApp />);

    // screen.debug();
    expect(screen.getByText('Piedra del Alma')).toBeTruthy();
  });
});
