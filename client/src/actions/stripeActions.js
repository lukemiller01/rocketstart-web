import * as api from '../api/index.js';
import { CREATECHECKOUT } from '../constants/actionTypes.js'

// Actions are objects that have a type and payload 

// Additional arrow function possible because of thunk. 
export const createCheckout = (key) => async (dispatch) => {
    try {
        const {data} = await api.createCheckout(key);
        let responseBody = dispatch({type: CREATECHECKOUT, payload: data });
        return responseBody;
    } catch (error) {
        throw error;
    }
};