const { files } = require('../mock.js');


const controllers = {
  getItems: (req, res) => {
    res.status(200).send(files);
  },
};


module.exports = controllers;
