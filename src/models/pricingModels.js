import data from '../../prices.json';
import utils from '../utils';
import fs from 'fs';

var pricing = data;

const pricingModels = {
	findAllPricing () {
		const _data = { ...pricing };
		const resp = {
			// eslint-disable-next-line camelcase
			default_pricing: _data.default_pricing,
			prices: delete _data.default_pricing ? Object.keys(_data).map(key => _data[key]) : {}
		};
		return resp;
	},
	findPricebyId (id) {
		return pricing[id] ? pricing[id] : 'not found';
	},
	findPricingbyId (id) {
		return pricing[id] ? pricing[id].pricing : 'not found';
	},
	setPricingMetaData (pricingId, key, value) {
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
			console.log('Price.'+pricingId + '.' + key +' new_value: ' + JSON.stringify(value));
		});
	},
	savePricingPrices (pricingId, prices) {
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
			console.log('Price.' + pricingId +' new_value: ' + JSON.stringify(prices));
		});
	},
	savePricingModel (name) {
		const id = utils.createFromPattern('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxcxxxxxx');

		pricing[id] = {
			id: id,
			name: name,
			pricing: []
		};

		fs.writeFile('prices.json', JSON.stringify(pricing), 'utf8', () => {
			console.log('Price.' + id +' new_value: ' + JSON.stringify(pricing[id]));
		});

		return {id: id};
	},
	deletePricingPrice (pricingId, priceId) {
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
			console.log('Price.' + pricing +' removed: ' + JSON.stringify(price));
		});
	}
};

export default pricingModels;
