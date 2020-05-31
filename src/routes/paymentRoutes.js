import axios from 'axios';

const URL = 'http://192.168.1.12:9000';

export const storeToken = async (token) => {
	const res = await axios.post(URL + '/payments', token);
	return res.data;
};

export const createIntent = async (basket) => {
    const res = await axios.post(URL + '/payments/intent', basket);
    return res.data
}
export const intentStored = async (id) => {
    console.log(id, 'ID<<<')
    const res = await axios.post(URL + '/payments/paymentMethods', {id});
    return res.data
}
