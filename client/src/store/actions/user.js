import AuthenticationService from "../../services/AuthenticationService";
import { USER_LOGIN, USER_REGISTER } from "../constants";

export const userRegister = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const result = await AuthenticationService.register({ email, password });
      dispatch({
        type: USER_REGISTER,
        payload: { result },
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const userLogin = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const result = await AuthenticationService.login({ email, password });
      dispatch({
        type: USER_LOGIN,
        payload: { result },
      });
    } catch (err) {
      console.error(err);
    }
  };
};
