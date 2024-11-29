export const InitialState = [];

export const Actions = {
  ADD: "ADD",
  UPDATE_DONE: "UPDATE_DONE",
  DELETE: "DELETE",
  INIT: "INIT",
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case Actions.ADD:
      return [
        ...state,
        { id: Date.now(), text: action.payload.text, done: false },
      ];
    case Actions.UPDATE_DONE:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    case Actions.DELETE:
      return state.filter((todo) => todo.id !== action.payload.id);
    case Actions.INIT:
      return action.payload;
    default:
      return state;
  }
};