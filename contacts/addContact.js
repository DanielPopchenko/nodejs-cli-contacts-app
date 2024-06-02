const { v4: uuidv4 } = require('uuid');
const getAll = require('./getAll');
const updateContacts = require('./updateContscts');

const addContact = async (name, surname, number) => {
	const contacts = await getAll();
	const newContact = {
		id: uuidv4(),
		name,
		surname,
		number,
	};

	contacts.push(newContact);
	await updateContacts(contacts);
	return newContact;
};

module.exports = addContact;
