CREATE DATABASE Clientes;

CREATE TABLE clientes (idClientes SERIAL NOT NULL,nombre VARCHAR(100) NOT NULL,apellido VARCHAR(100) NOT NULL,dni VARCHAR(15) NOT NULL UNIQUE,CONSTRAINT PK_CLIENTES PRIMARY KEY (idClientes));

insert into clientes (nombre, apellido, dni) VALUES ('luis', 'palomino','70305513')


SELECT * FROM clientes;