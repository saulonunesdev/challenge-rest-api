function randomAlphaNumeric () {
	return Math.random().toString(36).charAt(2);
}

function createFromPattern (pattern) {
	pattern = pattern.split('');
	return pattern.map(x => x.replace('x', randomAlphaNumeric())).join('');
}

module.exports = { createFromPattern };
