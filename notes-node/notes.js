console.log('\x1b[36m%s\x1b[0m', 'Starting notes.js');

module.exports.add = (a, b) => a + b;

module.exports.addNote = () => {
	console.log('add note');
	return 'New note';
};
