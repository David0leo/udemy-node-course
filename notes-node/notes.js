console.log('\x1b[36m%s\x1b[0m', 'Starting notes.js');

const addNote = (title, body) => {
	console.log('Adding Note:', title, body);
};

const getAll = () => {
	console.log('Getting all notes...');
};

const getNote = title => {
	console.log('Getting note', title);
};

const removeNote = title => {
	console.log('Removing note', title);
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};
