import axios from 'axios';

const URL = 'https://sxgtr83iji.execute-api.us-east-1.amazonaws.com/dev/';

export const getProductsByTerm = async (id) => {
	const res = await axios.get(URL + `/products/term/${id}`);
	return res.data;
};

export const getProductsBySubcategory = async (id) => {
	const res = await axios.get(URL + `/products/subcategory/${id}`);
	return res.data;
};

export const getProductById = async (id) => {
	const res = await axios.get(URL + `/products/id/${id}`);
	return res.data[0];
};

export const getSaleItems = async () => {
	const res = await axios.get(URL + '/products/getSaleGames');
	return res.data;
}

export const getSaleHardware = async () => {
	const res = await axios.get(URL + '/products/getSaleHardware');
	return res.data;
}
export const getMoreLikeThis = async (id) => {
	const res = await axios.get(URL + `/products/getMoreLikeThis/${id}`);
	return res.data;
}

export const getTitle = async (subcategory, term = 'none') => {
	const res = await axios.post(URL + `/products/getTitle`, { term, subcategory})
	return res.data;
}

export const getSearch = async (search) => {
	const res = await axios.get(URL + `/products/search/${search}`)
	return res.data;
}