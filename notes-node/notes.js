const fs = require('fs');

console.log('\x1b[36m%s\x1b[0m', 'Starting notes.js');

const fetchNotes = () => {
	try {
		const notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (e) {
		console.log('Something went wrong!');
		return [];
	}
};

const saveNotes = notes => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
	let notes = fetchNotes();
	const note = { title, body };

	const duplicateNotes = notes.filter(note => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	} else {
		console.log(
			'\x1b[31m%s\x1b[0m',
			'Note with that tile exists! Note not added.'
		);
	}
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
