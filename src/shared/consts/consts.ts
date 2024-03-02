import md5 from 'md5';
import getDateView from '../utils/timestamp';

export const AUTH_HASH = md5(`${__PASSWORD}_${getDateView('timestamp')}`);
export const API_URL = 'https://api.valantis.store:41000/';
