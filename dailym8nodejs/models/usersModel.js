const { response } = require("express");
var pool = require("./connection");
var bcrypt = require('bcrypt');
var salt = 10;
//var bcrypt = require('bcrypt');
//var salt = 10;


/////////////////// LISTA DE MÉTODOS ////////////////////

// REGISTO DO UTILIZADOR (CLIENTE E GESTOR) --- FEITO 

// LOGIN DO UTILIZADOR --- FEITO

//ALTERAR TIPO DE UTILIZADOR --- FEITO

// OBTER OS DETALHES DE UM UTILIZADOR (INFORMAÇÕES DA CONTA E ESTABELECIMENTOS QUE TEM E OS QUE GOSTA (SE FOR DO TIPO GESTOR)) -- FEITO


// OBTER 250 RESTAURANTES ALEATORIOS JUNTO COM INFORMAÇÕES -- FEITO

// OBTER 250 SERVIÇOS DE ACOMODACOES JUNTO COM INFORMACOES -- FEITO

// OBTER 250 ESTACIONAMENTOS DE ACOMODACOES JUNTO COM INFORMAÇÕES -- FEITO

//FILTRAR MESAS DISPONIVEIS POR INTERIOR/EXTERIOR -- FEITO

//FILTRAR MESAS POR DISPONIVEIS/INDISPONIVEIS -- FEITO

//ORDENAR MESAS/ACOMODACOES/LUGARES DISPONIVEIS PELO PREÇO (ASCENDENTE E DESCENDENTE) ?

//FILTRAR ACOMODACOES POR DISPONIVEIS/INDISPONIVEIS -- FEITO

//FILTRAR LUGARES POR DISPONIVEIS/INDISPONIVEIS -- FEITO

//FILTRAR ACOMODACOES (PALHOTAS/TOLDOS) -- FEITO

//FILTRAR ACOMODACOES (POR LINHA) -- FEITO

// VERIFICAR SE UM UTILIZADOR POSSUI LIKE NUM RESTAURANTE (REPETE-SE PARA SERVIÇOS DE ACOMODAÇÃO E ESTACIONAMENTO)  -- FEITO

// DEIXAR UM LIKE NUM SERVIÇO - FEITO

// REMOVER UM LIKE DE UM SERVIÇO -- FEITO

// DAR REPORT A UM SERVIÇO -- FEITO

// OBTER DETALHES DE UM SERVIÇO (RESTAURANTE/ACOMODACAO/ESTACIONAMENTO | INCLUI VER PACKS DISPONIVEIS DO SERVIÇO E QUEM O CRIOU) --- FAZER AMANHÃ

// OBTER OS ULTIMOS 300 REPORTS DA PLATAFORMA (ADMINISTRADORES - DEVE POSSUIR DETALHES DO NOME DO ESTABELECIMENTO, ENTRE OUTRAS INFORMAÇÕES, INCLUSIVE A CONTA QUE DETEM O ESTABELECIMENTO E A CONTAGEM DE QUANTOS REPORTS TEM O ESTABELECIMENTO (A CONTAGEM DE REPORTS É FEITA AO SER CLICADO UM DETERMINADO REPORT !!!)) -- 90% FEITO

// ELIMINAR ESTABELECIMENTO (RESTAURANTE/ACOMODACAO/ESTACIONAMENTO - QUER SEJA POR UM ADMIN NO SISTEMA DE REPORTS, OU PELO PROPRIO GESTOR NA SUA PAGINA DE DETALHES DO ESTABELECIMENTO)

   // ELIMINAR SERVIÇO DE RESTAURANTE - MÉTODOS:

      //ELIMINAR TODOS OS REPORTS DE UM RESTAURANTE -- FEITO

      //ELIMINAR TODAS AS RESERVAS DE UM RESTAURANTE -- FEITO

      //ELIMINAR TODOS OS PRATOS DE UM RESTAURANTE -- FEITO

      //ELIMINAR TODAS AS MESAS DE UM RESTAURANTE -- FEITO

      //ELIMINAR O ESTABELECIMENTO -- FEITO

   // ELIMINAR SERVIÇO DE ACOMODACAO - MÉTODOS: 

      //ELIMINAR TODOS OS REPORTS DE UM SERVIÇO DE TOLDOS -- FEITO

      //ELIMINAR TODAS AS RESERVAS DE UM SERVICO DE TOLDOS -- FEITO

      //ELIMINAR TODAS AS ACOMODACOES E POSIÇÕES DAS MESMAS RESPETIVAS AO SERVIÇO --FEITO

      //ELIMINAR O ESTABELECIMENTO --FEITO

    // ELIMINAR ESTACIONAMENTO - MÉTODOS:

      //ELIMINAR TODOS OS REPORTS DE UM ESTACIONAMENTO -- FEITO

      //ELIMINAR TODOS AS RESERVAS DE UM SERVICO DE TOLDOS -- FEITO

      //ELIMINAR TODOS OS LUGARES DO ESTACIONAMENTO -- FEITO

      //ELIMINAR O ESTABELECIMENTO -- FEITO

     //ELIMINAR CONTA (TANTO O UTILIZADOR QUANTO O ADMIN PODEM FAZÊ-LO) -- FEITO

// VISUALIZAR DETALHES DE UM SERVIÇO (RESTAURANTE/ESTACIONAMENTO/ACOMODACOES): --INICIALMENTE VAI TER QUE AVALIAR O TYPE_IDENTIFIER QUE IDENTIFICA O SERVIÇO DE MODO A PREPARAR A PAGINA DE EXIBIÇÃO DE INFORMAÇÃO

   //INFORMAÇÕES DO DONO, NOME, DESCRIÇÃO, TIPO (CASO FOR RESTAURANTE),NUMERO DE MESAS/LUGARES/ACOMODACOES DISPONIVEIS ATUALMENTE, NUMERO DE LIKES E MARCADOR COM POSIÇÃO DO LOCAL JUNTAMENTE COM A DISTANCIA | 100% FEITO (QUERY), 50% FEITO (MÉTODO), POIS FALTA REPETIR PARA AS ACOMODACOES DE PRAIA E LUGARES DE ESTACIONAMENTO

//OBTER OS PRATOS DE UM RESTAURANTE (AO CLICAR NO BOTÃO DE 'VER MENU') -- FEITO (QUERY SQL)

//OBTER AS MESAS/TOLDOS/LUGARES DISPONIVEIS PARA RESERVA -- FEITO (QUERY SQL)

//RESERVAR UMA MESA DE UM RESTAURANTE -- FEITO (QUERY SQL | 50%)

//NA ALTURA DO INSERT, ADICIONAR UM DELETE AUTOMATICO NO DIA DO ACONTECIMENTO DA RESERVA DA MESA -- DUVIDA ?

//ALTERAR A DISPONIBILIDADE DE UMA MESA -- FEITO (QUERY SQL)

//RESERVAR UMA ACOMODACAO DE UM SERVICO DE TOLDOS -- FEITO (QUERY SQL | 50%)

//NA ALTURA DO INSERT, ADICIONAR UM DELETE AUTOMATICO NO DIA DO ACONTECIMENTO DA RESERVA DA ACOMODACAO -- DUVIDA ?

//ALTERAR A DISPONIBILIDADE DE UMA ACOMODACAO -- FEITO (QUERY SQL)

//RESERVAR UM LUGAR DO SERVICO DE ESTACIONAMENTO -- FEITO (QUERY SQL | 50%)

//NA ALTURA DO INSERT, ADICIONAR UM DELETE AUTOMATICO NO DIA DO ACONTECIMENTO DA RESERVA DO LUGAR -- DUVIDA ?

//ALTERAR A DISPONIBILIDADE DE UM LUGAR -- FEITO (QUERY SQL)

///////////////////////////////////////////// MÉTODOS PARA GESTÃO DE ESTABELECIMENTO  ///////////////////////////////////////////////

//CRIAR UM SERVIÇO DE RESTAURANTE -- FEITO (QUERY SQL)

//ADICIONAR MESAS -- FEITO (QUERY SQL)

//ADICIONAR PRATOS PARA O MENU -- FEITO (QUERY SQL)

//ALTERAR O ESTADO DE DISPONIBILIDADE DE PRATOS OU DE MESAS OU DE PACKS -- FEITO (QUERY SQL)

//ELIMINAR PRATOS OU MESAS OU PACKS OU ACOMODACOES OU LUGARES -- FEITO

//CRIAR PACKS PARA O SERVIÇO -- DUVIDA

//CRIAR UM SERVIÇO DE ACOMODACOES DE PRAIA -- FEITO (COPY PASTE DO SERVIÇO DE RESTAURANTE)

//ADICIONAR ACOMODACOES -- FEITO (COPY PASTE DE ADICIONAR MESAS)

//ALTERAR O ESTADO DE DISPONIBILIDADE DE ACOMODACOES OU DE PACKS -- FEITO (QUERY SQL - COPY PASTE DO ALTERAR ESTADO DE DISPONIBLIDDE DE PRATOS)

//CRIAR PACKS PARA O SERVIÇO DE ACOMODACOES -- DUVIDA ?

//CRIAR UM SERVICO DE ESTACIONAMENTO  -- FEITO (COPY PASTE DO SERVICO DE RESTAURANTE OU ACOMODACAO)

//ADICIONAR LUGARES -- FEITO (COPY PASTE DE ADICIONAR EMSAS OU ACOMODACOES)

//ALTERAR ESTADO DE DISPONIBILIDADE DE LUGARES -- FEITO (COPY PASTE DO ALTERAR ESTADO DE DISPONIBILIDADE DE PRATOS/MESAS)

//CRIAR PACKS PARA O SERVICO DE ESTACIONAMENTO -- DUVIDA ?

//////////////////////// EXTRA PARA O UTILIZADOR -> CANCELAR A SUA PROPRIA RESERVA /////////////////////////////


/////////////////////////////////// MÉTODOS DE ADMINISTRADOR //////////////////////////////////////////

/// VER REPORTS

/// APAGAR REPORTS

/// APAGAR ESTABELECIMENTO (ALEM DO PROPRIO GESTOR)

/// APAGAR CONTAS (ALEM DOS PROPRIOS UTILIZADORES)

module.exports.DeleteUtilizadorAccount = async function(uti_id) {
    try {
        let sql = "DELETE FROM utilizador WHERE utilizador.utilizador_id = " + uti_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.DeleteReservasMesasRestaurant = async function(rest_id) {
    try {
        let sql = "DELETE FROM reserva_mesa USING mesa, restaurant WHERE reserva_mesa.mesa_identifier_reservation = mesa.mesa_id AND mesa.mesa_restaurant_id = restaurant.restaurant_id AND restaurant.restaurant_id = " + rest_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}



module.exports.DeleteReservasLugaresEstacionamento = async function(rest_id) {
    try {
        let sql = "DELETE FROM reserva_spot USING spot, parking_lot WHERE reserva_spot.spot_identifier_reservation = spot.spot_id AND spot.spot_parking_lot_id = parking_lot.parking_lot_id AND parking_lot.parking_lot_id = " + rest_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.DeleteLugaresFromEstacionamento = async function(rest_id) {
    try {
        let sql = "DELETE FROM spot WHERE spot_parking_lot_id = " + rest_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.DeleteEstacionamento = async function(rest_id) {
    try {
        let sql = "DELETE FROM parking_lot WHERE parking_lot_id = " + rest_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.DeleteRestaurant = async function(rest_id) {
    try {
        let sql = "DELETE FROM restaurant WHERE restaurant_id = " + rest_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.DeleteServicoAcomodacao = async function(rest_id) {
    try {
        let sql = "DELETE FROM equipment_service WHERE equipment_service_id = " + rest_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}


module.exports.DeletePratosFromRestaurant = async function(rest_id) {
    try {
        let sql = "DELETE FROM plate WHERE plate_restaurant_id = " + rest_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.DeleteMesasFromRestaurant = async function(rest_id) {
    try {
        let sql = "DELETE FROM mesa WHERE mesa_restaurant_id = " + rest_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.DeleteReportFromRestaurant = async function(rest_id) {
    try {
        let sql = "DELETE FROM report_restaurante WHERE report_restaurante_id = " + rest_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.DeleteReportFromEstacionamento = async function(rest_id) {
    try {
        let sql = "DELETE FROM report_estacionamento WHERE report_estacionamento_id = " + rest_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.DeletePositionsServicoAcomodacao = async function(rest_id) {
    try {
        let sql = "DELETE FROM position_acomodacao using acomodacao, equipment_service WHERE position_acomodacao.acomodacao_identifier = acomodacao.acomodacao_id AND acomodacao.acomodacao_equipment_service_id = equipment_service.equipment_service_id AND equipment_service.equipment_service_id = " + rest_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.DeleteAcomodacoesServicoAcomodacao = async function(rest_id) {
    try {
        let sql = "DELETE FROM acomodacao WHERE acomodacao_equipment_service_id = " + rest_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}


module.exports.DeleteReservasServicoAcomodacao = async function(rest_id) {
    try {
        let sql = "DELETE FROM reserva_acomodacao USING acomdacao, equipment_service WHERE reserva_acomodacao.acomodacao_identifier_reservation = acomodacao.acomodacao_id AND acomodacao.acomodacao_equipment_service_id = equipment_service.equipment_service_id AND equipment_service.equipment_service_id = " + rest_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.DeleteReportFromServicoAcomodacao = async function(rest_id) {
    try {
        let sql = "DELETE FROM report_servico_acomodacao WHERE report_servico_acomodacao_id = " + rest_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}


module.exports.getAcomodacaoPositionFilter = async function(servico_acomodacao_id, line_value) { 
    try {
        let sql = "SELECT *, acomodacao_type.acomodacao_type_id, acomodacao_type.acomodacao_type_name ,equipment_service.establishment_id, equipment_service.establishment_name, position_acomodacao.position_acomodacao_id, position_acomodacao.position_line, position_acomodacao.position_column, position_acomodacao.acomodacao_identifier FROM acomodacao INNER JOIN acomodacao_type ON acomodacao_type.acomodacao_type_id = acomodacao.acomodacao_type_id INNER JOIN equipment_service ON equipment_service.equipment_service_id = acomodacao.acomodacao_equipment_service_id INNER JOIN position_acomodacao ON position_acomodacao.acomodacao_identifier = acomodacao.acomodacao_id WHERE equipment_service.equipment_service_id = " + servico_acomodacao_id + " AND position_acomodacao.position_line = " + line_value;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getMesaAvailabilityFilter = async function(rest_id, availability_state) { 
    try {
        let sql = "SELECT *, mesa_type.mesa_type_id, mesa_type.mesa_type_name ,restaurant.establishment_id, restaurant.establishment_name, restaurant.restaurant_id, restaurant.restaurante_number_tables, type_restaurant.type_restaurant_id, type_restaurant.type_restaurant_name FROM mesa INNER JOIN mesa_type ON mesa_type.mesa_type_id = mesa.mesa_type_id INNER JOIN restaurant ON restaurant.restaurant_id = mesa.mesa_restaurant_id INNER JOIN type_restaurant ON type_restaurant.type_restaurant_id = restaurant.restaurant_type_id WHERE restaurant.restaurant_id = " + rest_id + " AND mesa.mesa_availability = '" + availability_state + "'";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getAcomodacaoAvailabilityFilter = async function(servico_acomodacao_id, availability_state) { 
    try {
        let sql = "SELECT *, acomodacao_type.acomodacao_type_id, acomodacao_type.acomodacao_type_name, equipment_service.establishment_id, equipment_service.establishment_name, equipment_service.equipment_service_id, equipment_service.number_acomodacoes FROM acomodacao INNER JOIN acomodacao_type ON acomodacao_type.acomodacao_type_id = acomodacao.acomodacao_type_id INNER JOIN equipment_service ON equipment_service.equipment_service_id = acomodacao.acomodacao_equipment_service_id WHERE equipment_service.equipment_service_id =  " + servico_acomodacao_id + " AND acomodacao.acomodacao_availability = '" + availability_state + "'";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}


module.exports.getLugarAvailabilityFilter = async function(parking_lot_id, availability_state) { 
    try {
        let sql = "SELECT *, parking_lot.establishment_id, parking_lot.establishment_name, parking_lot.parking_lot_id, parking_lot.parking_lot_number_spots FROM spot INNER JOIN parking_lot ON parking_lot.parking_lot_id = spot.spot_parking_lot_id WHERE parking_lot.parking_lot_id = " + parking_lot_id + " AND spot.spot_availability = '" + availability_state + "'";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getAcomodacaoTypeFilter = async function(servico_acomodacao_id, type_id) { 
    try {
        let sql = "SELECT *, acomodacao_type.acomodacao_type_id, acomodacao_type.acomodacao_type_name, equipment_service.establishment_id, equipment_service.establishment_name, equipment_service.equipment_service_id, equipment_service.number_acomodacoes FROM acomodacao INNER JOIN acomodacao_type ON acomodacao_type.acomodacao_type_id = acomodacao.acomodacao_type_id INNER JOIN equipment_service ON equipment_service.equipment_service_id = acomodacao.acomodacao_equipment_service_id WHERE equipment_service.equipment_service_id =  " + servico_acomodacao_id + " AND acomodacao_type.acomodacao_type_id = " + type_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}



module.exports.getMesaTypeFilter = async function(rest_id, type_id) { 
    try {
        let sql = "SELECT *, mesa_type.mesa_type_id, mesa_type.mesa_type_name ,restaurant.establishment_id, restaurant.establishment_name, restaurant.restaurant_id, restaurant.restaurante_number_tables, type_restaurant.type_restaurant_id, type_restaurant.type_restaurant_name FROM mesa INNER JOIN mesa_type ON mesa_type.mesa_type_id = mesa.mesa_type_id INNER JOIN restaurant ON restaurant.restaurant_id = mesa.mesa_restaurant_id INNER JOIN type_restaurant ON type_restaurant.type_restaurant_id = restaurant.restaurant_type_id WHERE restaurant.restaurant_id = " + rest_id + " AND mesa_type.mesa_type_id = " + type_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}


module.exports.getUtilizadorDetails = async function(uti_id) { //DETALHES PARA AMBOS OS TIPOS 'CLIENTE' E 'GESTOR'
    try {
        let sql = "SELECT utilizador.utilizador_name, utilizador.utilizador_username, utilizador.utilizador_email FROM utilizador WHERE utilizador.utilizador_id = " + uti_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getUtilizadorDetailsRestaurantLike = async function(uti_id) { //DETALHES PARA AMBOS OS TIPOS 'CLIENTE' E 'GESTOR'
    try {
        let sql = "SELECT utilizador.utilizador_id, like_restaurante.like_utilizador, like_restaurante.like_restaurante, restaurant.restaurant_id, restaurant.restaurante_number_tables, restaurant.establishment_name, type_restaurant.type_restaurant_id, type_restaurant.type_restaurant_name FROM utilizador INNER JOIN like_restaurante ON like_restaurante.like_utilizador = utilizador.utilizador_id INNER JOIN restaurant ON restaurant.restaurant_id = like_restaurante.like_restaurante INNER JOIN type_restaurant ON type_restaurant.type_restaurant_id = restaurant.restaurant_type_id WHERE utilizador.utilizador_id = " + uti_id + " LIMIT 5";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getUtilizadorDetailsAcomodacaoLike = async function(uti_id) { //DETALHES PARA AMBOS OS TIPOS 'CLIENTE' E 'GESTOR'
    try {
        let sql = "SELECT utilizador.utilizador_id, like_servico_acomodacao.like_utilizador, like_servico_acomodacao.like_servico_acomodacao, equipment_service.equipment_service_id, equipment_service.number_acomodacoes, equipment_service.establishment_name FROM utilizador INNER JOIN like_servico_acomodacao ON like_servico_acomodacao.like_utilizador = utilizador.utilizador_id INNER JOIN equipment_service ON equipment_service.equipment_service_id = like_servico_acomodacao.like_servico_acomodacao WHERE utilizador.utilizador_id = " + uti_id + " LIMIT 5";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getUtilizadorDetailsEstacionamentoLike = async function(uti_id) { //DETALHES PARA AMBOS OS TIPOS 'CLIENTE' E 'GESTOR'
    try {
        let sql = "SELECT utilizador.utilizador_id, like_estacionamento.like_utilizador, like_estacionamento.like_estacionamento, parking_lot.parking_lot_id, parking_lot.parking_lot_number_spots, parking_lot.establishment_name FROM utilizador INNER JOIN like_estacionamento ON like_estacionamento.like_utilizador = utilizador.utilizador_id INNER JOIN parking_lot ON parking_lot.parking_lot_id = like_estacionamento.like_estacionamento WHERE utilizador.utilizador_id = " + uti_id + " LIMIT 5";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}



module.exports.getUtilizadorEstablishmentRestaurantDetails = async function(uti_id) { //DETALHES PARA AMBOS O TIPO 'GESTOR' | ESTABELECIMENTOS QUE POSSUI/CRIOU
    try {
        let sql = "SELECT *, type_restaurant.type_restaurant_id, type_restaurant.type_restaurant_name FROM restaurant INNER JOIN type_restaurant ON type_restaurant.type_restaurant_id = restaurant.restaurant_type_id WHERE establishment_utilizador_id = " + uti_id + " LIMIT 5";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getUtilizadorEstablishmentAcomodacaoDetails = async function(uti_id) { //DETALHES PARA AMBOS O TIPO 'GESTOR' | ESTABELECIMENTOS QUE POSSUI/CRIOU
    try {
        let sql = "SELECT * FROM equipment_service WHERE establishment_utilizador_id = " + uti_id + " LIMIT 5";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getUtilizadorEstablishmentEstacionamentoDetails = async function(uti_id) { //DETALHES PARA AMBOS O TIPO 'GESTOR' | ESTABELECIMENTOS QUE POSSUI/CRIOU
    try {
        let sql = "SELECT * FROM parking_lot WHERE establishment_utilizador_id = " + uti_id + " LIMIT 5";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

//REMOVER UM LIKE
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

//REMOVER UM UTILIZADOR

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

//ALTERAR O TIPO DE UTILIZADOR PARA GESTOR

module.exports.UpdateTypeGestor = async function(utilizador_id){

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

//ALTERAR O TIPO DE UTILIZADOR 

module.exports.UpdateTypeCliente = async function(utilizador_id){

    try {
        let sql = "UPDATE utilizador " + "SET utilizador_type_id = '1' " + "WHERE utilizador.utilizador_id = " + utilizador_id;
        let result = await pool.query(sql);
        let ementasfound = result.rows;
        console.log("[ementasModel.getEmentasUser] recipes = " + JSON.stringify(ementasfound));
        return { status: 200, data: ementasfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}

//OBTER TODOS OS UTILIZADORES

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

//SELECIONAR 250 RESTAURANTES ALEATÓRIOS

module.exports.getRandomRestaurants = async function() {
    try {
        let sql = "SELECT *, utilizador.utilizador_id, utilizador.utilizador_name, utilizador.utilizador_username, type_restaurant.type_restaurant_id, type_restaurant.type_restaurant_name FROM restaurant INNER JOIN utilizador ON utilizador.utilizador_id = restaurant.establishment_utilizador_id INNER JOIN type_restaurant ON type_restaurant.type_restaurant_id = restaurant.restaurant_type_id " + "ORDER BY random() LIMIT 250";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}


module.exports.getRandomAcomodacao = async function() {
    try {
        let sql = "SELECT *, utilizador.utilizador_id, utilizador.utilizador_name, utilizador.utilizador_username FROM equipment_service INNER JOIN utilizador ON utilizador.utilizador_id = equipment_service.establishment_utilizador_id " + "ORDER BY random() LIMIT 250";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getRandomEstacionamento = async function() {
    try {
        let sql = "SELECT *, utilizador.utilizador_id, utilizador.utilizador_name, utilizador.utilizador_username FROM parking_lot INNER JOIN utilizador ON utilizador.utilizador_id = parking_lot.establishment_utilizador_id " + "ORDER BY random() LIMIT 250";
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

//FILTRAR RESTAURANTES PELO SEU TIPO DE COMIDA (TIPO DE RESTAURANTE)

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

//GERAR ALEATORIAMENTE 120 SERVIÇOS DIFERENTES DE TOLDOS


module.exports.getRandomToldos = async function() {
    try {
        let sql = "SELECT equipment_service.establishment_id, equipment_service.equipment_service_id ,equipment_service.establishment_name, equipment_service.number_acomodacoes, equipment_service.equipment_service_name FROM equipment_service " + "ORDER BY random() LIMIT 120";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

//GERAR ALEATORIAMENTE 120 SERVIÇOS DIFERENTES DE PARQUES

module.exports.getRandomLugares = async function() {
    try {
        let sql = "SELECT parking_lot.establishment_id, parking_lot.parking_lot_id, parking_lot.establishment_name, parking_lot.parking_lot_number_spots FROM parking_lot ORDER BY random() LIMIT 50";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

//TERMINAR --> PESQUISA POR NOME DE RESTAURANTES

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

//REGISTO DE UTILIZADOR (CLIENTE)

module.exports.saveUser = async function(user) {

    let password = bcrypt.hashSync(user.utilizador_password, salt);

    let utilizador_type_id = 1;

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
        let result = await pool.query(sql, [user.utilizador_name, user.utilizador_username, user.utilizador_email, password, utilizador_type_id]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}

//REGISTO DE UTILIZADOR (GESTOR)

module.exports.saveUserGestor = async function(user) {

    let password = bcrypt.hashSync(user.utilizador_password, salt);

    let utilizador_type_id = 2;

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
            "(utilizador_name, utilizador_username, utilizador_email, utilizador_password, " + utilizador_type_id + ") " +
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

//CRIAÇÃO DE UM SISTEMA DE TOLDOS

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

module.exports.DeleteRestauranteLike = async function(uti_id, rest_id) {
    try {
        let sql = "DELETE FROM like_restaurante " + "WHERE like_restaurante.like_utilizador = " + uti_id + " AND like_restaurante.like_restaurante = " + rest_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.DeleteAcomodacaoLike = async function(uti_id, service_acomodacao_id) {
    try {
        let sql = "DELETE FROM like_servico_acomodacao " + "WHERE like_servico_acomodacao.like_utilizador = " + uti_id + " AND like_servico_acomodacao.like_servico_acomodacao = " + service_acomodacao_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.DeleteEstacionamentoLike = async function(uti_id, estacionamento_id) {
    try {
        let sql = "DELETE FROM like_estacionamento " + "WHERE like_estacionamento.like_utilizador = " + uti_id + " AND like_estacionamento.like_estacionamento = " + estacionamento_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

//CRIAÇÃO DE UM SISTEMA DE RESTAURANTE

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

//CRIAÇÃO DE UM SISTEMA DE ESTACIONAMENTO

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

//GUARDAR UM LIKE NUM ESTABELECIMENTO (RESTAURANTE)

module.exports.saveLikeRestaurante = async function(like) {

    try {

        let sql =
            "INSERT " +
            "INTO like_restaurante " +
            "(like_utilizador, like_restaurante) " +
            "VALUES ($1, $2) " +
            "RETURNING like_id";

            //console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [like.like_utilizador, like.like_restaurante]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}

//GUARDAR UM LIKE NUM ESTABELECIMENTO (SERVICO DE ACOMODACAO DE PRAIA)

module.exports.saveLikeAcomodacao = async function(like) {

    try {

        let sql =
            "INSERT " +
            "INTO like_servico_acomodacao " +
            "(like_utilizador, like_servico_acomodacao) " +
            "VALUES ($1, $2) " +
            "RETURNING like_id";

            //console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [like.like_utilizador, like.like_servico_acomodacao]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}

//GUARDAR UM LIKE NUM ESTABELECIMENTO (ESTACIONAMENTO)

module.exports.saveLikeEstacionamento = async function(like) {

    try {

        let sql =
            "INSERT " +
            "INTO like_estacionamento " +
            "(like_utilizador, like_estacionamento) " +
            "VALUES ($1, $2) " +
            "RETURNING like_id";

            //console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [like.like_utilizador, like.like_estacionamento]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}




//LOGIN DO UTILIZADOR

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

//DETALHES DE UM SISTEMA DE TOLDOS PARA RESERVA

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

SELECT *, acomodacao_type.acomodacao_type_id, acomodacao_type.acomodacao_type_name, equipment_service.equipment_service_id FROM acomodacao
INNER JOIN acomodacao_type ON acomodacao_type.acomodacao_type_id = acomodacao.acomodacao_type_id
INNER JOIN equipment_service ON equipment_service.equipment_service_id = acomodacao.acomodacao_equipment_service_id
WHERE equipment_service.equipment_service_id = est_id AND acomodacao.acomodacao_availability = '0'
*/

//OBTER ACOMODACOES DISPONIVEIS APOS CLICAR NO BOTÃO 'VER TODOS'

module.exports.getToldoServiceAcomodacoes = async function(est_id) {
    try {
        let sql = "SELECT *, acomodacao_type.acomodacao_type_id, acomodacao_type.acomodacao_type_name, equipment_service.equipment_service_id, position_acomodacao.position_acomodacao_id, position_acomodacao.position_line, position_acomodacao.position_column, position_acomodacao.acomodacao_identifier FROM acomodacao INNER JOIN position_acomodacao ON position_acomodacao.acomodacao_identifier = acomodacao.acomodacao_id INNER JOIN acomodacao_type ON acomodacao_type.acomodacao_type_id = acomodacao.acomodacao_type_id INNER JOIN equipment_service ON equipment_service.equipment_service_id = acomodacao.acomodacao_equipment_service_id WHERE equipment_service.equipment_service_id = " + est_id + " AND acomodacao.acomodacao_availability = '0'";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}



///////////////////// MÉTODO PARA FILTRAR AS ACOMODAÇÕES PELA LINHA /////////////////////////

module.exports.getToldoServiceAcomodacoesFilter = async function(est_id, line_value) {
    try {
        let sql = "SELECT *, acomodacao_type.acomodacao_type_id, acomodacao_type.acomodacao_type_name, position_acomodacao.position_acomodacao_id, position_acomodacao.position_line, position_acomodacao.position_column, position_acomodacao.acomodacao_identifier FROM acomodacao INNER JOIN acomodacao_type ON acomodacao_type.acomodacao_type_id = acomodacao.acomodacao_type_id INNER JOIN position_acomodacao ON position_acomodacao.acomodacao_identifier = acomodacao.acomodacao_id WHERE position_acomodacao.position_line = " + line_value + " AND acomodacao.acomodacao_equipment_service_id = " + est_id;
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

//OBTER DETALHES DE UM SERVIÇO DE RESTAURANTE PARA A RESERVA
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

/////////// MÉTODO DE DETALHES PARA DEPOIS MARCAR A RESERVA


module.exports.getRestaurantSingle = async function(est_id) {
    try {
        let sql = "SELECT *, type_restaurant.type_restaurant_id, type_restaurant.type_restaurant_name, place_restaurante.local_id, place_restaurante.local_morada, place_restaurante.ref_system_id, place_restaurante.geometry_info_point, place_restaurante.local_restaurante_id, place_restaurante.local_latitude, place_restaurante.local_longitude FROM restaurant INNER JOIN type_restaurant ON type_restaurant.type_restaurant_id = restaurant.restaurant_type_id INNER JOIN place_restaurante ON place_restaurante.local_restaurante_id = restaurant.restaurant_id WHERE restaurant.restaurant_id = " + est_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}


//FILTRAR MESAS DISPONIVEIS DE UM RESTAURANTE (INTERIOR E EXTERIOR) - QUESTÃO SOBRE MULTIPLOS OPERADORES 'AND' EM CLAUSULAS 'WHERE'
module.exports.getRestaurantTablesFilter = async function(rest_id, table_type_id) {
    try {
        let sql = "SELECT *, mesa_type.mesa_type_id, mesa_type.mesa_type_name FROM mesa INNER JOIN mesa_type ON mesa_type.mesa_type_id = mesa.mesa_type_id WHERE mesa.mesa_restaurant_id = " + rest_id + " AND mesa.mesa_availability = '0' AND mesa.mesa_type_id = " + table_type_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

//OBTER DETALHES DE UM SERVIÇO DE RESTAURANTE PARA A RESERVA (QUANTIDADE DE MESAS DISPONIVEL)

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

/////ORDENAR MESAS DISPONIVEIS PELO PREÇO (QUANDO VISUALIZADOS - ASCENDENTE)

module.exports.getOrdenateAscendentTables = async function(rest_id) {
    try {
        let sql = "SELECT *, mesa_type.mesa_type_id, mesa_type.mesa_type_name FROM mesa INNER JOIN mesa_type ON mesa_type.mesa_type_id = mesa.mesa_type_id WHERE mesa.mesa_restaurant_id = " + rest_id + " AND mesa.mesa_availability = '0' ORDER BY mesa.mesa_price ASC";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

/////ORDENAR MESAS DISPONIVEIS PELO PREÇO (QUANDO VISUALIZADOS - DESCENDENTE)

module.exports.getOrdenateDescendentTables = async function(rest_id) {
    try {
        let sql = "SELECT *, mesa_type.mesa_type_id, mesa_type.mesa_type_name FROM mesa INNER JOIN mesa_type ON mesa_type.mesa_type_id = mesa.mesa_type_id WHERE mesa.mesa_restaurant_id = " + rest_id + " AND mesa.mesa_availability = '0' ORDER BY mesa.mesa_price DESC";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

//OBTER TODOS OS PRATOS DE UM RESTAURANTE (GESTORES)

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

//FILTRAR OS PRATOS DISPONIVEIS DE UM RESTAURANTE PELO SEU TIPO DE PRATO 

module.exports.getRestaurantPlatesFilter = async function(est_id, plate_identifier) {
    try {
        let sql = "SELECT plate.plate_id, plate.plate_name, plate.plate_price, plate.plate_restaurant_id, plate.plate_availability, restaurant.restaurant_id ,plate.plate_type_identifier, plate.plate_type_description, plate_type.plate_type_id, plate_type.plate_type_name FROM plate INNER JOIN plate_type ON plate_type.plate_type_id = plate.plate_type_identifier INNER JOIN restaurant ON restaurant.restaurant_id = plate.plate_restaurant_id WHERE plate_type.plate_type_id = " + plate_identifier + " AND restaurant.restaurant_id = " + est_id + " AND plate.plate_availability= '0'";
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

module.exports.getRestaurantPlatesUser = async function(est_id) {
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

//CRIAÇÃO DE PRATOS NUM RESTAURANTE (MENU DO RESTAURANTE - MÉTODO DE GESTOR)

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

//CRIAÇÃO DE UMA MESA NO RESTAURANTE (INICIALMENTE NA SUA CRIAÇÃO, ELA POSSUI O ESTADO DISPONIVEL)

module.exports.saveMesa = async function(mesa) {

    try {

        let sql =
            "INSERT " +
            "INTO mesa " +
            "(mesa_number, mesa_size, mesa_restaurant_id, mesa_type_id, mesa_price) " +
            "VALUES ($1, $2, $3, $4, $5) " +
            "RETURNING mesa_id";

            //console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [mesa.mesa_number, mesa.mesa_size, mesa.mesa_restaurant_id, mesa.mesa_type_id, mesa.mesa_price]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}

//CRIAÇÃO DE UM SPOT NUM ESTACIONAMENTO
module.exports.saveSpot = async function(spot) {

    try {

        let sql =
            "INSERT " +
            "INTO spot " +
            "(spot_price, spot_parking_lot_id, spot_number) " +
            "VALUES ($1, $2, $3) " +
            "RETURNING spot_id";

            //console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [spot.spot_price, spot.spot_parking_lot_id, spot.spot_number]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}



// ALTERAR DISPONIBILIDADE DO PRATO | Disponivel: 1 | Indisponivel: 0 | AMBAS AS FUNÇÕES SERÃO INTEGRADAS NUMA VERIFICACAO DO TIPO 'IF'

module.exports.UpdateAvailabilityOnPlate = async function(plate_id){ // FEITO

    try {
        let sql = "UPDATE plate " + "SET plate_availability = '0' " + "WHERE plate_id = " + plate_id;
        let result = await pool.query(sql);
        let ementasfound = result.rows;
        console.log("[ementasModel.getEmentasUser] recipes = " + JSON.stringify(ementasfound));
        return { status: 200, data: ementasfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}

module.exports.UpdateAvailabilityOffPlate = async function(plate_id){//FEITO

    try {
        let sql = "UPDATE plate " + "SET plate_availability = '1' " + "WHERE plate_id = " + plate_id;
        let result = await pool.query(sql);
        let ementasfound = result.rows;
        console.log("[ementasModel.getEmentasUser] recipes = " + JSON.stringify(ementasfound));
        return { status: 200, data: ementasfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}

//APAGAR UM PRATO DO MENU

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





//TERMINAR -> OBTER A QUANTIDADE DE LIKES DE UM ESTABELECIMENTO DE RESTAURAÇÃO

module.exports.getQuantityLikesRestaurant = async function(rest_id) {
    try {
        let sql = "SELECT COUNT(*) FROM like_restaurante WHERE like_restaurante = " + rest_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getQuantityMesasRestaurant = async function(rest_id) {
    try {
        let sql = "SELECT COUNT(*) FROM mesa WHERE mesa_restaurant_id = " + rest_id + " AND mesa_availability = '0'";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

//////////////////////////////////////////////////////// ACOMODACAO - MOSTRA SE TIVEREM LOCALIZACAO ASSOCIADA /////////////////////////////////////////////////////////////////////

module.exports.getAcomodacaoSingle = async function(est_id) {
    try {
        let sql = "SELECT *, place_servico_acomodacoes.local_id, place_servico_acomodacoes.local_morada, place_servico_acomodacoes.ref_system_id, place_servico_acomodacoes.geometry_info_point, place_servico_acomodacoes.local_servico_acomodacoes_id, place_servico_acomodacoes.local_latitude, place_servico_acomodacoes.local_longitude FROM equipment_service INNER JOIN place_servico_acomodacoes ON place_servico_acomodacoes.local_servico_acomodacoes_id = equipment_service.equipment_service_id WHERE equipment_service.equipment_service_id = " + est_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

///terminar - menos importante

module.exports.getAcomodacaoTypeFilter = async function(rest_id, acomodacao_type_id) {
    try {
        let sql = "SELECT *, mesa_type.mesa_type_id, mesa_type.mesa_type_name FROM mesa INNER JOIN mesa_type ON mesa_type.mesa_type_id = mesa.mesa_type_id WHERE mesa.mesa_restaurant_id = " + rest_id + " AND mesa.mesa_availability = '0' AND mesa.mesa_type_id = " + table_type_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getQuantityLikesAcomodacoesService = async function(rest_id) {
    try {
        let sql = "SELECT COUNT(*) FROM like_servico_acomodacao WHERE like_servico_acomodacao = " + rest_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getQuantityAcomodacoesService = async function(rest_id) {
    try {
        let sql = "SELECT COUNT(*) FROM acomodacao WHERE acomodacao_equipment_service_id = " + rest_id + " AND acomodacao_availability = '0'";
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

module.exports.getCheckEstabelecimentoRestaurante = async function(uti_id, est_id) {
    try {
        let sql = "SELECT * FROM like_restaurante WHERE like_restaurante.like_utilizador = " + uti_id + " AND like_restaurante.like_restaurante = " + est_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getCheckEstabelecimentoAcomodacao = async function(uti_id, est_id) {
    try {
        let sql = "SELECT * FROM like_servico_acomodacao WHERE like_servico_acomodacao.like_utilizador = " + uti_id + " AND like_servico_acomodacao.like_servico_acomodacao = " + est_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getCheckEstabelecimentoEstacionamento = async function(uti_id, est_id) {
    try {
        let sql = "SELECT * FROM like_estacionamento WHERE like_estacionamento.like_utilizador = " + uti_id + " AND like_estacionamento.like_estacionamento = " + est_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

//////////////////////////// POST DE UMA ACOMODACAO POR UM GESTOR (ACOMODACAO E A SUA POSIÇÃO)

module.exports.saveAcomodacaoObject = async function(acomodacao) {

    try {

        let sql =
            "INSERT " +
            "INTO acomodacao " +
            "(acomodacao_number, acomodacao_type_id, acomodacao_equipment_service_id, acomodacao_price) " +
            "VALUES ($1, $2, $3, $4) " +
            "RETURNING acomodacao_id";

            //console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [acomodacao.acomodacao_number, acomodacao.acomodacao_type_id, acomodacao.acomodacao_equipment_service_id, acomodacao.acomodacao_price]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}

module.exports.saveAcomodacaoPosition = async function(position) {

    try {

        let sql =
            "INSERT " +
            "INTO position_acomodacao " +
            "(position_line, position_column, acomodacao_identifier) " +
            "VALUES ($1, $2, $3) " +
            "RETURNING position_acomodacao_id";

            //console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [position.position_line, position.position_column, position.acomodacao_identifier]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}

////////////////////////////////////// MÉTODOS DE LUGARES E ESTACIONAMENTO /////////////////////////////////////////

/////OBTER DETALHES DE UM PARQUE DE ESTACIONAMENTO

module.exports.getDetailsParqueEstacionamento = async function(est_id) {
    try {
        let sql = "SELECT * FROM parking_lot WHERE parking_lot.parking_lot_id = " + est_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

/////OBTER A QUANTIDADE DE LUGARES DISPONIVEIS (EXIBIR NOS DETALHES)

module.exports.getQuantityAvailableParkingLots = async function(rest_id) {
    try {
        let sql = "SELECT COUNT(*) FROM spot WHERE spot_availability = '0' AND spot.spot_parking_lot_id = " + rest_id;
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

/////ORDENAR LUGARES DISPONIVEIS PELO PREÇO (QUANDO VISUALIZADOS - ASCENDENTE)

module.exports.getOrdenateAscendentParkingLot = async function(rest_id) {
    try {
        let sql = "SELECT * FROM spot WHERE spot.spot_parking_lot = " + rest_id +  " AND spot.spot_availability = '0' ORDER BY spot.spot_price ASC;";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

/////ORDENAR LUGARES DISPONIVEIS PELO PREÇO (QUANDO VISUALIZADOS - DESCENDENTE)

module.exports.getOrdenateDescendentParkingLot = async function(rest_id) {
    try {
        let sql = "SELECT * FROM spot WHERE spot.spot_parking_lot = " + rest_id +  " AND spot.spot_availability = '0' ORDER BY spot.spot_price DESC;";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

/////VISUALIZAR LUGARES DISPONIVEIS NUM PARQUE DE ESTACIONAMENTO

module.exports.getParkingLots = async function(rest_id) {
    try {
        let sql = "SELECT * FROM spot WHERE spot.spot_parking_lot_id = " + rest_id + " AND spot.spot_availability = '0'";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}


module.exports.saveReportRestaurante = async function(report) {

    try {

        let sql =
            "INSERT " +
            "INTO report_restaurante " +
            "(report_restaurante_id, report_restaurante_date) " +
            "VALUES ($1, $2) " +
            "RETURNING report_id";

            //console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [report.report_restaurante_id, report_restaurante_date]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}

module.exports.saveReportAcomodacao = async function(report) {

    try {

        let sql =
            "INSERT " +
            "INTO report_servico_acomodacao " +
            "(report_servico_acomodacao_id, report_servico_acomodacao_date) " +
            "VALUES ($1, $2) " +
            "RETURNING report_id";

            //console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [report.report_servico_acomodacao_id, report.report_servico_acomodacao_date]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}

module.exports.saveReportEstacionamento = async function(report) {

    try {

        let sql =
            "INSERT " +
            "INTO report_estacionamento " +
            "(report_estacionamento_id, report_estacionamento_date) " +
            "VALUES ($1, $2) " +
            "RETURNING report_id";

            //console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [report.report_estacionamento_id, report.report_estacionamento_date]);
        
        return { status: 200, result: result };
    } catch (err) {

        console.log(err);
        return { status: 500, result: err };
    }
}



