import axios from 'axios';

const URL = 'https://sxgtr83iji.execute-api.us-east-1.amazonaws.com/dev';
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
}
export const createOrder = async (order) => {
    const res = await axios.post(URL + '/orders/createOrder', order, {headers});
  return res.data;
};