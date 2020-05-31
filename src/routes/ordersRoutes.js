import axios from 'axios';

const URL = 'https://sxgtr83iji.execute-api.us-east-1.amazonaws.com/dev/';

export const createOrder = async (order) => {
    const res = await axios.post(URL + '/orders/createOrder', order);
  return res.data;
};