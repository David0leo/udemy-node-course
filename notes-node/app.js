console.log('\x1b[36m%s\x1b[0m', 'Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
const { logMessage } = require('./utils');

const argv = yargs.argv;
let command = process.argv[2];

const { title, body } = argv;

if (command === 'add') {
	const note = notes.addNote(title, body);
	note
		? logMessage({
				title: 'Note created',
				body: `Title: ${note.title}\nBody: ${note.body}`
		  })
		: logMessage({
				title: 'Note not created',
				body: `Note with title, "${title}", already exists.`
		  });
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	const note = notes.getNote(title);
	note
		? logMessage({
				title: 'Note read',
				body: `Title: ${note.title}\nBody: ${note.body}`
		  })
		: logMessage({
				title: 'Note not read',
				body: `Note with title "${title}" not found.`
		  });
} else if (command === 'remove') {
	notes.removeNote(title)
		? logMessage({ title: 'Note removed' })
		: logMessage({
				title: 'Note not removed',
				body: `Note with title "${title}" not found.`
		  });
} else {
	console.log('Command not recognized.');
}
