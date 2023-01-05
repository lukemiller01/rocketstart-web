import * as api from '../api/index.js';
import { CREATE } from '../constants/actionTypes.js'

// Actions are objects that have a type and payload 

// Additional arrow function possible because of thunk. 
export const createUser = (user) => async (dispatch) => {
    try {
        const {data} = await api.createUser(user);
        dispatch({type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};