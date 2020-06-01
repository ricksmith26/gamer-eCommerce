import axios from 'axios';

const URL = 'http://localhost:3000/dev';

export const createOrder = async (order) => {
    const res = await axios.post(URL + '/orders/createOrder', order);
  return res.data;
};