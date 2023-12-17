import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://interesting-quiet-production.up.railway.app/',
});