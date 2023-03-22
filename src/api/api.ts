import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://vladyslav-zolotarov.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});
