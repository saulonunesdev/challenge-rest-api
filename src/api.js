import machineModels from './models/machineModels';
import pricingModels from './models/pricingModels';

const machine = {
	getMachinebyId (ctx, next) {
		ctx.body = machineModels.findMachineById(ctx.params.id);
	},
	updateMachinePricing (ctx, next) {
		ctx.body = machineModels.updateMachinePricing(ctx.params.machineId, ctx.params.pricingId);
	},
	deleteMachinePricing (ctx, next) {
		ctx.body = machineModels.deleteMachinePricing(ctx.params.machineId, ctx.params.pricingId);
	}
};

const prices = {
	getAllPricing (ctx, next) {
		ctx.body = pricingModels.findAllPricing();
	},
	getPricebyId (ctx, netx) {
		ctx.body = pricingModels.findPricebyId(ctx.params.id);
	},
	getPricingbyId (ctx, netx) {
		ctx.body = pricingModels.findPricingbyId(ctx.params.id);
	},
	putPricingById (ctx, next) {
		Object.keys(ctx.request.body).forEach(key => {
			pricingModels.setPricingMetaData(ctx.params.id, key, ctx.request.body[key]);
		});
		ctx.body = pricingModels.findPricebyId(ctx.params.id);
	},
	postPricingModel (ctx, next) {
		ctx.body = pricingModels.savePricingModel(ctx.request.body.name);
	},
	postPricingPrices (ctx, next) {
		pricingModels.savePricingPrices(ctx.params.id, ctx.request.body.pricing);
		ctx.body = pricingModels.findPricebyId(ctx.params.id);
	},
	deletePricingPrice (ctx, next) {
		ctx.body = pricingModels.deletePricingPrice(
			ctx.params.pricingId, ctx.params.priceId) === 'not found' ?
			'not found' :
			pricingModels.findPricebyId(ctx.params.pricingId
			);
	}
};

module.exports = {
	machine,
	prices
};
