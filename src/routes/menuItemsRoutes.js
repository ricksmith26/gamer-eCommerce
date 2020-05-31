import client from './client';

export const getMenuItems = async () => {
    const res = await client.get(URL + '/menuItems');
  return res.data;
};