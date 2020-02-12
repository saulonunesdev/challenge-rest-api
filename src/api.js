import machineModels from './models/machineModels';
import pricingModels from './models/pricingModels';

const machine = {
	getMachinebyId (ctx, next) {
		const ret = machineModels.findMachineById(ctx.params.id);
		ctx.status = ret === 'Not Found' ? 404 : 200;
		ctx.body = ret;
	},
	updateMachinePricing (ctx, next) {
		const ret = machineModels.updateMachinePricing(ctx.params.machineId, ctx.params.pricingId);
		ctx.status = ret === 'Not Found' ? 404 : 200;
		ctx.body = ret;
	},
	deleteMachinePricing (ctx, next) {
		const ret = machineModels.deleteMachinePricing(ctx.params.machineId, ctx.params.pricingId);
		ctx.status = ret === 'Not Found' ? 404 : 200;
		ctx.body = ret === 'Not Found' ? ret : machineModels.findMachineById(ctx.params.machineId);
	}
};

const prices = {
	getAllPricing (ctx, next) {
		ctx.body = pricingModels.findAllPricing();
	},
	getPricebyId (ctx, netx) {
		const ret = pricingModels.findPricebyId(ctx.params.id);
		ctx.status = ret === 'Not Found' ? 404 : 200;
		ctx.body = ret;
	},
	getPricingbyId (ctx, netx) {
		const ret =pricingModels.findPricingbyId(ctx.params.id);
		ctx.status = ret === 'Not Found' ? 404 : 200;
		ctx.body = ret;
	},
	putPricingById (ctx, next) {
		Object.keys(ctx.request.body).forEach(key => {
			pricingModels.setPricingMetaData(ctx.params.id, key, ctx.request.body[key]);
		});
		const ret = pricingModels.findPricebyId(ctx.params.id);
		ctx.status = ret === 'Not Found' ? 404 : 200;
		ctx.body = ret;
	},
	postPricingModel (ctx, next) {
		ctx.body = pricingModels.savePricingModel(ctx.request.body.name);
	},
	postPricingPrices (ctx, next) {
		pricingModels.savePricingPrices(ctx.params.id, ctx.request.body.pricing);
		const ret = pricingModels.findPricebyId(ctx.params.id);
		ctx.status = ret === 'Not Found' ? 404 : 200;
		ctx.body = ret;
	},
	deletePricingPrice (ctx, next) {
		let ret = pricingModels.deletePricingPrice(ctx.params.pricingId, ctx.params.priceId);
		ctx.status = ret === 'Not Found' ? 404 : 200;
		ctx.body = ret === 'Not Found' ? ret : pricingModels.findPricebyId(ctx.params.pricingId);
	}
};

module.exports = {
	machine,
	prices
};
