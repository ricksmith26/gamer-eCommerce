import axios from 'axios';

const URL = 'https://master.d3s10xhhiupkua.amplifyapp.com/';

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
