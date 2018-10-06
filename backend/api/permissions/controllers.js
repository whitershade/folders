const { pick } = require('lodash');
const { permissions } = require('../mock.js');


const controllers = {
  getItems: (req, res) => {
    res.status(200).send(permissions);
  },
};


module.exports = controllers;
