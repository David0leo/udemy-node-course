// const obj = {
// 	name: 'David'
// };

// const stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// const personString = '{"name":"David", "age":25}';
// const personObj = JSON.parse(personString);

// console.log(typeof personObj);
// console.log(personObj);

const fs = require('fs');

const originalNote = {
	title: 'Some title',
	body: 'Somebody'
};
const originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);

console.log(
	'typeof originalNote = typeof note |',
	typeof originalNote,
	typeof note,
	typeof originalNote === typeof note
);
console.log('originalNote = note |', originalNote, note);
