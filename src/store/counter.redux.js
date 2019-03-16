const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const SET_ITEM = "SET_ITEM";

let initState = {
  total: 20
};

export function counter(state = initState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, total: state.total + action.num };
    case REMOVE_ITEM:
      return { ...state, total: state.total - action.num };
    case SET_ITEM:
      return { ...state, total: action.num };
    default:
      return state;
  }
}

export function add(num) {
  return { type: ADD_ITEM, num };
}

export function remove(num) {
  return { type: REMOVE_ITEM, num };
}

export function set(num) {
  return { type: SET_ITEM, num };
}

export function addOneAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(add(1));
    }, 300);
  };
}

export function removeOneAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(remove(1));
    }, 300);
  };
}
