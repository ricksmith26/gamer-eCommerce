import axios from 'axios';

const URL = 'http://localhost:3000/dev';

export const getMenuItems = async () => {
  
    const res = await axios.get(URL + '/menuItems');
  return res.data;
};