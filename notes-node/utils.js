const getPadding = (string, maxLength) => {
	if (string.length >= maxLength) {
		return 0;
	}
	return Math.floor((maxLength - string.length) / 2);
};

const pad = (string, padding, paddingString = ' ') =>
	paddingString.repeat(padding) + string + paddingString.repeat(padding);

const logMessage = ({
	title = '',
	body = '',
	options = {
		messageWidth: 20,
		upperCaseTitle: true
	}
}) => {
	const { messageWidth, upperCaseTitle } = options;

	if (title && body) {
		const paddedTitle = pad(title, getPadding(title, messageWidth));
		console.log(
			'\x1b[35m%s\x1b[0m',
			`
${'-'.repeat(messageWidth)}
${upperCaseTitle ? paddedTitle.toUpperCase() : paddedTitle}
${'-'.repeat(messageWidth)}
${body}
`
		);
	}
};

module.exports = { logMessage };
