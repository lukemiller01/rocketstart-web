import { CREATE } from '../constants/actionTypes.js';

const reducersUsers = (users = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...users, action.payload];
        default:
            return users;
    }
};

export default reducersUsers;