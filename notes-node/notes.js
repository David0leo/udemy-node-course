const fs = require('fs');

const utils = require('./utils');

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
	const notes = fetchNotes();
	const note = { title, body };

	const duplicateNotes = notes.filter(note => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

const logNote = note => {
	utils.logMessage({
		...note,
		options: {
			upperCaseTitle: false,
			messageWidth: 20
		}
	});
};

const getAll = () => fetchNotes().forEach(note => logNote(note));

const getNote = title => {
	const notes = fetchNotes();
	for (let i = 0; i < notes.length; i += 1) {
		if (notes[i].title === title) {
			return notes[i];
		}
	}
};

const removeNote = title => {
	const notes = fetchNotes();
	const filteredNotes = notes.filter(note => note.title !== title);

	saveNotes(filteredNotes);

	return notes.length === filteredNotes;
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};
