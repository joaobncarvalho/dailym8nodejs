var express = require('express');
var router = express.Router();
var usersModel = require('../models/usersModel');

router.get('/', function(req, res, next) {
  res.send('Working?');
});
/* GET users listing. - FUNCIONAL */
router.get('/helloworldtest', function(req, res, next) {
  res.send('Hello World');
});

/*Obter todos os utilizadores registados - FUNCIONAL */

router.get('/allusers', async function(req, res, next) {

  let result = await usersModel.getUsers();
  res.status(result.status).send(result.data);

});

/* POST a new user - FUNCIONAL */
router.post('/insertnewuser', async function(req, res, next) {
  let newUser = req.body;
  //console.log("[usersRoutes] Saving user " + JSON.stringify(newUser));
  let result = await usersModel.saveUser(newUser);
  res.status(result.status).send(result.result);
});

/* POST a new user - FUNCIONAL */
router.post('/insertnewgestor', async function(req, res, next) {
  let newUser = req.body;
  //console.log("[usersRoutes] Saving user " + JSON.stringify(newUser));
  let result = await usersModel.saveUser(newUser);
  res.status(result.status).send(result.result);
});

/*ALTERAR TIPO DE UTILIZADOR (NÃO É REVERSIVEL APOS ESCOLHER SER GESTOR)*/

/*METODO PUT AQUI*/

/*TESTAR NO JAVASCRIPT*/

router.post('/loginuser', async function(req, res, next){
  let utilizador_username = req.body;
  console.log("username = " + JSON.stringify(utilizador_username));

  let result = await usersModel.authUser(utilizador_username);
  res.status(result.status).send(result.result);

});

/*APAGAR UTILIZADOR - GESTÃO DOS ADMINISTRADORES - FUNCIONAL*/

router.delete('/deleteuser/:idutilizador', async function(req,res, next){

  let id = req.params.idutilizador; 
  console.log("[usersRoutes] Retrieving user with id " + id);
  let result = await usersModel.DeleteUser(id);
  res.status(result.status).send(result.data);

});



router.put('/changetocreator/update/:idutilizador', async function(req, res, next){ //FEITO

  let utilizador_id = req.params.idutilizador;

  console.log("[artigosRoutes] Update favorite: " + utilizador_id);
  let result = await usersModel.UpdateTypeGestor(utilizador_id);
  res.status(result.status).send(result.data);

});

router.put('/changeplateavailabilityon/:idplate', async function(req, res, next){

  let plate_id = req.params.idplate;

  console.log("[artigosRoutes] Update favorite: " + plate_id);
  let result = await usersModel.UpdateAvailabilityOnPlate(plate_id);
  res.status(result.status).send(result.data);

});

router.put('/changeplateavailabilityoff/:idplate', async function(req, res, next){

  let plate_id = req.params.idplate;

  console.log("[artigosRoutes] Update favorite: " + plate_id);
  let result = await usersModel.UpdateAvailabilityOffPlate(plate_id);
  res.status(result.status).send(result.data);

});

router.get('/reserva/details/restaurante/:idestabelecimento', async function(req, res, next) {

  let estabelecimento_id = req.params.idestabelecimento;

  let result = await usersModel.getRestaurantDetailsForReserva(estabelecimento_id);
  res.status(result.status).send(result.data);

});



////////// MÉTODOS DE MENUS DE RESTAURANTES //////////////////////////////////////////////////////////////////

router.get('/restaurante/cliente/menu/seeplates/:idestabelecimento', async function(req, res, next) { //FEITO

  let estabelecimento_id = req.params.idestabelecimento;

  let result = await usersModel.getRestaurantPlatesUser(estabelecimento_id);
  res.status(result.status).send(result.data);

});

router.get('/restaurante/:idestabelecimento', async function(req, res, next) { //DETALHES DO RESTAURANTE -- FEITO

  let estabelecimento_id = req.params.idestabelecimento;

  let result = await usersModel.getRestaurantSingle(estabelecimento_id);
  res.status(result.status).send(result.data);

});

// FILTRAR PRATOS DE UM RESTAURANTE PELO TIPO -- FEITO

router.get('/restaurante/cliente/menu/seeplates/filter/:idestabelecimento/:idplatetype', async function(req, res, next) {

  let estabelecimento_id = req.params.idestabelecimento;
  let plate_type_id = req.params.idplatetype;

  let result = await usersModel.getRestaurantPlatesFilter(estabelecimento_id, plate_type_id);
  res.status(result.status).send(result.data);

});

////////////////// NUMERO DE LIKES DO RESTAURANTE ////////////////////

router.get('/restaurante/likes/:idestabelecimento', async function(req, res, next) { //FEITO

  let estabelecimento_id = req.params.idestabelecimento;

  let result = await usersModel.getQuantityLikesRestaurant(estabelecimento_id);
  res.status(result.status).send(result.data);

});

////////////////// NUMERO DE MESAS DISPONIVEIS ////////////////////

router.get('/restaurante/mesas/:idestabelecimento', async function(req, res, next) { //FEITO

  let estabelecimento_id = req.params.idestabelecimento;

  let result = await usersModel.getQuantityMesasRestaurant(estabelecimento_id);
  res.status(result.status).send(result.data);

});

//OBTER A QUANTIDADE DE MESAS DISPONIVEIS NUM RESTAURANTE

router.get('/reserva/details/restaurante/availabletables/:idrestaurante', async function(req, res, next) {

  let restaurante_id = req.params.idrestaurante;

  let result = await usersModel.getQuantityAvailableTables(restaurante_id);
  res.status(result.status).send(result.data);

});

//OBTER A QUANTIDADE DE LIKES DE UM RESTAURANTE - TERMINAR

router.get('/reserva/details/restaurante/quantitylikes/:idrestaurante', async function(req, res, next) {

  let restaurante_id = req.params.idrestaurante;

  let result = await usersModel.getQuantityLikesRestaurant(restaurante_id);
  res.status(result.status).send(result.data);

});

/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////// ACOMODACAO ///////////////////////
router.get('/acomodacao/:idestabelecimento', async function(req, res, next) { //DETALHES DA ACOMODACAO -- FEITO

  let estabelecimento_id = req.params.idestabelecimento;

  let result = await usersModel.getAcomodacaoSingle(estabelecimento_id);
  res.status(result.status).send(result.data);

});


//VERIFICAR SE UTILIZADOR TEM LIKE NUM LOCAL - TERMINAR**********************************************++++

router.get('/checkliked/:idutilizador/:idrestaurante', async function(req, res, next) {

  let utilizador_id = req.params.idutilizador;
  let restaurante_id = req.params.idrestaurante;

  let result = await usersModel.getCheckEstabelecimento(utilizador_id, restaurante_id);
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

/*

router.get('/searchforrestaurantswithname/:namestring', async function(req, res, next) {

  let string = req.params.namestring;
  let result = await usersModel.getSearchRestaurants(string);
  res.status(result.status).send(result.data);

});
*/

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

router.post('/insertnewlikerestaurante', async function(req, res, next) {
  let newLike = req.body;
  //console.log("[usersRoutes] Saving user " + JSON.stringify(newUser));
  let result = await usersModel.saveLikeRestaurante(newLike);
  res.status(result.status).send(result.result);
});

////////// DUVIDA ? ////////////

router.delete('/deletelike/:idutilizador/:idestabelecimento', async function(req,res, next){

  let idutilizador = req.params.idutilizador; 
  let idestabelecimento = req.params.idestabelecimento; 

  console.log("[usersRoutes] Retrieving user with id " + id);
  let result = await usersModel.DeleteLike(idutilizador, idestabelecimento);
  res.status(result.status).send(result.data);

});

router.delete('/deletelike/:idprato', async function(req,res, next){

  let idprato = req.params.idprato; 
   

  console.log("[usersRoutes] Retrieving user with id " + id);
  let result = await usersModel.DeletePrato(idprato);
  res.status(result.status).send(result.data);

});

module.exports = router;