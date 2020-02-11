const pricing = require('../../prices.json');

const data = { ...pricing };

function adjustData (obj) {
	const resp = {
		defaultPricing: obj.default_pricing,
		prices: delete obj.default_pricing ? Object.keys(obj).map(key => obj[key]) : {}
	};
	return resp;
}


function findAllPricing () {
	return adjustData(data);
}

function findPricebyId (id) {
	return pricing[id] ? pricing[id] : 'not found';
}

function findPricingbyId (id) {
	return pricing[id] ? pricing[id].pricing : 'not found';
}

module.exports = {
	findAllPricing,
	findPricebyId,
	findPricingbyId
};
