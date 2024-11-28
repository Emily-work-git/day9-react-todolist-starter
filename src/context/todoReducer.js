export const todoReducer = (state, action) => {
  switch(action.type){
    case "ADD":
      return [...state, {id: Date.now(), text: action.payload.text, done: false}];
    default:
      return state;
  }
};