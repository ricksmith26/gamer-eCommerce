import axios from 'axios';

const URL = 'https://4xlfxhhwkg.execute-api.us-east-2.amazonaws.com/latest';
const headers = {
  'Content-Type': 'application/json',
}

export const getMenuItems = async () => {
  
    const res = await axios.get(URL + '/menuItems/', {headers});
    
  return res.data;
};
