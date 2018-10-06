const api = require('./api');
const express = require('express');
const path = require('path');
const rootPath = require('app-root-path').path;


module.exports = (app) => {
	app.use('/api', api);

	app.use((err, req, res, next) => {
		console.error('SOME ERR', err);
		res.status(400).send({ message: err && err.message ? err.message : err });
	});

	app.use(express.static(path.join(rootPath, '..', 'frontend', 'build')));
	app.get('/*', (req, res) => {
		res.sendFile(path.join(rootPath, '..', 'frontend', 'build', 'index.html'));
	});
};
