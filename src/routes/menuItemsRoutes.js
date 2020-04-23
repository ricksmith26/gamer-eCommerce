import axios from 'axios';

const URL = 'http://192.168.1.12:9000';

export const getMenuItems = async () => {
    const res = await axios.get(URL + '/menuItems');
  return res.data;
};