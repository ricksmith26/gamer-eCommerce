import axios from 'axios';

const URL = 'https://sxgtr83iji.execute-api.us-east-1.amazonaws.com/dev/';

export const getMenuItems = async () => {
  
    const res = await axios.get(URL + '/menuItems');
  return res.data;
};