import TodoService from "../../services/TodoService";
import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODO,
  FETCH_TODOS,
  UPDATE_TODO,
} from "../constants/todos";

export const addTodo = ({ name }) => {
  return async (dispatch) => {
    try {
      const result = await TodoService.addTodo({ name });
      dispatch({
        type: ADD_TODO,
        payload: {
          result,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const result = await TodoService.fetchTodos();
      dispatch({
        type: FETCH_TODOS,
        payload: {
          result,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const fetchTodo = ({ id }) => {
  return async (dispatch) => {
    try {
      const result = await TodoService.fetchTodo({ id });
      dispatch({
        type: FETCH_TODO,
        payload: {
          result,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const updateTodo = ({ id }) => {
  return async (dispatch) => {
    try {
      const result = await TodoService.updateTodo({ id });
      dispatch({
        type: UPDATE_TODO,
        payload: {
          result,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const deleteTodo = ({ id }) => {
  return async (dispatch) => {
    try {
      const result = await TodoService.deleteTodo({ id });
      dispatch({
        type: DELETE_TODO,
        payload: {
          result,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
};
