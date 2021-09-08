import { clone } from "ramda";
import { USER_REGISTER, USER_LOGIN, USER_LOGOUT } from "../constants";

const initialState = {
  userDetails: {},
  tokens: {},
  isUserLoggedIn: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER: {
      const updatedState = clone(state);
      return updatedState;
    }
    case USER_LOGIN: {
      const updatedState = clone(state);
      return updatedState;
    }
    case USER_LOGOUT: {
      const updatedState = clone(state);
      return updatedState;
    }
    default:
      return state;
  }
}
