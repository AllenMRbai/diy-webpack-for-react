const CHANGE_NAME = "CHANGE_NAME";
const INCREASE_AGE = "INCREASE_AGE";

let initState = {
  name: "Jerry",
  age: 18
};

export function user(state = initState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name };
    case INCREASE_AGE:
      return { ...state, age: state.age + 1 };
    default:
      return state;
  }
}

export function changeName(name) {
  return dispatch =>
    setTimeout(() => {
      dispatch({ type: CHANGE_NAME, name });
    }, 500);
}

export function increaseAge() {
  return dispatch =>
    setTimeout(() => {
      dispatch({ type: INCREASE_AGE });
    }, 500);
}
