const getAll = require('./getAll');
const updateContacts = require('./updateContscts');

const removeContactById = async contactId => {
	const contacts = await getAll();
	const idx = contacts.findIndex(contact => contact.id === contactId);
	if (idx === -1) {
		return null;
	}

	const [removedContact] = contacts.splice(idx, 1);
	await updateContacts(contacts);
	return removedContact;
};

module.exports = removeContactById;
