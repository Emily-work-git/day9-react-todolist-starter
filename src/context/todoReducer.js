export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: action.payload.text, done: false },
      ];
    case "UPDATE_DONE":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};