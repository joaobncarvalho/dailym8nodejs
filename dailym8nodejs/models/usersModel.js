const { response } = require("express");
var pool = require("./connection");
var bcrypt = require('bcrypt');
var salt = 10;
//var bcrypt = require('bcrypt');
//var salt = 10;

module.exports.DeleteLike = async function(uti_id, est_id) {
    try {
        let sql = "DELETE FROM like_establishment " + "WHERE like_establishment.user_id = " + uti_id + " AND like_establishment.estabelecimento_id = " + est_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.DeleteUser = async function(uti_id) {
    try {
        let sql = "DELETE FROM utilizador " + "WHERE utilizador.utilizador_id = " + uti_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.UpdateType = async function(utilizador_id){

    try {
        let sql = "UPDATE utilizador " + "SET utilizador_type_id = '2' " + "WHERE utilizador.utilizador_id = " + utilizador_id;
        let result = await pool.query(sql);
        let ementasfound = result.rows;
        console.log("[ementasModel.getEmentasUser] recipes = " + JSON.stringify(ementasfound));
        return { status: 200, data: ementasfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}

module.exports.getUsers = async function() {
    try {
        let sql = "select * from utilizador";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getRandomRestaurants = async function() {
    try {
        let sql = "SELECT restaurant.establishment_id, restaurant.restaurant_id ,restaurant.establishment_name, restaurant.restaurant_type_id, restaurant.restaurante_number_tables, type_restaurant.type_restaurant_id, type_restaurant.type_restaurant_name FROM restaurant " + "INNER JOIN type_restaurant ON type_restaurant.type_restaurant_id = restaurant.restaurant_type_id " + "ORDER BY random() LIMIT 8";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

//PARA GERAR NOVOS RESTAURANTES RANDOM, HÁ UM BOTÃO NO FIM DA PAGINA QUE PERGUNTA: NÃO ENCONTROU O QUE PROCURA ? DESCOBRIR MAIS (QUE CHAMARÁ UM NOVO SELECT)

module.exports.getRandomRestaurantsMainPage = async function() {
    try {
        let sql = "SELECT restaurant.establishment_id, restaurant.restaurant_id ,restaurant.establishment_name, restaurant.restaurant_type_id, restaurant.restaurante_number_tables, type_restaurant.type_restaurant_id, type_restaurant.type_restaurant_name FROM restaurant " + "INNER JOIN type_restaurant ON type_restaurant.type_restaurant_id = restaurant.restaurant_type_id " + "ORDER BY random() LIMIT 120";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

//FILTRAR RESTAURANTES PELO SEU TIPO DE COMIDA

module.exports.getRestaurantFilter = async function(restaurant_type_identifier) {
    try {
        let sql = "SELECT *, type_restaurant.type_restaurant_id, type_restaurant.type_restaurant_name FROM restaurant INNER JOIN type_restaurant ON type_restaurant.type_restaurant_id = restaurant.restaurant_type_id WHERE restaurant.restaurant_type_id = " + restaurant_type_identifier;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}




module.exports.getRandomToldos = async function() {
    try {
        let sql = "SELECT equipment_service.establishment_id, equipment_service.equipment_service_id ,equipment_service.establishment_name, equipment_service.number_acomodacoes, equipment_service.equipment_service_name FROM equipment_service " + "ORDER BY random() LIMIT 8";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getRandomLugares = async function() {
    try {
        let sql = "SELECT parking_lot.establishment_id, parking_lot.parking_lot_id, parking_lot.establishment_name, parking_lot.parking_lot_number_spots FROM parking_lot ORDER BY random() LIMIT 8";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getSearchRestaurants = async function(search_string) {
    try {
        let sql = "SELECT restaurant.establishment_id, restaurant.restaurant_id ,restaurant.establishment_name, restaurant.restaurant_type_id, restaurant.restaurante_number_tables, type_restaurant.type_restaurant_id, type_restaurant.type_restaurant_name FROM restaurant WHERE restaurant.establishment_name LIKE %" + search_string + "%";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}


module.exports.saveUser = async function(user) {

    let password = bcrypt.hashSync(user.utilizador_password, salt);

    console.log("Hash: " + password);
    //console.log("[usersModel.saveUser] user = " + JSON.stringify(user));
    /* checks all fields needed and ignores other fields
    if (typeof user != "object" || failUser(user)) {
        if (user.errMsg)
            return { status: 400, data: { msg: user.errMsg } };
        else
            return { status: 400, data: { msg: "Malformed data" } };
    }*/
    //let password = brcypt.hashSync(user.user_password, salt);
    try {

        let sql =
            "INSERT " +
            "INTO utilizador " +
            "(utilizador_name, utilizador_username, utilizador_email, utilizador_password, utilizador_type_id) " +
            "VALUES ($1, $2, $3, $4, $5) " +
            "RETURNING utilizador_id";

            //console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [user.utilizador_name, user.utilizador_username, user.utilizador_email, password, user.utilizador_type_id]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}


module.exports.saveToldoService = async function(toldoservice) {

    try {

        let sql =
            "INSERT " +
            "INTO equipment_service " +
            "(establishment_name, establishment_description, number_acomodacoes, equipment_service_name, establishment_utilizador_id) " +
            "VALUES ($1, $2, $3, $4, $5) " +
            "RETURNING equipment_service_id";

            //console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [toldoservice.establishment_name, toldoservice.establishment_description, toldoservice.number_acomodacoes, toldoservice.equipment_service_name, toldoservice.establishment_utilizador_id]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}


module.exports.saveRestaurante = async function(restaurante) {

    try {

        let sql =
            "INSERT " +
            "INTO restaurant " +
            "(establishment_name, establishment_description, restaurant_type_id, restaurante_number_tables, establishment_utilizador_id) " +
            "VALUES ($1, $2, $3, $4) " +
            "RETURNING restaurant_id";

            //console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [restaurante.establishment_name, restaurante.establishment_description, restaurante.restaurant_type_id, restaurante.restaurante_number_tables, restaurante.establishment_utilizador_id]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}

module.exports.saveEstacionamento = async function(estacionamento) {

    try {

        let sql =
            "INSERT " +
            "INTO parking_lot " +
            "(establishment_name, establishment_description, parking_lot_number_spots, establishment_utilizador_id) " +
            "VALUES ($1, $2, $3, $4) " +
            "RETURNING parking_lot_id";

            //console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [estacionamento.establishment_name, estacionamento.establishment_description, estacionamento.parking_lot_number_spots, estacionamento.establishment_utilizador_id]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}

module.exports.saveLike = async function(like) {

    try {

        let sql =
            "INSERT " +
            "INTO like_establishment " +
            "(user_id, estabelecimento_id) " +
            "VALUES ($1, $2) " +
            "RETURNING like_id";

            //console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [like.user_id, like.estabelecimento_id]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}





//LOGIN

module.exports.authUser = async function(user){

    try {
        let sql = "SELECT * FROM utilizador where utilizador_username = $1";

        let result = await pool.query(sql,[user.utilizador_username]);

        console.log("authUser.result.rows = " + JSON.stringify(result.rows));

        let passwordb = result.rows[0].utilizador_password;

       // let insertedpassword = bcrypt.hashSync(user.utilizador_password, salt);
       // console.log("INSERTED: " + insertedpassword);
       // console.log("authUser.passwordb = " + JSON.stringify(passwordb));
       // console.log("authUser.uti_name.user_password = " + JSON.stringify(user.utilizador_password));

       // console.log("TEST PASSWORD: " + ins);

       // console.log("PASSWORD: " + passwordb);

       let valor = bcrypt.compareSync(user.utilizador_password, passwordb); 

  



      //  let valor = (uti_name.utilizador_password == passwordb);

        console.log("authUser.valor = " + JSON.stringify(valor));

        //console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(dadosfound));

        if(result.rows.length > 0 && valor)
          return { status: 200, result: result.rows[0]};
            //return { status: 200, result: result.rows[0]};
        else return { status: 401, result: {msg:' wrong email or passsword'}};
        
    } catch (err) {
        console.log(err);
        return { status: 500, result: {msg: 'wrong email or passsword'}};
    }
}

////////////////// MÉTODOS PARA RESERVA DE TOLDOS ////////////////////

//MÉTODO PARA CONTAR ACOMODACOES DISPONIVEIS

module.exports.getQuantityAvailableAcomodacoes = async function(service_id) {
    try {
        let sql = "SELECT COUNT(*) FROM acomodacao WHERE acomodacao_availability = '0' AND acomodacao_equipment_service_id = " + service_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getToldoDetailsForReserva = async function(est_id) {
    try {
        let sql = "SELECT equipment_service.establishment_id, equipment_service.establishment_name, equipment_service.establishment_description, equipment_service.equipment_service_id, equipment_service.number_acomodacoes, equipment_service.equipment_service_name, equipment_service.establishment_utilizador_id, equipment_service.type_service_identifier, utilizador.utilizador_name FROM equipment_service INNER JOIN utilizador ON utilizador.utilizador_id = equipment_service.establishment_utilizador_id WHERE equipment_service.establishment_id = " + est_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}

////// MÉTODO PARA VISUALIZAR OS TOLDOS DISPONIVEIS DEPOIS DE CLICAR NO BOTÃO 'VER TOLDOS' EM VEZ DE 'VER MENU' ////////

/*///////////////////// QUERY PARA COMPLETAR //////////////////////////

SELECT  ,acomodacao.acomodacao_id, acomodacao.acomodacao_number, acomodacao.acomodacao_availability, acomodacao.acomodacao_type_id, acomodacao.acomodacao_equipment_service_id, position_acomodacao.position_acomodacao_id, position_acomodacao.position_line, position_acomodacao.position_column, position_acomodacao.acomodacao_identifier, acomodacao_type.acomodacao_type_id, acomodacao_type.acomodacao_type_name FROM acomodacao
INNER JOIN position_acomodacao ON position_acomodacao.acomodacao_identifier = acomodacao.acomodacao_id 
INNER JOIN acomodacao_type ON acomodacao_type.acomodacao_type_id = acomodacao.acomodacao_type_id
WHERE 
*/

module.exports.getToldoServiceAcomodacoes = async function(est_id) {
    try {
        let sql = "SELECT plate.plate_id, plate.plate_name, plate.plate_price, plate.plate_restaurant_id, plate.plate_availability, plate.plate_type_identifier, plate.plate_type_description, plate_type.plate_type_id, plate_type.plate_type_name FROM plate INNER JOIN plate_type ON plate_type.plate_type_id = plate.plate_type_identifier WHERE plate.plate_restaurant_id = " + est_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}


////// MÉTODO PARA O DROPDOWN DOS TOLDOS DISPONIVEIS NA TELA DE CONFIRMAR RESERVA //////

////////////////// MÉTODOS PARA RESERVA DE RESTAURANTE ///////////////////

module.exports.getRestaurantDetailsForReserva = async function(est_id) {
    try {
        let sql = "SELECT restaurant.establishment_id, restaurant.restaurant_id ,restaurant.establishment_name, restaurant.restaurant_type_id, type_restaurant.type_restaurant_id, type_restaurant.type_restaurant_name FROM restaurant " + "INNER JOIN type_restaurant ON type_restaurant.type_restaurant_id = restaurant.restaurant_type_id " + "WHERE restaurant.establishment_id = " + est_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getQuantityAvailableTables = async function(rest_id) {
    try {
        let sql = "SELECT COUNT(*) FROM mesa WHERE mesa_availability = '0' AND mesa_restaurant_id = " + rest_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getRestaurantPlates = async function(est_id) {
    try {
        let sql = "SELECT plate.plate_id, plate.plate_name, plate.plate_price, plate.plate_restaurant_id, plate.plate_availability, plate.plate_type_identifier, plate.plate_type_description, plate_type.plate_type_id, plate_type.plate_type_name FROM plate INNER JOIN plate_type ON plate_type.plate_type_id = plate.plate_type_identifier WHERE plate.plate_restaurant_id = " + est_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getRestaurantPlatesFilter = async function(est_id, plate_identifier) {
    try {
        let sql = "SELECT plate.plate_id, plate.plate_name, plate.plate_price, plate.plate_restaurant_id, plate.plate_availability, restaurant.restaurant_id ,plate.plate_type_identifier, plate.plate_type_description, plate_type.plate_type_id, plate_type.plate_type_name FROM plate INNER JOIN plate_type ON plate_type.plate_type_id = plate.plate_type_identifier INNER JOIN restaurant ON restaurant.restaurant_id = plate.plate_restaurant_id WHERE plate_type.plate_type_id = " + plate_identifier + " AND restaurant.restaurant_id = " + est_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

//PARA O UTILIZADOR -> SELECT DOS PRATOS DISPONIVEIS

module.exports.getRestaurantPlates = async function(est_id) {
    try {
        let sql = "SELECT plate.plate_id, plate.plate_name, plate.plate_price, plate.plate_restaurant_id, plate.plate_availability, plate.plate_type_identifier, plate.plate_type_description, plate_type.plate_type_id, plate_type.plate_type_name FROM plate INNER JOIN plate_type ON plate_type.plate_type_id = plate.plate_type_identifier WHERE plate.plate_restaurant_id = " + est_id + " AND plate.plate_availability = '0'";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

///////////////// MÉTODOS DE GESTÃO DE SERVIÇOS DE RESTAURANTE ///////////////////

//CRIAÇÃO DE PRATOS NUM RESTAURANTE (MENU DO RESTAURANTE)

module.exports.savePlate = async function(plate) {

    try {

        let sql =
            "INSERT " +
            "INTO plate " +
            "(plate_name, plate_price, plate_restaurant_id, plate_type_identifier, plate_type_description) " +
            "VALUES ($1, $2, $3, $4, $5) " +
            "RETURNING plate_id";

            //console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [plate.plate_name, plate.plate_price, plate.plate_restaurant_id, plate.plate_type_identifier, plate.plate_type_description]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}

// ALTERAR DISPONIBILIDADE DO PRATO | Disponivel: 1 | Indisponivel: 0 | AMBAS AS FUNÇÕES SERÃO INTEGRADAS NUMA VERIFICACAO DO TIPO 'IF'

module.exports.UpdateAvailabilityOnPlate = async function(plate_id){

    try {
        let sql = "UPDATE plate " + "SET plate.plate_availability = '1' " + "WHERE plate.plate_id = " + plate_id;
        let result = await pool.query(sql);
        let ementasfound = result.rows;
        console.log("[ementasModel.getEmentasUser] recipes = " + JSON.stringify(ementasfound));
        return { status: 200, data: ementasfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}

module.exports.UpdateAvailabilityOffPlate = async function(plate_id){

    try {
        let sql = "UPDATE plate " + "SET plate.plate_availability = '0' " + "WHERE plate.plate_id = " + plate_id;
        let result = await pool.query(sql);
        let ementasfound = result.rows;
        console.log("[ementasModel.getEmentasUser] recipes = " + JSON.stringify(ementasfound));
        return { status: 200, data: ementasfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}

module.exports.DeletePrato = async function(plate_id) {
    try {
        let sql = "DELETE FROM plate " + "WHERE plate.plate_id = " + plate_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}





//TERMINAR

module.exports.getQuantityLikesRestaurant = async function(rest_id) {
    try {
        let sql = "SELECT COUNT(*) FROM like_establishment WHERE estabelecimento_id = " + rest_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

//VERIFICAR SE UM UTILIZADOR TEM UM x ESTABELECIMENTO EM QUE DEU LIKE

module.exports.getCheckEstabelecimento = async function(uti_id, est_id) {
    try {
        let sql = "SELECT COUNT(*) FROM like_establishment WHERE estabelecimento_id = " + rest_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}
