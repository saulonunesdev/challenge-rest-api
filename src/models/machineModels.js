import data from '../../machines.json';
import pricingData from '../../prices.json';
import fs from 'fs';

var machines = { ...data };

const machineModels = {
	findMachineById (id) {
		if (!machines[id]) {
			return 'not found';
		}

		const obj = {
			...machines[id],
			pricing: pricingData[machines[id].pricing_id] ?
				pricingData[machines[id].pricing_id] :
				{
					id: '',
					name: 'default_pricing',
					pricing: pricingData.default_pricing
				}
		};
		return obj;
	},
	updateMachinePricing (machineId, pricingId) {
		if (!machines[machineId] || !pricingData[pricingId]) {
			return 'not found';
		}

		machines = {
			...machines,
			[machineId]: {
				...machines[machineId],
				// eslint-disable-next-line camelcase
				pricing_id: pricingId
			}
		};

		fs.writeFile('machines.json', JSON.stringify(machines), 'utf8', () => {
			console.log('Machine.' + machineId + '.pricing_id new_value: ' + pricingId);
		});

		return this.findMachineById(machineId);
	},
	deleteMachinePricing (machineId, pricingId) {
		if (!machines[machineId] || !machines[machineId].pricing_id) {
			return 'not found';
		}

		machines = {
			...machines,
			[machineId]: {
				...machines[machineId],
				// eslint-disable-next-line camelcase
				pricing_id: ''
			}
		};

		fs.writeFile('machines.json', JSON.stringify(machines), 'utf8', () => {
			console.log('Machine.' + machineId + '.pricing_id removed: ' + pricingId);
		});

		return this.findMachineById(machineId);
	}
};

export default machineModels;
