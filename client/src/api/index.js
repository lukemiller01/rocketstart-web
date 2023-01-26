import axios from "axios";

const API = axios.create({ baseURL: `${process.env.REACT_APP_API_SERVICE}`});
// const API = axios.create({ baseURL: 'http://localhost:5001'});

// User

export const createUser = (newUser) => API.post('/user', newUser);

export const resendVerification = (id, updatedEmail) => API.patch(`/user/${id}`, updatedEmail);

export const resetPassword = (email) => API.post(`/user/reset`, email);

// Stripe

export const createCheckout = (key) => API.post('/checkout', key);