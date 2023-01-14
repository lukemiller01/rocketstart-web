import axios from "axios";

const url = 'https://rocketstart.herokuapp.com/';

export const createUser = (newUser) => axios.post(url, newUser);

export const resendVerification = (id, updatedEmail) => axios.patch(`${url}/${id}`, updatedEmail);

export const resetPassword = (email) => axios.post(`${url}/reset`, email);