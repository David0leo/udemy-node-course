console.log('\x1b[36m%s\x1b[0m', 'Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

let command = process.argv[2];

if (command === 'add') {
	console.log('Adding a note.');
} else if (command === 'list') {
	console.log('Listing all notes.');
} else if (command === 'read') {
	console.log('Reading note.');
} else if (command === 'remove') {
	console.log('Removing note.');
} else {
	console.log('Command not recognized.');
}
