const { Router } = require('express');

const routes = Router();

routes
  .use('/users', require('./users/'))
  .use('/permissions', require('./permissions'))
  .use('/directories', require('./directories'))
  .use('/files', require('./files'));


module.exports = routes;
