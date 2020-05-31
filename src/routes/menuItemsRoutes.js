import client from './client';
const URL = 'https://sxgtr83iji.execute-api.us-east-1.amazonaws.com/dev';

export const getMenuItems = () => {
	client.get(`${URL}/menuItems`).then(res => {
		return res.data;
	});
};