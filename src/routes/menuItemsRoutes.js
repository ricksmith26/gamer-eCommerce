import axios from 'axios';

const URL = 'http://localhost:9000';

export const getMenuItems = async () => {
    const res = await axios.get(URL + '/menuItems');
  return res.data;
};