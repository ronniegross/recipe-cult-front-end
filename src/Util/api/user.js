import axios from "axios";

// get all users
export const getAllUsers = async () => {
  let url = 'http://localhost:3001/users';
  const response = await axios.get(url);
  return response.data
}

// create user
export const createUser = async (username, password, email) => {
  const payload = {
    username, password, email
  }
  let url = 'http://localhost:3001/users';
  const response = await axios.post(url, payload);
  return response.data;
};