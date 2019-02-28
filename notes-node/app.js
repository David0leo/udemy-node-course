console.log('\x1b[36m%s\x1b[0m', 'Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
let command = process.argv[2];

const NOTE_CREATED_MESSAGE = note => `Note Created:
-------------
Title: ${note.title}
--
Body: ${note.body}
--
`;

const { title, body } = argv;

if (command === 'add') {
	const note = notes.addNote(title, body);
	note
		? console.log('\x1b[35m%s\x1b[0m', NOTE_CREATED_MESSAGE(note))
		: console.log('\x1b[35m%s\x1b[0m', 'Note not added successfully.');
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	notes.getNote(title);
} else if (command === 'remove') {
	notes.removeNote(title);
} else {
	console.log('Command not recognized.');
}
