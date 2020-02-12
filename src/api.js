const machineModels = require('./models/machineModels');
const pricingModels = require('./models/pricingModels');

const machine = {
	getMachinebyId (ctx, netx) {
		const { id } = ctx.params;
		console.log(ctx.params);
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
	},
	putPricingById (ctx, next) {
		const { body } = ctx.request;
		const { id } = ctx.params;

		Object.keys(body).forEach(key => {
			pricingModels.setPricingMetaData(id, key, body[key]);
		});

		ctx.body = pricingModels.findPricebyId(id);
	},
	postPricingModel (ctx, next) {
		const { body } = ctx.request;

		ctx.body = pricingModels.savePricingModel(body.name);
	},
	postPricingPrices (ctx, next) {
		const { body } = ctx.request;
		const { id } = ctx.params;

		console.log(body);

		pricingModels.savePricingPrices(id, body.pricing);

		ctx.body = pricingModels.findPricebyId(id);
	}
};

module.exports = {
	machine,
	prices
};
