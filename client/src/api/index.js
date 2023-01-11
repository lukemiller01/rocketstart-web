import axios from "axios";

// const url = 'https://tabula01.herokuapp.com/users';
const url = 'http://localhost:5001/users';

export const createUser = (newUser) => axios.post(url, newUser);

export const resendVerification = (id, updatedEmail) => axios.patch(`${url}/${id}`, updatedEmail);