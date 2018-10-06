const { pick } = require('lodash');
const { users } = require('../mock.js');


const controllers = {
  getItems: (req, res) => {
    res.status(200).send(users);
  },
};


module.exports = controllers;
