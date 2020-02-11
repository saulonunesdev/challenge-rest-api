const machineModels = require('./models/machineModels');
const pricingModels = require('./models/pricingModels');

const machine = {
	getMachinebyId (ctx, netx) {
		const { id } = ctx.params;
		ctx.body = machineModels.findMachineById(id);
	}
};

const prices = {
	getAllPricing (ctx, next) {
		ctx.body = pricingModels.findAllPricing();
	},
	getPricebyId (ctx, netx) {
		const { id } = ctx.params;
		ctx.body = pricingModels.findPricebyId(id);
	},
	getPricingbyId (ctx, netx) {
		const { id } = ctx.params;
		ctx.body = pricingModels.findPricingbyId(id);
	}
};

module.exports = {
	machine,
	prices
};
