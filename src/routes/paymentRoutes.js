import axios from 'axios';
import { addToCache } from '../utils/cache';

const URL = 'http://192.168.1.12:9000';

export const storeToken = async (token) => {
	const res = await axios.post(URL + '/payments', token);
	return res.data;
};

export const createIntent = async (basket) => {
    const res = await axios.post(URL + '/payments/intent', basket);
    return res.data
}
