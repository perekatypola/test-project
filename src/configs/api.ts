import axios from 'axios';
import {API_URL} from 'react-native-dotenv';

const api = axios.create({
  baseURL: API_URL,
  responseType: 'json',
});

api.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
);

export default api;
