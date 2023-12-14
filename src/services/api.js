import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://piquant-ticket-production.up.railway.app',
});