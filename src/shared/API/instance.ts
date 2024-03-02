import axios from 'axios';
import { API_URL, AUTH_HASH } from '../consts/consts';

const headers = {
	'X-Auth': AUTH_HASH,
	'Content-Type': 'application/json; charset=utf-8',
};

export const instance = axios.create({ baseURL: API_URL, headers });
