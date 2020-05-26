import axios from 'axios';

const URL = 'http://192.168.1.12:9000';

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