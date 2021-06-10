import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  responseType: 'json',
});

export default api;
