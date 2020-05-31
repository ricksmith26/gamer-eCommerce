import client from './client';
const URL = 'https://sxgtr83iji.execute-api.us-east-1.amazonaws.com/dev';

export const getMenuItems = async () => {
    const res = await client.get(URL + '/menuItems');
  return res.data;
};