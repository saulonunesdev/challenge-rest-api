const machineModels = require('./models/machineModels');
const pricingModels = require('./models/pricingModels');

function getAllMachines (ctx, next) {
	ctx.body = machineModels.findAllMachines();
}

function getAllPricing (ctx, next) {
	ctx.body = pricingModels.findAllPricing();
}

module.exports = {
	getAllMachines,
	getAllPricing
};
