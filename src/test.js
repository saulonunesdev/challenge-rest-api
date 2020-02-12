import request from 'supertest';
import app from './app';

it('GET Valid /machines/:id/prices', async () => {
	const response = await request(app.callback()).get('/machines/99ade105-dee1-49eb-8ac4-e4d272f89fba/prices');
	expect(response.status).toBe(200);
	expect(response.type).toBe('application\/json');
});

it('GET Invalid /machines/:id/prices', async () => {
	const response = await request(app.callback()).get('/machines/11111111-dee1-49eb-8ac4-e4d272f89fba/prices');
	expect(response.status).toBe(404);
	expect(response.text).toBe('Not Found');
});

it('DELETE Invalid priceId /machines/:machineId/prices/:priceId', async () => {
	const response = await request(app.callback()).delete('/machines/99ade105-dee1-49eb-8ac4-e4d272f89fba/prices/44444');
	expect(response.status).toBe(404);
	expect(response.text).toBe('Not Found');
});

it('DELETE Invalid machineId /machines/:machineId/prices/:priceId', async () => {
	const response = await request(app.callback()).delete('/machines/33333b-8ac4-e4d272f89fba/prices/44444');
	expect(response.status).toBe(404);
	expect(response.text).toBe('Not Found');
});

it('DELETE Valid /machines/:machineId/prices/:priceId', async () => {
	const response = await request(app.callback()).delete('/machines/99ade105-dee1-49eb-8ac4-e4d272f89fba/prices/3ba92095-3203-4888-a464-3c7d5d9acd7e');
	expect(response.status).toBe(200);
	expect(response.type).toBe('application\/json');
});

it('PUT Invalid priceId /machines/:machineId/prices/:priceId', async () => {
	const response = await request(app.callback()).put('/machines/99ade105-dee1-49eb-8ac4-e4d272f89fba/prices/44444');
	expect(response.status).toBe(404);
	expect(response.text).toBe('Not Found');
});

it('PUT Invalid machineId /machines/:machineId/prices/:priceId', async () => {
	const response = await request(app.callback()).put('/machines/93333333-dee1-49eb-8ac4-e4d272f89fba/prices/44444');
	expect(response.status).toBe(404);
	expect(response.text).toBe('Not Found');
});

it('PUT Valid /machines/:machineId/prices/:priceId', async () => {
	const response = await request(app.callback()).put('/machines/99ade105-dee1-49eb-8ac4-e4d272f89fba/prices/3ba92095-3203-4888-a464-3c7d5d9acd7e');
	expect(response.status).toBe(200);
	expect(response.type).toBe('application\/json');
});

it('GET /pricing-models', async () => {
	const response = await request(app.callback()).get('/pricing-models/');
	expect(response.status).toBe(200);
	expect(response.type).toBe('application\/json');
});

it('GET Valid /pricing-models/:id', async () => {
	const response = await request(app.callback()).get('/pricing-models/3ba92095-3203-4888-a464-3c7d5d9acd7e');
	expect(response.status).toBe(200);
	expect(response.type).toBe('application\/json');
});

it('GET Invalid /pricing-models/:id', async () => {
	const response = await request(app.callback()).get('/pricing-models/xxxxxxxx-3203-4888-a464-3c7d5d9acd7e');
	expect(response.status).toBe(404);
	expect(response.text).toBe('Not Found');
});

it('GET Valid /pricing-models/:id/prices', async () => {
	const response = await request(app.callback()).get('/pricing-models/3ba92095-3203-4888-a464-3c7d5d9acd7e/prices');
	expect(response.status).toBe(200);
	expect(response.type).toBe('application\/json');
});

it('GET Invalid /pricing-models/:id/prices', async () => {
	const response = await request(app.callback()).get('/pricing-models/xxxxxxxx-3203-4888-a464-3c7d5d9acd7e/prices');
	expect(response.status).toBe(404);
	expect(response.text).toBe('Not Found');
});

it('DELETE Invalid pricesId /pricing-models/:pricingId/prices/:pricesId', async () => {
	const response = await request(app.callback()).delete('/pricing-models/3ba92095-3203-4888-a464-3c7d5d9acd7e/prices/1');
	expect(response.status).toBe(404);
	expect(response.text).toBe('Not Found');
});

it('DELETE Invalid pricingId /pricing-models/:pricingId/prices/:pricesId', async () => {
	const response = await request(app.callback()).delete('/pricing-models/xxxxxx-3203-4888-a464-3c7d5d9acd7e/prices/1');
	expect(response.status).toBe(404);
	expect(response.text).toBe('Not Found');
});

it('DELETE Valid /pricing-models/:pricingId/prices/:pricesId', async () => {
	const response = await request(app.callback()).delete('/pricing-models/3ba92095-3203-4888-a464-3c7d5d9acd7e/prices/5');
	expect(response.status).toBe(200);
	expect(response.type).toBe('application\/json');
});
