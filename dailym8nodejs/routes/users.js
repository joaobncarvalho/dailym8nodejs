var express = require('express');
var router = express.Router();
var usersModel = require('../models/usersModel');

/* GET users listing. */
router.get('/helloworldtest', function(req, res, next) {
  res.send('Hello World');
});

/*Obter todos os utilizadores registados*/

router.get('/allusers', async function(req, res, next) {

  let result = await usersModel.getUsers();
  res.status(result.status).send(result.data);

});

module.exports = router;
