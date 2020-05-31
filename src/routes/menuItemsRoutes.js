import axios from 'axios';

const URL = 'https://master.d3s10xhhiupkua.amplifyapp.com/';

export const getMenuItems = async () => {
    console.log(res.data, '<<<<<<<RESDATA')
    const res = await axios.get(URL + '/menuItems');
  return res.data;
};