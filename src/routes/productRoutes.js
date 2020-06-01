import axios from 'axios';

const URL = 'https://cxgdarwya4.execute-api.eu-west-2.amazonaws.com/dev';
const headers = {
	'Content-Type': 'application/json',
  }
export const getProductsByTerm = async (id) => {
	const res = await axios.get(URL + `/products/term/${id}`, {headers});
	return res.data;
};

export const getProductsBySubcategory = async (id) => {
	const res = await axios.get(URL + `/products/subcategory/${id}`, {headers});
	return res.data;
};

export const getProductById = async (id) => {
	const res = await axios.get(URL + `/products/id/${id}`, {headers});
	return res.data[0];
};

export const getSaleItems = async () => {
	const res = await axios.get(URL + '/products/getSaleGames', {headers});
	return res.data;
}

export const getSaleHardware = async () => {
	const res = await axios.get(URL + '/products/getSaleHardware', {headers});
	return res.data;
}
export const getMoreLikeThis = async (id) => {
	const res = await axios.get(URL + `/products/getMoreLikeThis/${id}`, {headers});
	return res.data;
}

export const getTitle = async (subcategory, term = 'none') => {
	const res = await axios.post(URL + `/products/getTitle`, { term, subcategory}, {headers})
	return res.data;
}

export const getSearch = async (search) => {
	const res = await axios.get(URL + `/products/search/${search}`, {headers})
	return res.data;
}