const { directories } = require('../mock.js');

const mockedDirectories = { ...directories };

const controllers = {
  getItems: (req, res) => {
    res.status(200).send(mockedDirectories);
  },
  updateItem: (req, res) => {
    const mockedDirectory = mockedDirectories[req.params.id];

    const updatedDirectory = {
      ...mockedDirectory,
      attributes: {
        ...mockedDirectory.attributes,
        ...req.body,
      },
    };

    mockedDirectories[req.params.id] = updatedDirectory;

    res.status(200).send(updatedDirectory);
  },
};


module.exports = controllers;
