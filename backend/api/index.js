const { Router } = require('express');

const routes = Router();

routes
	.use('/users', require('./users/'))
	.use('/permissions', require('./permissions'))
	.use('/directories', require('./directories'));


module.exports = routes;
