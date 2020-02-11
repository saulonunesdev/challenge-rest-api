const pricing = require('../../prices.json');

let data = { ...pricing };

function findAllPricing () {
	return data;
}

module.exports = {
	findAllPricing
};
