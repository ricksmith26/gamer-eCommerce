import axios from 'axios';

const URL = 'http://192.168.1.12:9000';

export const createOrder = async (order) => {
    const res = await axios.post(URL + '/orders/createOrder', order);
  return res.data;
};