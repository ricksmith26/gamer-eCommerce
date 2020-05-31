import axios from 'axios';

const URL = 'https://master.d3s10xhhiupkua.amplifyapp.com/';

export const getMenuItems = async () => {
  const res = await axios.get(URL + '/menuItems');
  console.log(res.data, '<<<<<<<RESDATA')
  return res.data;
};