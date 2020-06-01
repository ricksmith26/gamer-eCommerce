import axios from 'axios';
import { addToCache } from '../utils/cache';

const URL = 'https://sxgtr83iji.execute-api.us-east-1.amazonaws.com/dev/';
const headers = {
	'Access-Control-Allow-Origin': 'https://master.d3s10xhhiupkua.amplifyapp.com/'
  };

export const registerUser = async (userRequest) => {
	const res = await fetch.post(URL + '/users/register', userRequest, {headers});
	delete userRequest['user_password'];
	addToCache('game_shack_user', res.data);
	return res;
};

export const loginFromToken = async (token) => {
	const res = await fetch.get(URL + `/users/token/${token}`, {headers});
	return res.data;
}

export const loginFromEmail = async (loginDetails) => {
	const res = await fetch.post(URL + '/users/login', loginDetails, {headers});
	return res.data
}