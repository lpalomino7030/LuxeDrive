CREATE DATABASE Clientes;

CREATE TABLE clientes (idClientes SERIAL NOT NULL,nombre VARCHAR(100) NOT NULL,
                       apellido VARCHAR(100) NOT NULL,dni VARCHAR(15) NOT NULL UNIQUE,
                       CONSTRAINT PK_CLIENTES PRIMARY KEY (idClientes));

INSERT INTO clientes (nombre, apellido, dni) VALUES ('luis', 'palomino','70305513'),
                                                 ('Carlos', 'Ramírez', '70123456'),
                                                 ('Ana', 'Torres', '70123457'),
                                                 ('José', 'Mendoza', '70123458'),
                                                 ('María', 'López', '70123459'),
                                                 ('Pedro', 'García', '70123460'),
                                                 ('Laura', 'Castro', '70123461'),
                                                 ('Diego', 'Flores', '70123462'),
                                                 ('Sofía', 'Herrera', '70123463'),
                                                 ('Miguel', 'Vargas', '70123464'),
                                                 ('Valeria', 'Rojas', '70123465'),
                                                 ('Andrés', 'Navarro', '70123466');

