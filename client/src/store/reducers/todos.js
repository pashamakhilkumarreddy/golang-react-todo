import { clone } from "ramda";
import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODO,
  FETCH_TODOS,
  UPDATE_TODO,
} from "../constants";

const initialState = {
  todos: [],
  selectedTodo: {},
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const updatedState = clone(state);
      return updatedState;
    }
    case FETCH_TODOS: {
      const updatedState = clone(state);
      return updatedState;
    }
    case FETCH_TODO: {
      const updatedState = clone(state);
      return updatedState;
    }
    case UPDATE_TODO: {
      const updatedState = clone(state);
      return updatedState;
    }
    case DELETE_TODO: {
      const updatedState = clone(state);
      return updatedState;
    }
    default:
      return state;
  }
}
