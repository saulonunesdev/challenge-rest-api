const machines = require('../../machines.json');

let data = { ...machines };

function findAllMachines () {
	return data;
}

function findMachineById (id) {
	return data[id];
}

module.exports = {
	findAllMachines,
	findMachineById
};
