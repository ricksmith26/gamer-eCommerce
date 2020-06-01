import axios from 'axios';

const URL = 'https://cxgdarwya4.execute-api.eu-west-2.amazonaws.com/dev';
const headers = {
  'Content-Type': 'application/json',
}
export const createOrder = async (order) => {
    const res = await axios.post(URL + '/orders/createOrder', order, {headers});
  return res.data;
};