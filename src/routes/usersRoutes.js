
import { addToCache } from '../utils/cache';
import client from './client';
const URL = 'https://sxgtr83iji.execute-api.us-east-1.amazonaws.com/dev';


export const registerUser = async (userRequest) => {
	const res = await client.post(URL + '/users/register', userRequest);
	delete userRequest['user_password'];
	addToCache('game_shack_user', res.data);
	return res;
};

export const loginFromToken = async (token) => {
	const res = await client.get(URL + `/users/token/${token}`);
	return res.data;
}

export const loginFromEmail = async (loginDetails) => {
	const res = await client.post(URL + '/users/login', loginDetails);
	return res.data
}