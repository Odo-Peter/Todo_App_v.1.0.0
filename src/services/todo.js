import axios from 'axios';
const baseURL = 'http://localhost:3001/api/todos';

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getUserTodos = async () => {
  // const config = {
  //   headers: { Authorization: token },
  // };
  const request = await axios.get(baseURL);
  return request.data;
};

const createTodo = async (todoObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseURL, todoObject, config);
  return response.data;
};

const updateTodo = async (todoObject, id) => {
  const config = {
    headers: { Authorization: token },
  };

  const res = await axios.put(`${baseURL}/${id}`, todoObject, config);
  return res.data;
};

const deleteOne = async (id) => {
  const config = {
    headers: { Authorization: token },
  };

  const res = await axios.delete(`${baseURL}/${id}`, config);
  return res.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { setToken, getUserTodos, createTodo, deleteOne, updateTodo };
