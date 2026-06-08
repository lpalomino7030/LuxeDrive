CREATE DATABASE Ventas;

CREATE TABLE VENTAS(
    idVenta SERIAL NOT NULL,
    idClientes INT NOT NULL,
    idAutos INT NOT NULL,
    fechaVenta DATE NOT NULL,
    precioVenta DECIMAL(10,2) NOT NULL,
    descripcion VARCHAR(250)
)


