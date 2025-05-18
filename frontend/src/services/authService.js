import axios from 'axios';

export const login = async (email, password) => {
  const res = await axios.post('/api/auth/login', { email, password });
  return res.data.token;
};

export const register = async (name, email, password, role) => {
  const res = await axios.post('/api/auth/register', { name, email, password, role });
  return res.data.token;
};