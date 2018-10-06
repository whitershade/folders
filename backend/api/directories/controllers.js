const { pick } = require('lodash');
const { structure } = require('../mock.js');


const controllers = {
	getItems: (req, res) => {
		res.status(200).send(structure);
	},
};


module.exports = controllers;
