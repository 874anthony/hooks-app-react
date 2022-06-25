import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: '874anthony',
    email: 'anthony@test.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('useEffect called');
  }, []);

  useEffect(() => {
    // console.log('email changed');
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>

      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="anthony@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === '874anthony2' && <Message />}
    </>
  );
};
