const initialState = [
  {
    id: 1,
    todo: 'Recolectar la piedra filosofal',
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === '[TODO] Add Todo') {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Recolectar la piedra del poder',
  done: false,
};

const addTodoAction = {
  type: '[TODO] Add Todo',
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
