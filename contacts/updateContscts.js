const filePath = require('./filePath');
const { writeFile } = require('fs/promises');

const updateContacts = async contacts => {
	// ! we need them to be in a json format
	await writeFile(filePath, JSON.stringify(contacts));
};

module.exports = updateContacts;
