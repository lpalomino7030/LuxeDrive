CREATE DATABASE Ventas;

CREATE TABLE ventas(idVenta SERIAL NOT NULL,idClientes INT NOT NULL,
                    idAutos INT NOT NULL,fechaVenta DATE NOT NULL,
                    precioVenta DECIMAL(10,2) NOT NULL,descripcion VARCHAR(250));

ALTER TABLE ventas
    ADD CONSTRAINT PK_VENTAS
        PRIMARY KEY (idVenta);

INSERT INTO ventas
(idClientes, idAutos, fechaVenta, precioVenta, descripcion)
VALUES
    (1, 1, '2026-01-15', 25000.00, 'Venta de Toyota Corolla color blanco'),

    (2, 2, '2026-01-20', 32000.00, 'Venta de Hyundai Tucson color negro'),

    (3, 3, '2026-02-01', 28000.00, 'Venta de Kia Sportage color rojo'),

    (4, 4, '2026-02-10', 35000.00, 'Venta de Mazda CX-5 color gris'),

    (5, 5, '2026-02-18', 18000.00, 'Venta de Chevrolet Onix color azul'),

    (6, 1, '2026-03-02', 24800.00, 'Descuento especial por campaña'),

    (7, 2, '2026-03-10', 31800.00, 'Venta financiada a 24 meses');

SELECT * FROM ventas;
