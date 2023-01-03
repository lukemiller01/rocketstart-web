import { CREATE } from '../constants/actionTypes.js';

const reducersPosts = (users = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...users, action.payload];
        default:
            return users;
    }
}; // Reducer is a function that accepts a state and an action and returns data.

export default reducersPosts;