const { directories } = require('../mock.js');


const controllers = {
  getItems: (req, res) => {
    res.status(200).send(directories);
  },
};


module.exports = controllers;
