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

/* POST a new user */
router.post('/insertnewuser', async function(req, res, next) {
  let newUser = req.body;
  //console.log("[usersRoutes] Saving user " + JSON.stringify(newUser));
  let result = await usersModel.saveUser(newUser);
  res.status(result.status).send(result.result);
});

router.post('/loginuser', async function(req, res, next){
  let utilizador_username = req.body;
  console.log("username = " + JSON.stringify(utilizador_username));

  let result = await usersModel.authUser(utilizador_username);
  res.status(result.status).send(result.result);

});

router.delete('/deleteuser/:idutilizador', async function(req,res, next){

  let id = req.params.idutilizador; 
  console.log("[usersRoutes] Retrieving user with id " + id);
  let result = await usersModel.DeleteUser(id);
  res.status(result.status).send(result.data);

});

router.put('/changetocreator/update/:idutilizador', async function(req, res, next){

  let utilizador_id = req.params.idutilizador;

  console.log("[artigosRoutes] Update favorite: " + utilizador_id);
  let result = await usersModel.UpdateType(utilizador_id);
  res.status(result.status).send(result.data);

});

router.get('/showrandomrestaurants', async function(req, res, next) {

  let result = await usersModel.getRandomRestaurants();
  res.status(result.status).send(result.data);

});

router.get('/showrandomtoldos', async function(req, res, next) {

  let result = await usersModel.getRandomToldos();
  res.status(result.status).send(result.data);

});


router.get('/searchforrestaurantswithname/:namestring', async function(req, res, next) {

  let string = req.params.namestring;
  let result = await usersModel.getSearchRestaurants(string);
  res.status(result.status).send(result.data);

});

router.get('/showrandomlugares', async function(req, res, next) {

  let result = await usersModel.getRandomLugares();
  res.status(result.status).send(result.data);

});

/////////////// MÉTODO PARA GESTORES ////////////////////

router.post('/insertnewrestaurante', async function(req, res, next) {
  let newRestaurante = req.body;
  //console.log("[usersRoutes] Saving user " + JSON.stringify(newUser));
  let result = await usersModel.saveRestaurante(newRestaurante);
  res.status(result.status).send(result.result);
});

router.post('/insertnewtoldoservice', async function(req, res, next) {
  let newToldoService = req.body;
  //console.log("[usersRoutes] Saving user " + JSON.stringify(newUser));
  let result = await usersModel.saveToldoService(newToldoService);
  res.status(result.status).send(result.result);
});

router.post('/insertnewestacionamento', async function(req, res, next) {
  let newEstacionamento = req.body;
  //console.log("[usersRoutes] Saving user " + JSON.stringify(newUser));
  let result = await usersModel.saveEstacionamento(newEstacionamento);
  res.status(result.status).send(result.result);
});

router.post('/insertnewlike', async function(req, res, next) {
  let newLike = req.body;
  //console.log("[usersRoutes] Saving user " + JSON.stringify(newUser));
  let result = await usersModel.saveLike(newLike);
  res.status(result.status).send(result.result);
});

router.delete('/deletelike/:idutilizador/:idestabelecimento', async function(req,res, next){

  let idutilizador = req.params.idutilizador; 
  let idestabelecimento = req.params.idestabelecimento; 

  console.log("[usersRoutes] Retrieving user with id " + id);
  let result = await usersModel.DeleteLike(idutilizador, idestabelecimento);
  res.status(result.status).send(result.data);

});


module.exports = router;
