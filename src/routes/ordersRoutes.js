import axios from 'axios';

const URL = 'https://4xlfxhhwkg.execute-api.us-east-2.amazonaws.com/latest';
const headers = {
  'Content-Type': 'application/json',
}
export const createOrder = async (order) => {
    const res = await axios.post(URL + '/orders/createOrder', order, {headers});
  return res.data;
};
