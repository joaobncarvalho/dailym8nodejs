--------------- TERMINAR -----------------

CREATE TABLE spot (

	spot_id serial primary key,
	spot_price real NOT NULL,
	spot_availability bit NOT NULL,
	spot_parking_lot_id int NOT NULL

);

ALTER TABLE spot
ADD CONSTRAINT fk_spot_parking_lot_id FOREIGN KEY(spot_parking_lot_id) REFERENCES parking_lot (parking_lot_id);


-------------------------- CODIGO JÁ FEITO ---------------------------------

CREATE TABLE utilizador (

   utilizador_id SERIAL primary key,
   utilizador_name varchar(50) NOT NULL,
   utilizador_username varchar(40) NOT NULL,
   utilizador_email varchar(80),
   utilizador_password varchar(40) NOT NULL,
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