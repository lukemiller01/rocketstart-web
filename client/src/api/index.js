import axios from "axios";

// const url = 'https://tabula01.herokuapp.com/posts';
const url = 'http://localhost:5001/users';

export const createUser = (newUser) => axios.post(url, newUser);