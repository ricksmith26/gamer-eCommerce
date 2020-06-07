import axios from 'axios';

const URL = 'https://cedv5097xe.execute-api.eu-west-2.amazonaws.com/latest';
const headers = {
  'Content-Type': 'application/json',
}
export const createOrder = async (order) => {
    const res = await axios.post(URL + '/orders/createOrder', order, {headers});
  return res.data;
};