import * as api from "../api/index.js";
import {
  CREATE,
  UPDATEEMAIL,
  RESETPASSWORD,
} from "../constants/actionTypes.js";

// Actions are objects that have a type and payload

// Thunk is used because a data fetch is an asynchronous action.
// The additional arrow function allows us to await for a response from the API.
// Need to dispatch action, insead of returning the action
export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    throw error;
  }
};

export const resendVerification = (id, updatedEmail) => async (dispatch) => {
  try {
    const { data } = await api.resendVerification(id, updatedEmail);
    dispatch({ type: UPDATEEMAIL, payload: data });
  } catch (error) {
    throw error;
  }
};

export const resetPassword = (email) => async (dispatch) => {
  try {
    const { data } = await api.resetPassword(email);
    dispatch({ type: RESETPASSWORD, payload: data });
  } catch (error) {
    throw error;
  }
};
