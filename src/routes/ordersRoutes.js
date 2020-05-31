import axios from 'axios';

const URL = 'https://master.d3s10xhhiupkua.amplifyapp.com/';

export const createOrder = async (order) => {
    const res = await axios.post(URL + '/orders/createOrder', order);
  return res.data;
};