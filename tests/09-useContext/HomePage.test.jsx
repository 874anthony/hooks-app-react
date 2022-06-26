import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';

describe('Pruebas en <HomePage />', () => {
  const user = {
    id: 1,
    name: 'Anthony',
  };

  xtest('should mostrar componentes SIN el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    expect(preTag.innerHTML).toBe('null');
    // screen.debug();
  });

  test('should mostrar componentes CON el usuario', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    // screen.debug();

    expect(preTag.innerHTML).toContain(user.name);
  });
});
