const getAll = require('./contacts/getAll');
const operations = require('./contacts/index');
const { program } = require('commander');

const invokeAction = async ({ action, id, name, surname, number }) => {
	switch (action) {
		case 'getAll':
			const contacts = await operations.getAll();
			console.log('contacts: ', contacts);
			break;
		case 'getContactById':
			const contact = await operations.getContactById(id);
			console.log(contact);
			break;
		case 'removeContactById':
			const removedContact = await operations.removeContactById(id);
			console.log(removedContact);
			break;
		case 'addContact':
			const addedContact = await operations.addContact(name, surname, number);
			console.log(addedContact);
			break;
		default:
			console.log('Unknown action');
	}
};

// invokeAction({ action: 'getAll' });
// invokeAction({ action: 'getContactById', id: 1 });
// invokeAction({ action: 'removeContactById', id: 1 });
// invokeAction({
// 	action: 'addContact',
// 	name: 'John Jr.',
// 	number: '+3212232332',
// 	surname: 'Smith',
// });

program
	.option('-a, --action <type>', 'contact operation')
	.option('-i, --id <type>', 'contact id')
	.option('-n, --name <type>', 'contact name')
	.option('-num, --number <type>', 'contact phone')
	.option('-s, --surname <type>', 'contact surname');

program.parse();
const options = program.opts();
invokeAction(options);
