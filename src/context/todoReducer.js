export const InitialState = [];

export const Actions = {
  ADD: "ADD",
  UPDATE_DONE: "UPDATE_DONE",
  UPDATE_TEXT: "UPDATE_TEXT",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  INIT: "INIT",
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case Actions.ADD:
      return [
        ...state, action.payload,
      ];
    case Actions.UPDATE:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload.todo;
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