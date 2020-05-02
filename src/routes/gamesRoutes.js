import axios from 'axios';

const URL = 'http://localhost:9000';

export const getGamesByTerm = async (id) => {
    const res = await axios.get(URL + `/games/term/${id}`);
    console.log(res, '<<<<<<<<<<<<<<<<<<<<<,,')
  return res.data;
};

export const getGamesBySubcategory = async (id) => {
  const res = await axios.get(URL + `/games/subcategory/${id}`);
  console.log(res, '<<<<<<<<<<<<<<<<<<<<<,,')
return res.data;
};
