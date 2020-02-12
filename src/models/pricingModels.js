var pricing = require('../../prices.json');
var fs = require('fs');

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

function setPricingMetaData (pricingId, key, value) {
	if (key === 'id' || key === 'pricing') {
		return;
	}

	const price = pricing[pricingId];

	if (!price || (price && !price[key])) {
		return;
	}

	pricing = {
		...pricing,
		[pricingId]: {
			...price,
			[key]: value
		}
	};

	fs.writeFile('prices.json', JSON.stringify(pricing), 'utf8', () => {
		console.log(`Price.${key} new_value: ${value} `);
	});
}

module.exports = {
	findAllPricing,
	findPricebyId,
	findPricingbyId,
	setPricingMetaData
};
