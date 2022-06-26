import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Que hay que hacer?"
          name="description"
          value={description}
          onChange={onInputChange}
        />

        <button onClick={onFormSubmit} type="submit" className="btn btn-outline-primary mt-3">
          Agregar
        </button>
      </form>
    </>
  );
};
