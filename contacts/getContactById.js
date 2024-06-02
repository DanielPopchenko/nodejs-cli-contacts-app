const getAll = require('./getAll');

const getContactById = async id => {
	const products = await getAll();
	const contact = products.find(product => product.id === id);
	return contact;
};

module.exports = getContactById;
