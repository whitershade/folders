const { Router } = require('express');
const controllers = require('./controllers');


const router = Router();

router
  .get('/', controllers.getItems)
  .patch('/:id', controllers.updateItem);


module.exports = router;
