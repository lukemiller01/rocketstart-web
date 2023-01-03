import axios from "axios";

// const url = 'https://tabula01.herokuapp.com/posts';
const url = 'http://localhost:5001/users';

// All actions to backend need to be dispatched, Redux used

export const createUser = (newUser) => axios.post(url, newUser);