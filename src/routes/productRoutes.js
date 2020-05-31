import client from './client';

export const getProductsByTerm = async (id) => {
	const res = await client.get(URL + `/products/term/${id}`);
	return res.data;
};

export const getProductsBySubcategory = async (id) => {
	const res = await client.get(URL + `/products/subcategory/${id}`);
	return res.data;
};

export const getProductById = async (id) => {
	const res = await client.get(URL + `/products/id/${id}`);
	return res.data[0];
};

export const getSaleItems = async () => {
	const res = await client.get(URL + '/products/getSaleGames');
	return res.data;
}

export const getSaleHardware = async () => {
	const res = await client.get(URL + '/products/getSaleHardware');
	return res.data;
}
export const getMoreLikeThis = async (id) => {
	const res = await client.get(URL + `/products/getMoreLikeThis/${id}`);
	return res.data;
}

export const getTitle = async (subcategory, term = 'none') => {
	const res = await client.post(URL + `/products/getTitle`, { term, subcategory})
	return res.data;
}

export const getSearch = async (search) => {
	const res = await client.get(URL + `/products/search/${search}`)
	return res.data;
}