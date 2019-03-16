import { counter } from "./counter.redux";
import { user } from "./user.redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({ counter, user }),
  applyMiddleware(thunk)
);
