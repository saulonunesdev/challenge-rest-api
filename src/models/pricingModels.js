var pricing = require('../../prices.json');
const utils = require('../utils');
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

function savePricingPrices (pricingId, prices) {
	if (prices.length === 0) {
		return;
	}

	const price = pricing[pricingId];

	if (!price) {
		return 'not found';
	}

	pricing = {
		...pricing,
		[pricingId]: {
			...price,
			pricing: prices
		}
	};

	fs.writeFile('prices.json', JSON.stringify(pricing), 'utf8', () => {
		console.log(`Price.pricing new_value: ${prices} `);
	});
}

function savePricingModel (name) {
	const id = utils.createFromPattern('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxcxxxxxx');

	pricing[id] = {
		id: id,
		name: name,
		pricing: []
	};

	fs.writeFile('prices.json', JSON.stringify(pricing), 'utf8', () => {
		console.log(`Price.${id} new_value: ${pricing[id]} `);
	});

	return {id: id};
}

function deletePricingPrice (pricingId, priceId) {
	let price = pricing[pricingId];

	if (!price || price.pricing.length === 0 || price.pricing.findIndex(element => element.id === Number(priceId)) === -1) {
		return 'not found';
	}

	pricing = {
		...pricing,
		[pricingId]: {
			...price,
			pricing: price.pricing.filter(elem => elem.id !== Number(priceId))
		}
	};

	fs.writeFile('prices.json', JSON.stringify(pricing), 'utf8', () => {
		console.log(`Price.pricing removed: ${price} `);
	});
}

module.exports = {
	findAllPricing,
	findPricebyId,
	findPricingbyId,
	setPricingMetaData,
	savePricingModel,
	savePricingPrices,
	deletePricingPrice
};
