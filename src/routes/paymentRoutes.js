import axios from 'axios';

const URL = 'https://cxgdarwya4.execute-api.eu-west-2.amazonaws.com/dev';
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
    console.log(id, 'ID<<<')
    const res = await axios.post(URL + '/payments/paymentMethods', {id}, {headers});
    return res.data
}
