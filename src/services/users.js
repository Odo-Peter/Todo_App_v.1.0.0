import axios from 'axios';
const baseURL = 'http://localhost:3001/api/users';

const createUser = async (credentials) => {
  const response = await axios.post(baseURL, credentials);
  return response.data;
};

const getUser = async () => {
  const loggedInUser = window.localStorage.getItem('loggedInUser');
  if (loggedInUser) {
    const user = JSON.parse(loggedInUser);
    return user;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { createUser, getUser };
