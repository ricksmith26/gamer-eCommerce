import client from './client';
const URL = 'https://sxgtr83iji.execute-api.us-east-1.amazonaws.com/dev';

export const storeToken = async (token) => {
	const res = await client.post(URL + '/payments', token);
	return res.data;
};

export const createIntent = async (basket) => {
    const res = await client.post(URL + '/payments/intent', basket);
    return res.data
}
export const intentStored = async (id) => {
    console.log(id, 'ID<<<')
    const res = await client.post(URL + '/payments/paymentMethods', {id});
    return res.data
}
