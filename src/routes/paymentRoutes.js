import axios from 'axios';

const URL = 'https://sxgtr83iji.execute-api.us-east-1.amazonaws.com/dev';
const headers = {
    'Access-Control-Allow-Origin': 'https://master.d3s10xhhiupkua.amplifyapp.com/'
  };

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
