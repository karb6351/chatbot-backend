import axios from '../configs/axios';

export const login = (username, password) => {
  return axios.post('/login', { username, password })
}
