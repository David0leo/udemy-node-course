console.log('\x1b[36m%s\x1b[0m', 'Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes');

console.log(_.uniq(['David', 1, 'David', 1, 2, 3, 4, '1']));

// let user = os.userInfo();

// fs.appendFileSync(
// 	'greetings.txt',
// 	`Hello ${user.username}! You are ${notes.age}.`
// );
