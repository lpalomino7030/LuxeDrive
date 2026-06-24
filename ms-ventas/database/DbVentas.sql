CREATE DATABASE Ventas;

CREATE TABLE ventas(idVenta SERIAL NOT NULL,idClientes INT NOT NULL,idAutos INT NOT NULL,fechaVenta DATE NOT NULL,precioVenta DECIMAL(10,2) NOT NULL,descripcion VARCHAR(250));

SELECT * FROM ventas;
