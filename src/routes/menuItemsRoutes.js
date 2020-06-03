import axios from 'axios';

const URL = 'https://klc3e3ydi2.execute-api.eu-west-2.amazonaws.com/latest';
const headers = {
  'Content-Type': 'application/json',
}

export const getMenuItems = async () => {
  
    const res = await axios.get(URL + '/menuItems/', {headers});
    
  return res.data;
};