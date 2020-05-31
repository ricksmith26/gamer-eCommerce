import axios from 'axios';
import { addToCache } from '../utils/cache';

const URL = 'https://master.d3s10xhhiupkua.amplifyapp.com/';

export const registerUser = async (userRequest) => {
	const res = await axios.post(URL + '/users/register', userRequest);
	delete userRequest['user_password'];
	addToCache('game_shack_user', res.data);
	return res;
};

export const loginFromToken = async (token) => {
	const res = await axios.get(URL + `/users/token/${token}`);
	return res.data;
}

export const loginFromEmail = async (loginDetails) => {
	const res = await axios.post(URL + '/users/login', loginDetails);
	return res.data
}