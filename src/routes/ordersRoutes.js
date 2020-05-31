import client from './client';
const URL = 'https://sxgtr83iji.execute-api.us-east-1.amazonaws.com/dev';

export const createOrder = async (order) => {
    const res = await client.post(URL + '/orders/createOrder', order);
  return res.data;
};