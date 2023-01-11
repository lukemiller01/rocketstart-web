import { CREATE, UPDATEEMAIL } from '../constants/actionTypes.js';

const reducersUsers = (users = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...users, action.payload];
        case UPDATEEMAIL:
            return users.map((user) => (user._id === action.payload._id ? action.payload : user));
        default: // TODO: fix default action?
            return users;
    }
};

export default reducersUsers;