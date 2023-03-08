import {
  CREATE,
  RESETPASSWORD,
  UPDATEEMAIL,
} from "../constants/actionTypes.js";

// Function accepts state and the action type.

// In this case, we DON'T want each user to be passed to change state.
// Therefore, the state of the users is set to [].
// The action payload is the individual user that performs an action.
const reducersUsers = (users = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...users, action.payload];
    case UPDATEEMAIL:
      return users.map((user) =>
        user._id === action.payload._id ? action.payload : user
      );
    case RESETPASSWORD:
      return [...users, action.payload];
    default:
      return users;
  }
};

export default reducersUsers;
