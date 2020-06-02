import axios from 'axios';

const URL = 'https://cxgdarwya4.execute-api.eu-west-2.amazonaws.com/dev';
const headers = {
  'Content-Type': 'application/json',
}

export const getMenuItems = async () => {
  
    const res = await axios.get(URL + '/menuItems/', {headers});
    
  return res.data;
};