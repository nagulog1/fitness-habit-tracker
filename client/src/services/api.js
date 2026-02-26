import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: (name, email, password) =>
    api.post('/auth/register', { name, email, password }),
  login: (email, password) =>
    api.post('/auth/login', { email, password }),
  getProfile: () =>
    api.get('/auth/profile'),
};

export const habitAPI = {
  create: (habitData) =>
    api.post('/habits', habitData),
  getAll: () =>
    api.get('/habits'),
  update: (id, habitData) =>
    api.put(`/habits/${id}`, habitData),
  delete: (id) =>
    api.delete(`/habits/${id}`),
  toggle: (id) =>
    api.patch(`/habits/${id}/toggle`),
};

export default api;
