import dotenv from 'dotenv';
import Koa from 'koa';
import Router from 'koa-router';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import { getAllMachines, getAllPricing } from './api';

dotenv.config();

const app = new Koa();
app.use(bodyParser());
app.use(cors());

const PORT = process.env.PORT || 1337;
const router = new Router();

router
	.get('/machines', getAllMachines)
	.get('/pricing-models', getAllPricing);

app
	.use(router.routes())
	.listen(PORT, () =>
		console.log(`Server listening on port ${PORT}`)
	);
