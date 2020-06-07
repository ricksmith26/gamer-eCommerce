import axios from 'axios';
import { addToCache } from '../utils/cache';

const URL = 'https://klc3e3ydi2.execute-api.eu-west-2.amazonaws.com/latest';
const headers = {
	'Content-Type': 'application/json',
  }

export const registerUser = async (userRequest) => {

	const res = await axios.post(URL + '/users/register', userRequest, {headers});

	delete userRequest['user_password'];

	addToCache('game_shack_user', res.data);

	return res;
};

export const loginFromToken = async (token) => {

	const res = await axios.get(URL + `/users/token/${token}`, {headers});

	return res;
}

export const loginFromEmail = async (loginDetails) => {

	const res = await axios.post(URL + '/users/login', loginDetails, {headers});
	
	return res.data
}