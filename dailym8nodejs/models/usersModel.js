const { response } = require("express");
var pool = require("./connection");
var bcrypt = require('bcrypt');
var salt = 10;
//var bcrypt = require('bcrypt');
//var salt = 10;

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



module.exports.saveRestaurante = async function(restaurante) {

    try {

        let sql =
            "INSERT " +
            "INTO restaurant " +
            "(establishment_name, establishment_description, restaurant_type_id, restaurante_number_tables) " +
            "VALUES ($1, $2, $3, $4) " +
            "RETURNING restaurant_id";

            //console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [restaurante.establishment_name, restaurante.establishment_description, restaurante.restaurant_type_id, restaurante.restaurante_number_tables]);
        
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
