const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'hbs');

// serve up public
app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather App',
		name: 'David'
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Me',
		name: 'David Anderson'
	});
});

app.get('/help', (req, res) => {
	res.render('help', {
		helpText: 'This is some helpful text'
	});
});

app.get('/weather', (req, res) => {
	const weatherData = {
		location: 'Edmonton',
		forecast: 'seems nice'
	};
	res.send(weatherData);
});

app.listen(3000, () => {
	console.log('Server started on port 3000.');
});
