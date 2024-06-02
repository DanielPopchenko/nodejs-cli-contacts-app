const fs = require('fs/promises');
const filePath = require('./filePath');

const getAll = async () => {
	const products = await fs.readFile(filePath);
	const data = JSON.parse(products);

	return data;
};

module.exports = getAll;
