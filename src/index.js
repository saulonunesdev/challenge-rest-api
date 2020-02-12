import dotenv from 'dotenv';
import Koa from 'koa';
import Router from 'koa-router';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import { machine, prices } from './api';

dotenv.config();

const app = new Koa();
app.use(bodyParser());
app.use(cors());

const PORT = process.env.PORT || 1337;
const router = new Router();

router
	.get('/machines/:id/prices', machine.getMachinebyId)
	.put('/machines/:machineId/prices/:pricingId', machine.updateMachinePricing)
	.delete('/machines/:machineId/prices/:pricingId', machine.deleteMachinePricing)
	.get('/pricing-models', prices.getAllPricing)
	.get('/pricing-models/:id', prices.getPricebyId)
	.get('/pricing-models/:id/prices', prices.getPricingbyId)
	.put('/pricing-models/:id', prices.putPricingById)
	.post('/pricing-models', prices.postPricingModel)
	.post('/pricing-models/:id/prices', prices.postPricingPrices)
	.delete('/pricing-models/:pricingId/prices/:priceId', prices.deletePricingPrice);

app
	.use(router.routes())
	.listen(PORT, () =>
		console.log(`Server listening on port ${PORT}`)
	);
