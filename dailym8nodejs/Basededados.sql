--------------- TERMINAR -----------------

CREATE TABLE spot (

	spot_id serial primary key,
	spot_price real NOT NULL,
	spot_availability bit NOT NULL,
	spot_parking_lot_id int NOT NULL

);

ALTER TABLE spot
ADD CONSTRAINT fk_spot_parking_lot_id FOREIGN KEY(spot_parking_lot_id) REFERENCES parking_lot (parking_lot_id);

-----------------LOCAIS COM POSTGIS-------------------------------

---------- POST DE LOCAL COM POSTGIS ------------------

INSERT INTO place (local_morada, geometry_info_point) 
VALUES ('Av. República 10F, 1050-191 Lisboa', 'POINT(38.735610682743214 -9.14492507561783)')

CREATE EXTENSION postgis;

SELECT * FROM spatial_ref_sys

ALTER TABLE establishment
ADD COLUMN establishment_local_id int



ALTER TABLE establishment
ADD CONSTRAINT fk_establishment_local_id FOREIGN KEY (establishment_local_id) REFERENCES place (local_id)

CREATE TABLE place (

	local_id serial primary key,
	local_morada varchar(320),
	ref_system_id int NOT NULL,
	geometry_info_point geometry

);

ALTER TABLE place 
ALTER COLUMN ref_system_id SET DEFAULT 4326

ALTER TABLE place
ADD CONSTRAINT fk_ref_system_id FOREIGN KEY (ref_system_id) REFERENCES spatial_ref_sys (srid)

ALTER TABLE establishment
ADD CONSTRAINT fk_establishment_local_id FOREIGN KEY (establishment_local_id) REFERENCES place (local_id)

-------------------------- CODIGO JÁ FEITO ---------------------------------

CREATE TABLE utilizador (

   utilizador_id SERIAL primary key,
   utilizador_name varchar(50) NOT NULL,
   utilizador_username varchar(40) NOT NULL,
   utilizador_email varchar(80),
   utilizador_password varchar(1000) NOT NULL,
   utilizador_type_id int

);

INSERT INTO utilizador_type(utilizador_type_name) VALUES ('Cliente'), ('Gestor'), ('Staff')

INSERT INTO utilizador(utilizador_name, utilizador_username, utilizador_email, utilizador_password, utilizador_type_id) VALUES ('João Antunes', 'joao_antunes2002', 'joaoantunes@gmail.com', 'joaoantunes2002', 1)

ALTER TABLE utilizador
ADD CONSTRAINT fk_utilizador_type_id FOREIGN KEY(utilizador_type_id) REFERENCES utilizador_type (utilizador_type_id);

select * from utilizador

CREATE TABLE utilizador_type (
 
   utilizador_type_id SERIAL primary key,
   utilizador_type_name varchar(25) not null

);

CREATE TABLE reservation (

	reservation_id SERIAL primary key,
	reservation_date date NOT NULL,
	reservation_price real NOT NULL,
	reservation_number_items int NOT NULL,
	user_id_reservation int NOT NULL,
	establishment_id_reservation int NOT NULL,
	payment_id_reservation int NOT NULL,
	pack_id_reservation int
);

--FALTA LIGAR AS CHAVES ESTRANGEIRAS DA RESERVA ÁS OUTRAS TABELAS

CREATE TABLE establishment (

    establishment_id serial primary key,
	establishment_name varchar(25) NOT NULL,
	establishment_description varchar(600)

);

CREATE TABLE user_like_establishment (

    like_id serial primary key,
	user_like_id int NOT NULL,
	establishment_like_id int NOT NULL

);

ALTER TABLE user_like_establishment
ADD CONSTRAINT fk_user_like_id FOREIGN KEY(user_like_id) REFERENCES utilizador (utilizador_id);

ALTER TABLE user_like_establishment
ADD CONSTRAINT fk_establishment_like_id FOREIGN KEY(establishment_like_id) REFERENCES establishment (establishment_id);

CREATE TABLE parking_lot (

	parking_lot_id serial primary key,
	parking_lot_number_spots int NOT NULL

) INHERITS(establishment);

CREATE TABLE spot (

	spot_id serial primary key,
	spot_price real NOT NULL,
	spot_availability bit NOT NULL,
	spot_parking_lot_id int NOT NULL

);

ALTER TABLE spot
ADD CONSTRAINT fk_spot_parking_lot_id FOREIGN KEY(spot_parking_lot_id) REFERENCES parking_lot (parking_lot_id);


CREATE TABLE restaurant (

	restaurant_id serial primary key,
	restaurant_type_id int NOT NULL,
	restaurante_number_tables int NOT NULL

) INHERITS(establishment);

ALTER TABLE restaurant
ADD CONSTRAINT fk_restaurant_type_id FOREIGN KEY(restaurant_type_id) REFERENCES type_restaurant (type_restaurant_id);

CREATE TABLE type_restaurant (

	type_restaurant_id serial primary key,
	type_restaurant_name varchar(70) NOT NULL

);

CREATE TABLE plate (

	plate_id serial primary key,
	plate_name varchar(60) NOT NULL,
	plate_price real NOT NULL,
	plate_restaurant_id int NOT NULL

);

ALTER TABLE plate
ADD CONSTRAINT fk_plate_restaurant_id FOREIGN KEY(plate_restaurant_id) REFERENCES restaurant (restaurant_id);

CREATE TABLE mesa (

	mesa_id serial primary key,
	mesa_availability bit NOT NULL,
	mesa_number int NOT NULL,
	mesa_size int NOT NULL,
	mesa_restaurant_id int NOT NULL,
	mesa_type_id int NOT NULL

);

ALTER TABLE mesa
ADD CONSTRAINT fk_mesa_restaurant_id FOREIGN KEY(mesa_restaurant_id) REFERENCES restaurant (restaurant_id);

ALTER TABLE mesa
ADD CONSTRAINT fk_mesa_type_id FOREIGN KEY(mesa_type_id) REFERENCES mesa_type (mesa_type_id);

CREATE TABLE mesa (

	mesa_id serial primary key,
	mesa_availability bit NOT NULL,
	mesa_number int NOT NULL,
	mesa_size int NOT NULL,
	mesa_restaurant_id int NOT NULL,
	mesa_type_id int NOT NULL

);

CREATE TABLE mesa_type (

	mesa_type_id serial primary key,
	mesa_type_name varchar(50) NOT NULL

);


------------------------ NOVO CÓDIGO ---------------

CREATE TABLE equipment_service (

	equipment_service_id serial primary key,
	number_acomodacoes int NOT NULL,
	equipment_service_name varchar(100) NOT NULL

) INHERITS(establishment);

CREATE TABLE acomodacao (

	acomodacao_id serial primary key,
	acomodacao_number int NOT NULL,
	acomodacao_availability bit NOT NULL,
	acomodacao_type_id int NOT NULL,
	acomodacao_equipment_service_id int NOT NULL

);


CREATE TABLE acomodacao_type (

	acomodacao_type_id serial primary key,
	acomodacao_type_name varchar(70) NOT NULL

);

ALTER TABLE acomodacao
ADD CONSTRAINT fk_acomodacao_type_id FOREIGN KEY(acomodacao_type_id) REFERENCES acomodacao_type (acomodacao_type_id);

ALTER TABLE acomodacao
ADD CONSTRAINT fk_acomodacao_equipment_service_id FOREIGN KEY(acomodacao_equipment_service_id) REFERENCES equipment_service (equipment_service_id);

----------------------------------CODIGO DE TESTE (FALTA TERMINAR) ---------------------------------------------

SELECT * FROM utilizador

SELECT * FROM establishment

SELECT * FROM restaurant

INSERT INTO restaurant (establishment_name, establishment_description, restaurant_type_id, restaurante_number_tables)
VALUES ('Restaurante 1', 'Descrição do restaurante 1', 1, 30)

SELECT * FROM user_like_establishment

ALTER TABLE user_like_establishment
ADD CONSTRAINT fk_establishment_like_id FOREIGN KEY(establishment_like_id) REFERENCES establishment (establishment_id);

ALTER TABLE user_like_establishment
ADD CONSTRAINT fk_user_like_id FOREIGN KEY(user_like_id) REFERENCES utilizador (utilizador_id);

----------------- REFAZER LIKE -----------------
INSERT INTO user_like_establishment (user_like_id, establishment_like_id) 
VALUES (1, 1)

select * from user_like_establishment

INSERT INTO type_restaurant (type_restaurant_name) VALUES ('Português')

SELECT * FROM type_restaurant

SELECT * FROM utilizador_type

ALTER TABLE utilizador ALTER COLUMN utilizador_type_id SET DEFAULT 1

ALTER TABLE utilizador MODIFY utilizador_password varchar(600)

ALTER TABLE utilizador ALTER COLUMN utilizador_password TYPE varchar(600);

------------- NEW CODE AGAIN -----------------

SELECT * FROM parking_lot

ALTER TABLE parking_lot
ADD CONSTRAINT fk_establishment_utilizador_id FOREIGN KEY(establishment_utilizador_id) REFERENCES utilizador (utilizador_id);
 
 DROP TABLE user_like_establishment
 
 SELECT * FROM like_establishment
 
 CREATE TABLE like_establishment (
 
   like_id serial primary key,
   user_id int,
   estabelecimento_id int
 
 );
 
 COUNT(like_establishment.estabelecimento_id)
 SELECT restaurant.establishment_name FROM restaurant

  SELECT restaurant.establishment_id, restaurant.establishment_name, restaurant.establishment_description, restaurant.restaurant_type_id, restaurant.restaurante_number_tables FROM restaurant
 INNER JOIN like_establishment ON like_establishment.estabelecimento_id = restaurant.establishment_id
 
 SELECT * FROM restaurant WHERE (SELECT COUNT(*) FROM user_like_establishment) > 2 ORDER BY random() LIMIT 8 
 
 
 SELECT * FROM restaurant WHERE 
 
 
  ALTER TABLE like_establishment
ADD CONSTRAINT fk_estabelecimento_id FOREIGN KEY(estabelecimento_id) REFERENCES establishment (establishment_id);
 
 ALTER TABLE like_establishment
ADD CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES utilizador (utilizador_id);


SELECT parking_lot.establishment_id, parking_lot.parking_lot_id, parking_lot.establishment_name, parking_lot.parking_lot_number_spots FROM parking_lot
ORDER BY random() LIMIT 8

SELECT restaurant.establishment_id, restaurant.restaurant_id ,restaurant.establishment_name, restaurant.restaurant_type_id, restaurant.restaurante_number_tables, type_restaurant.type_restaurant_id, type_restaurant.type_restaurant_name 
FROM restaurant 
INNER JOIN type_restaurant ON type_restaurant.type_restaurant_id = restaurant.restaurant_type_id
WHERE restaurant.establishment_name LIKE 'Restaurante 1'
ORDER BY random() LIMIT 8

SELECT * FROM restaurant

INNER JOIN type_restaurant ON type_restaurant.type_restaurant_id = restaurant.restaurant_type_id " + "ORDER BY random() LIMIT 8
INSERT INTO restaurant (establishment_name, establishment_description, restaurant_type_id, restaurante_number_tables, establishment_utilizador_id)
VALUES ('Name maré dos golfinhos', 'New desc', 1, 43,  2)

SELECT *, type_restaurant.type_restaurant_id, type_restaurant.type_restaurant_name FROM restaurant INNER JOIN type_restaurant ON type_restaurant.type_restaurant_id = restaurant.restaurant_type_id WHERE restaurant.restaurant_type_id = 

ALTER TABLE plate ALTER COLUMN plate_availability SET DEFAULT '0'

INSERT INTO restaurant (establishment_name, establishment_description, restaurant_type_id, restaurante_number_tables, establishment_utilizador_id)
VALUES ('SDASDA', 'NeDSADSA', 1, 13,  2)

SELECT * FROM restaurant



CREATE TABLE plate_type (

	plate_type_id serial primary key,
	plate_type_name varchar(80)

);

INSERT INTO plate_type (plate_type_name) VALUES ('Aperitivos'), ('Entradas'), ('Pratos Principais'), ('Sobremesas'), ('Pratos do Dia')

ALTER TABLE plate ADD COLUMN plate_availability bit

ALTER TABLE plate ADD COLUMN plate_type_identifier INT

ALTER TABLE plate ADD COLUMN plate_type_description varchar(800)

ALTER TABLE plate
ADD CONSTRAINT fk_plate_type_identifier FOREIGN KEY (plate_type_identifier) REFERENCES plate_type (plate_type_id)


SELECT * FROM plate WHERE plate.plate_restaurant_id = 

SELECT * FROM restaurant

--------- OBTER PRATOS DE UM RESTAURANTE (MENU) --------

SELECT plate.plate_id, plate.plate_name, plate.plate_price, plate.plate_restaurant_id, plate.plate_availability, plate.plate_type_identifier, plate.plate_type_description, plate_type.plate_type_id, plate_type.plate_type_name 
FROM plate 
INNER JOIN plate_type ON plate_type.plate_type_id = plate.plate_type_identifier 
WHERE plate.plate_restaurant_id = 


----------- FILTRAR PRATOS DE UM RESTAURANTE ----------
SELECT plate.plate_id, plate.plate_name, plate.plate_price, plate.plate_restaurant_id, plate.plate_availability, restaurant.restaurant_id ,plate.plate_type_identifier, plate.plate_type_description, plate_type.plate_type_id, plate_type.plate_type_name FROM plate INNER JOIN plate_type ON plate_type.plate_type_id = plate.plate_type_identifier INNER JOIN restaurant ON restaurant.restaurant_id = plate.plate_restaurant_id WHERE plate_type.plate_type_id =  AND restaurant.restaurant_id = 

------------ FILTRAR RESTAURANTES PELO SEU TIPO DE COMIDA -------

SELECT * FROM type_restaurant.type_restaurant_id, type_restaurant.type_restaurant_name 

SELECT *, type_restaurant.type_restaurant_id, type_restaurant.type_restaurant_name FROM restaurant
INNER JOIN type_restaurant ON type_restaurant.type_restaurant_id = restaurant.restaurant_type_id
WHERE restaurant.restaurant_type_id = 

INSERT INTO plate (plate_name, plate_price, plate_restaurant_id, plate_availability, plate_type_identifier, plate_type_description)
VALUES ('Butter Breadsticks', 8.23, 2, '0', 1, 'Breadsticks made with butter and salt')








-------------------------------------------------- SQL 17/11/2022 -------

SELECT * FROM utilizador

CREATE TABLE payment(

  payment_id serial primary key,
  payment_credit_card_number int NOT NULL,
  cvc_payment int NOT NULL,
  expiration_date_payment date NOT NULL,
  date_payment date NOT NULL,
  reservation_payment_id int not null
);

CREATE TABLE position_acomodacao (

	position_acomodacao_id serial primary key,
	position_line int NOT NULL,
	position_column int NOT NULL,
	acomodacao_identifier int NOT NULL

);

ALTER TABLE position_acomodacao 
ADD CONSTRAINT fk_acomodacao_identifier FOREIGN KEY (acomodacao_identifier) REFERENCES acomodacao(acomodacao_id)

drop table position_acomodacao

SELECT  ,acomodacao.acomodacao_id, acomodacao.acomodacao_number, acomodacao.acomodacao_availability, acomodacao.acomodacao_type_id, acomodacao.acomodacao_equipment_service_id, position_acomodacao.position_acomodacao_id, position_acomodacao.position_line, position_acomodacao.position_column, position_acomodacao.acomodacao_identifier, acomodacao_type.acomodacao_type_id, acomodacao_type.acomodacao_type_name FROM acomodacao
INNER JOIN position_acomodacao ON position_acomodacao.acomodacao_identifier = acomodacao.acomodacao_id 
INNER JOIN acomodacao_type ON acomodacao_type.acomodacao_type_id = acomodacao.acomodacao_type_id
WHERE 



SELECT equipment_service.establishment_id, equipment_service.establishment_name, equipment_service.establishment_description, equipment_service.equipment_service_id, equipment_service.number_acomodacoes, equipment_service.equipment_service_name, equipment_service.establishment_utilizador_id, equipment_service.type_service_identifier, utilizador.utilizador_name FROM equipment_service INNER JOIN utilizador ON utilizador.utilizador_id = equipment_service.establishment_utilizador_id WHERE equipment_service.establishment_id = 

ALTER TABLE acomodacao DROP COLUMN acomodacao_line


ALTER TABLE acomodacao
ADD COLUMN acomodacao_position_id  not null 

ALTER TABLE payment
ADD CONSTRAINT fk_reservation_payment_id FOREIGN KEY (reservation_payment_id) REFERENCES reservation (reservation_id)

DROP TABLE payment

ALTER TABLE payment ADD COLUMN reservation_payment_id int NOT NULL

ALTER TABLE reservation DROP COLUMN payment_id_payment 

ALTER TABLE reservation ADD COLUMN payment_id_payment int NOT NULL

ALTER TABLE reservation 
ADD CONSTRAINT fk_payment_id_payment FOREIGN KEY payment_id_payment REFERENCES payment (payment_id)








----------------- OBTER ACOMODACOES DISPONIVEIS DE UM SERVIÇO DE TOLDOS --------------

SELECT *, acomodacao_type.acomodacao_type_id, acomodacao_type.acomodacao_type_name, equipment_service.equipment_service_id FROM acomodacao
INNER JOIN acomodacao_type ON acomodacao_type.acomodacao_type_id = acomodacao.acomodacao_type_id
INNER JOIN equipment_service ON equipment_service.equipment_service_id = acomodacao.acomodacao_equipment_service_id
WHERE equipment_service.equipment_service_id = 1 AND acomodacao.acomodacao_availability = '0'

------------------ FILTRAR ACOMODACOES POR LINHA ----------------------------------



INSERT INTO equi

SELECT * FROM equipment_service

INSERT INTO equipment_service (establishment_name, establishment_description, number_acomodacoes, equipment_service_name, establishment_utilizador_id)
VALUES ('Toldos Teste 1', 'Descrição do teste 1 do serviço de toldos', 32, 'Toldos Teste 1', 2)

ALTER TABLE acomodacao ALTER COLUMN acomodacao_availability SET DEFAULT '0'





----- ADICIONAR UMA ACOMODAÇÃO (PARA GESTORES) ---------------

---- FIRST POST -----
INSERT INTO acomodacao (acomodacao_number, acomodacao_type_id, acomodacao_equipment_service_id, acomodacao_price)
VALUES (1, 1, 1, 12.4)

----- SECOND POST -----

INSERT INTO position_acomodacao (position_line, position_column, acomodacao_identifier)
VALUES (1,1,1)

---------------------------------------------------------------

---------- GERAR SERVIÇOS ALEATORIOS DE TOLDOS DE PRAIA -------------

SELECT * FROM equipment_service ORDER BY random() LIMIT 50


-----------------------------------------------------------------------

----------------

------------ FILTRAR ACOMODACOES PELA LINHA --------------

SELECT *, acomodacao_type.acomodacao_type_id, acomodacao_type.acomodacao_type_name, position_acomodacao.position_acomodacao_id, position_acomodacao.position_line, position_acomodacao.position_column, position_acomodacao.acomodacao_identifier FROM acomodacao
INNER JOIN acomodacao_type ON acomodacao_type.acomodacao_type_id = acomodacao.acomodacao_type_id
INNER JOIN position_acomodacao ON position_acomodacao.acomodacao_identifier = acomodacao.acomodacao_id
WHERE position_acomodacao.position_line =  AND acomodacao.acomodacao_equipment_service_id = 

----------------------------------------------------------

----------- 

ALTER TABLE acomodacao 
ADD COLUMN acomodacao_price real 

ALTER TABLE acomodacao
ALTER COLUMN acomodacao_price set default 1

ALTER TABLE mesa
ADD COLUMN mesa_price real default 1

ALTER TABLE spot
ADD COLUMN mesa_price real default 1

---------------------------------------------- OBTER TOLDOS DISPONIVEIS -------------

SELECT *, acomodacao_type.acomodacao_type_id, acomodacao_type.acomodacao_type_name, equipment_service.equipment_service_id, position_acomodacao.position_acomodacao_id, position_acomodacao.position_line, position_acomodacao.position_column, position_acomodacao.acomodacao_identifier FROM acomodacao
INNER JOIN position_acomodacao ON position_acomodacao.acomodacao_identifier = acomodacao.acomodacao_id
INNER JOIN acomodacao_type ON acomodacao_type.acomodacao_type_id = acomodacao.acomodacao_type_id
INNER JOIN equipment_service ON equipment_service.equipment_service_id = acomodacao.acomodacao_equipment_service_id
WHERE equipment_service.equipment_service_id = 1 AND acomodacao.acomodacao_availability = '0'

---------------------------------------- ORDENAR OS TOLDOS PELO PREÇO -----------------

---------------------------------------------- MÉTODOS PARA ESTACIONAMENTO ---------------------------------------------

----- VISUALIZAR OS PARQUES (50 ALEATORIOS)  -> FEITO -----




----- OBTER DETALHES DE UM PARQUE -----

SELECT * FROM parking_lot WHERE parking_lot.parking_lot_id = 'id do parque'


----- OBTER A QUANTIDADE DE LUGARES DISPONIVEIS (EXIBIR NOS DETALHES) -----

SELECT COUNT(*) FROM spot WHERE spot_availability = '0' AND spot.spot_parking_lot_id = 'id do parque'


----- ORDENAR LUGARES DISPONIVEIS PELO PREÇO (QUANDO VISUALIZADOS - ASCENDENTE) -----

SELECT * FROM spot WHERE spot.spot_parking_lot = 'id do parque' ORDER BY spot.spot_price ASC;

------ OBTER TODOS OS SPOTS DISPONIVEIS (VISUALIZAÇÃO) -------

SELECT * FROM spot WHERE spot.spot_parking_lot_id = AND spot.spot_availability = '0'

------------------------------------------ METODOS DE MÉTODO DE RESERVA -----------------------------------------

----- RESERVAR UM SPOT (POST) ------

----- PASSOS PARA UM POST BEM SUCEDIDO -----

-- 1 PASSO: O UTILIZADOR ACEDE AOS DETALHES DA RESERVA, INSERINDO OS 


----- RESERVAR UM SPOT (UPDATE/PUT Á DISPONIBILIDADE DO SPOT RESERVADO) -----



----- ELIMINAR UMA RESERVA (UPDATE/PUT Á INDISPONIBILIDADE DO SPOT DESRESERVADO) ----



----- RESERVAR UMA MESA (POST) ------



----- RESERVAR UMA MESA (UPDATE/PUT Á DISPONIBILIDADE DA MESA RESERVADA) -----



----- ELIMINAR UMA RESERVA (UPDATE/PUT Á INDISPONIBILIDADE DA MESA DESRESERVADA) ----



----- RESERVAR UMA ACOMODACAO (POST) ------



----- RESERVAR UMA ACOMODACAO (UPDATE/PUT Á DISPONIBILIDADE DA ACOMODACAO RESERVADO) -----



----- ELIMINAR UMA RESERVA (UPDATE/PUT Á INDISPONIBILIDADE DA ACOMODACAO DESRESERVADA) ----

--------------------------------- NOVO CODIGO DE CRIACAO DE TABELAS DE PLACE ---------------------------------------------

CREATE TABLE place_restaurante (

  local_id serial primary key,
  local_morada varchar(400),
  ref_system_id int DEFAULT 4326,
  geometry_info_point geometry,
  local_restaurante_id int NOT NULL,
  local_latitude real NOT NULL,
  local_longitude real NOT NULL

)

INSERT INTO place_restaurante (local_morada, geometry_info_point, local_restaurante_id, local_latitude, local_longitude)
VALUES ('Rua 38','POINT(37.2173 -12.28743)', 4, 37.2173, -12.28743)

CREATE TABLE place_servico_acomodacoes (

  local_id serial primary key,
  local_morada varchar(400),
  ref_system_id int DEFAULT 4326,
  geometry_info_point geometry,
  local_servico_acomodacoes_id int NOT NULL,
  local_latitude real NOT NULL,
  local_longitude real NOT NULL

)

CREATE TABLE place_estacionamento (

  local_id serial primary key,
  local_morada varchar(400),
  ref_system_id int DEFAULT 4326,
  geometry_info_point geometry,
  local_estacionamento_id int NOT NULL,
  local_latitude real NOT NULL,
  local_longitude real NOT NULL

)

ALTER TABLE place_estacionamento
ADD CONSTRAINT fk_local_estacionamento_id FOREIGN KEY (local_estacionamento_id) REFERENCES parking_lot (parking_lot_id)

ALTER TABLE place_restaurante
ADD CONSTRAINT fk_local_restaurante_id FOREIGN KEY (local_restaurante_id) REFERENCES restaurant (restaurant_id)

ALTER TABLE place_servico_acomodacoes
ADD CONSTRAINT fk_local_servico_acomodacoes_id FOREIGN KEY (local_servico_acomodacoes_id) REFERENCES equipment_service (equipment_service_id)

CREATE TABLE report_restaurante (

  report_id serial primary key,
  report_restaurante_id int

)

ALTER TABLE report_restaurante 
ADD CONSTRAINT fk_report_restaurante_id FOREIGN KEY (report_restaurante_id) REFERENCES restaurant (restaurant_id)

CREATE TABLE report_estacionamento (

  report_id serial primary key,
  report_estacionamento_id int

)

ALTER TABLE report_estacionamento
ADD CONSTRAINT fk_report_estacionamento_id FOREIGN KEY (report_estacionamento_id) REFERENCES parking_lot (parking_lot_id)

CREATE TABLE report_servico_acomodacao (

  report_id serial primary key,
  report_servico_acomodacao_id int

)

ALTER TABLE report_servico_acomodacao
ADD CONSTRAINT fk_report_servico_acomodacao_id FOREIGN KEY (report_servico_acomodacao_id) REFERENCES equipment_service (equipment_service_id)


ALTER TABLE report_restaurante
ADD COLUMN report_restaurante_date TIMESTAMP

ALTER TABLE report_restaurante
ALTER COLUMN report_restaurante_date SET DEFAULT now()

ALTER TABLE report_servico_acomodacao
ADD COLUMN report_servico_acomodacao_date TIMESTAMP

ALTER TABLE report_servico_acomodacao
ALTER COLUMN report_servico_acomodacao_date SET DEFAULT now()

ALTER TABLE report_estacionamento
ADD COLUMN report_estacionamento_date TIMESTAMP

ALTER TABLE report_estacionamento
ALTER COLUMN report_estacionamento_date SET DEFAULT now()
-------------------------------------------- OBTER DETALHES DOS 250 PRIMEIROS REPORTS ---------------------------------------------------

SELECT report_restaurante.report_id, report_restaurante.report_restaurante_id, report_restaurante.report_restaurante_date,restaurant.restaurant_id, restaurant.establishment_name, restaurant.type_service_identifier, restaurant.restaurante_number_tables, type_restaurant.type_restaurant_id, type_restaurant.type_restaurant_name, establishment.establishment_id, establishment.establishment_utilizador_id, utilizador.utilizador_id, utilizador.utilizador_name, utilizador.utilizador_username FROM report_restaurante
INNER JOIN restaurant ON restaurant.restaurant_id = report_restaurante.report_restaurante_id
INNER JOIN type_restaurant ON type_restaurant.type_restaurant_id = restaurant.restaurant_type_id
INNER JOIN establishment ON establishment.establishment_id = restaurant.establishment_id
INNER JOIN utilizador ON utilizador.utilizador_id = establishment.establishment_utilizador_id
ORDER BY report_restaurante.report_restaurante_date DESC

-------------------------------------------------- APAGAR UM ESTABELECIMENTO (RESTAURANTE) | 2 PASSOS.

--1. APAGAR TODOS OS REPORTS DO RESTAURANTE

DELETE FROM report_restaurante WHERE report_restaurante.report_restaurante_id = x

--2. APAGAR TODAS AS RESERVAS MARCADAS NO RESTAURANTE

DELETE FROM reserva_restaurante WHERE reserva_restaurante.restaurante_identifier = x

--3. APAGAR TODOS OS PRATOS DO RESTAURANTE

DELETE FROM plate WHERE plate.plate_restaurant_id = x

--4. APAGAR TODAS AS MESAS DO RESTAURANTE

DELETE FROM mesa WHERE mesa.mesa_restaurant_id = x

--3. APAGAR EM SI O RESTAURANTE

DELETE FROM restaurant WHERE restaurant.restaurant_id = x


-------------------------------------------------- APAGAR UM SERVIÇO DE TOLDOS (TOLDOS) | 2 PASSOS.

--1. APAGAR TODOS OS REPORTS DO RESTAURANTE

DELETE FROM report_servico_acomodacao WHERE report_servico_acomodacao.report_servico_acomodacao_id = x

--2. APAGAR TODAS AS RESERVAS MARCADAS NO RESTAURANTE

DELETE FROM reserva_servico_acomodacao WHERE reserva_servico_acomodacao.servico_acomodacao_identifier = x

--3. APAGAR TODAS AS ACOMODACOES DO RESTAURANTE (APAGAR TAMBEM AS POSIÇÕES DE ACOMODACOES PERTENCENTES A UM SERVIÇO DE TOLDOS)



DELETE FROM acomodacao WHERE acomodacao.acomodacao_equipment_service_id = x

--3. APAGAR EM SI O RESTAURANTE

DELETE FROM equipment_service WHERE equipment_service.equipment_service_id = x



-------------------------------------------------- APAGAR UM ESTACIONAMENTO  | 2 PASSOS.

--1. APAGAR TODOS OS REPORTS DO RESTAURANTE

DELETE FROM report_parking_lot WHERE report_parking_lot.report_parking_lot_id = x

--2. APAGAR TODAS AS RESERVAS MARCADAS NO RESTAURANTE

DELETE FROM reserva_parking_lot WHERE reserva_parking_lot.parking_lot_identifier = x

--3. APAGAR TODOS OS SPOTS DO RESTAURANTE

DELETE FROM spot WHERE spot.spot_parking_lot_id = x


--4. APAGAR EM SI O RESTAURANTE

DELETE FROM parking_lot WHERE parking_lot.parking_lot_id = x

--------------------------------------------------------------- APAGAR UMA CONTA -----------------------------------------------------

DELETE FROM establishment WHERE establishment_utilizador_id = x

DELETE FROM utilizador WHERE utilizador.utilizador_id = x


------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE reserva_mesa (

  id_reservation serial primary key,
  date_marcacao_reservation date NOT NULL DEFAULT CURRENT_DATE,
  user_identifier_reservation int NOT NULL,
  mesa_identifier_reservation int NOT NULL,
  date_marcada_reservation TIMESTAMP NOT NULL

);

ALTER TABLE reserva_mesa
ADD CONSTRAINT fk_user_identifier_reservation FOREIGN KEY (user_identifier_reservation) REFERENCES utilizador (utilizador_id)

ALTER TABLE reserva_mesa
ADD CONSTRAINT fk_mesa_identifier_reservation FOREIGN KEY (mesa_identifier_reservation) REFERENCES mesa (mesa_id)

CREATE TABLE reserva_acomodacao (

  id_reservation serial primary key,
  date_marcacao_reservation date NOT NULL DEFAULT CURRENT_DATE,
  user_identifier_reservation int NOT NULL,
  acomodacao_identifier_reservation int NOT NULL,
  date_marcada_reservation TIMESTAMP NOT NULL

);

ALTER TABLE reserva_acomodacao
ADD CONSTRAINT fk_user_identifier_reservation FOREIGN KEY (user_identifier_reservation) REFERENCES utilizador (utilizador_id)

ALTER TABLE reserva_acomodacao
ADD CONSTRAINT fk_acomodacao_identifier_reservation FOREIGN KEY (acomodacao_identifier_reservation) REFERENCES acomodacao (acomodacao_id)

CREATE TABLE reserva_spot (

  id_reservation serial primary key,
  date_marcacao_reservation date NOT NULL DEFAULT CURRENT_DATE,
  user_identifier_reservation int NOT NULL,
  spot_identifier_reservation int NOT NULL,
  date_marcada_reservation TIMESTAMP NOT NULL

);

ALTER TABLE reserva_spot
ADD CONSTRAINT fk_user_identifier_reservation FOREIGN KEY (user_identifier_reservation) REFERENCES utilizador (utilizador_id)

ALTER TABLE reserva_spot
ADD CONSTRAINT fk_spot_identifier_reservation FOREIGN KEY (spot_identifier_reservation) REFERENCES spot (spot_id)
------------------------------------------

ALTER TABLE reserva_mesa 
ADD COLUMN payment_credit_card_number varchar(400) UNIQUE NOT NULL

ALTER TABLE reserva_mesa 
ADD COLUMN payment_cvc_number varchar(400) NOT NULL

ALTER TABLE reserva_acomodacao
ADD COLUMN payment_credit_card_number varchar(400) UNIQUE NOT NULL

ALTER TABLE reserva_acomodacao 
ADD COLUMN payment_cvc_number varchar(400) NOT NULL

ALTER TABLE reserva_spot
ADD COLUMN payment_credit_card_number varchar(400) UNIQUE NOT NULL

ALTER TABLE reserva_spot
ADD COLUMN payment_cvc_number varchar(400) NOT NULL


---------------------------------- SQL PARA LIKES ------------------------------------

CREATE TABLE like_restaurante (

   like_id serial primary key,
   like_utilizador int NOT NULL,
   like_restaurante int NOT NULL

)

ALTER TABLE like_restaurante
ADD CONSTRAINT fk_like_utilizador FOREIGN KEY (like_utilizador) REFERENCES utilizador (utilizador_id)

ALTER TABLE like_restaurante
ADD CONSTRAINT fk_like_restaurante FOREIGN KEY (like_restaurante) REFERENCES restaurant (restaurant_id)

CREATE TABLE like_servico_acomodacao (

   like_id serial primary key,
   like_utilizador int NOT NULL,
   like_servico_acomodacao int NOT NULL

)

ALTER TABLE like_servico_acomodacao
ADD CONSTRAINT fk_like_utilizador FOREIGN KEY (like_utilizador) REFERENCES utilizador (utilizador_id)

ALTER TABLE like_servico_acomodacao
ADD CONSTRAINT fk_like_servico_acomodacao FOREIGN KEY (like_servico_acomodacao) REFERENCES equipment_service (equipment_service_id)

CREATE TABLE like_estacionamento (

   like_id serial primary key,
   like_utilizador int NOT NULL,
   like_estacionamento int NOT NULL

)

ALTER TABLE like_estacionamento
ADD CONSTRAINT fk_like_utilizador FOREIGN KEY (like_utilizador) REFERENCES utilizador (utilizador_id)

ALTER TABLE like_estacionamento
ADD CONSTRAINT fk_like_estacionamento FOREIGN KEY (like_estacionamento) REFERENCES parking_lot (parking_lot_id)


----------------- COMO SABEMOS SE UM LIKE JÁ ESTÁ TOMADO ? SELECT ANTES DE DECIDIR QUE BOTÃO APARECERÁ PARA REMOVER OU DEIXAR LIKE -----------------

----- PRIMEIRO FAZ-SE O SELECT PARA VERIFICAR, SE EXISTIR, SO PERMITE A REMOÇÃO, CASO CONTRARIO PERMITE SOMENTE A ADIÇÃO -------------------------

SELECT * FROM like_restaurante WHERE like_restaurante.like_utilizador = x AND like_restaurante.like_restaurante = x

---------- SE RETORNAR ALGUMA COISA, SIGNIFICA QUE O LIKE JÁ EXISTE, SÓ POSSIBILITANDO A SUA REMOÇÃO

DELETE FROM like_restaurante WHERE like_restaurante.like_utilizador = x AND like_restaurante.like_restaurante = x

-- CASO NÃO HAJA, FAZ UM INSERT NORMAL NA TABELA --

INSERT INTO like_restaurante (campos da tabela) VALUES (campos)

------- PARA DEPOIS DECIDIR O INSERT DOS LIKES (EM QUE TABELA), USAREMOS O TYPE_IDENTIFIER DO LOCAL (QUE PODE SER 1 (RESTAURANTE), 2 (ACOMODACAO) E 3 (ESTACIONAMENTO)) -----------




-------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE pack_restaurante (

   pack_id serial primary key,
   pack_restaurante_id int,
   pack_availability bit DEFAULT '0'
	
)

ALTER TABLE pack_restaurante 
ADD CONSTRAINT fk_pack_restaurante_id FOREIGN KEY (pack_restaurante_id) REFERENCES restaurant(restaurant_id)

CREATE TABLE pack_servico_acomodacao (

   pack_id serial primary key,
   pack_servico_acomodacao_id int,
   pack_availability bit DEFAULT '0'
	
)

ALTER TABLE pack_servico_acomodacao
ADD CONSTRAINT fk_pack_servico_acomodacao_id FOREIGN KEY (pack_servico_acomodacao_id) REFERENCES equipment_service(equipment_service_id)

CREATE TABLE pack_estacionamento (

   pack_id serial primary key,
   pack_estacionamento_id int,
   pack_availability bit DEFAULT '0'
	
)

ALTER TABLE pack_estacionamento
ADD CONSTRAINT fk_pack_estacionamento_id FOREIGN KEY (pack_estacionamento_id) REFERENCES parking_lot(parking_lot_id)
---------------------------------------------------------------------------------------------------------------------------------------

SELECT *, utilizador.utilizador_id, utilizador.utilizador_name, utilizador.utilizador_username, type_restaurant.type_restaurant_id, type_restaurant.type_restaurant_name FROM restaurant INNER JOIN utilizador ON utilizador.utilizador_id = restaurant.establishment_utilizador_id INNER JOIN type_restaurant ON type_restaurant.type_restaurant_id = restaurant.restaurant_type_id ORDER BY random()
LIMIT 250

SELECT *, utilizador.utilizador_id, utilizador.utilizador_name, utilizador.utilizador_username FROM equipment_service INNER JOIN utilizador ON utilizador.utilizador_id = equipment_service.establishment_utilizador_id  ORDER BY random()
LIMIT 250

SELECT *, utilizador.utilizador_id, utilizador.utilizador_name, utilizador.utilizador_username FROM parking_lot INNER JOIN utilizador ON utilizador.utilizador_id = parking_lot.establishment_utilizador_id  ORDER BY random()
LIMIT 250

--------------------------------------------------------------------------------------------------------------------------------------

--- TERMINAR ESTA PARTE DA BASE DE DADOS ----
CREATE TABLE item_


