const utils = {
	randomAlphaNumeric () {
		return Math.random().toString(36).charAt(2);
	},
	createFromPattern (pattern) {
		pattern = pattern.split('');
		return pattern.map(x => x.replace('x', this.randomAlphaNumeric())).join('');
	}
};

export default utils;
