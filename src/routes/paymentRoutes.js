import axios from 'axios';

const URL = 'https://p2jjqvd8ga.execute-api.eu-west-2.amazonaws.com/latest';
const headers = {
    'Content-Type': 'application/json',
  }
export const storeToken = async (token) => {
	const res = await axios.post(URL + '/payments', token, {headers});
	return res.data;
};

export const createIntent = async (basket) => {
    const res = await axios.post(URL + '/payments/intent', basket, {headers});
    return res.data
}
export const intentStored = async (id) => {
    const res = await axios.post(URL + '/payments/paymentMethods', {id}, {headers});
    return res.data
}
