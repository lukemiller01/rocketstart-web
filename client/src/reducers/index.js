import { combineReducers } from "redux";
import users from './userReducer';

// A reducer is a function that accepts state and action
// If action = create, then do some logic 

export default combineReducers({ users });