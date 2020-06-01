import axios from 'axios';

const URL = 'https://sxgtr83iji.execute-api.us-east-1.amazonaws.com/dev';
const headers = {
  'Access-Control-Allow-Origin': 'https://master.d3s10xhhiupkua.amplifyapp.com/'
};

export const getMenuItems = async () => {
  
    const res = await axios.get(URL + '/menuItems', {headers});
  return res.data;
};