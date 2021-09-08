import { combineReducers } from "redux";
import userReducer from "./user";
import todoReducer from "./todos";

const rootReducer = combineReducers({
  user: userReducer,
  todos: todoReducer,
});

export default rootReducer;
