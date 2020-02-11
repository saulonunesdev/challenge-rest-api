const machines = require('../../machines.json');
const pricing = require('../../prices.json');

let data = { ...machines };

function findMachineById (id) {
	const obj = {
		...data[id],
		pricing: pricing[id] ? pricing[id] : pricing.default_pricing
	};
	return data[id] ? obj : 'not found';
}

module.exports = {
	findMachineById
};
