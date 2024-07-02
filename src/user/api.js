import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ca9b46fc14341235f099.free.beeceptor.com/api'
});

export default api;
