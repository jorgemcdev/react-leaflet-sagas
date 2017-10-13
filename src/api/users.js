import axios from 'axios';
import { API_TIME_OUT } from './../config';

export const getUsers = () => (
  axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
    timeout: API_TIME_OUT,
  })
    .then(response => response)
    .catch(error => error.response.status)
);

export const getSingleUser = id => (
  axios({
    method: 'get',
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
    timeout: API_TIME_OUT,
  })
    .then(response => response)
    .catch(error => error.response.status)
);
