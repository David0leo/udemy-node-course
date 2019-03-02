const request = require('request');

const url =
	'https://api.darksky.net/forecast/1c91e35be6719dcf8a854090c65159a2/53.5444,133.4909';

request({ url, json: true }, (error, response) => {
	const { temperature, precipProbability } = response.body.currently;

	console.log(response.body.currently);
	console.log(
		`It is currently ${temperature}°F out. There is a ${precipProbability *
			100}% change of precipitation.`
	);
});
