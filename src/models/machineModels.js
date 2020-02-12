import data from '../../machines.json';
import pricingData from '../../prices.json';

var machines = { ...data };

const machineModels = {
	findMachineById (id) {
		const obj = {
			...machines[id],
			pricing: pricingData[machines[id].pricing_id] ? pricingData[machines[id].pricing_id] : pricingData.default_pricing
		};
		return machines[id] ? obj : 'not found';
	}
};

export default machineModels;
