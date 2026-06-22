Create database Autos;

CREATE TABLE AUTOS (
    idAutos SERIAL NOT NULL,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    placa VARCHAR(15) NOT NULL UNIQUE,
    anio INTEGER,
    precio NUMERIC(10,2) NOT NULL ,
    color VARCHAR(30) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    estado VARCHAR(30) NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    CONSTRAINT PK_AUTOS PRIMARY KEY (idAutos));




INSERT INTO autos
(marca, modelo, placa, anio, precio, color, tipo, estado, imagen)
VALUES
    ('Toyota', 'Corolla', 'ABC-123', 2023, 25000.00, 'Blanco', 'Sedan', 'Disponible', 'corolla.jpg'),

    ('Hyundai', 'Tucson', 'DEF-456', 2024, 32000.00, 'Negro', 'SUV', 'Disponible', 'tucson.jpg'),

    ('Kia', 'Sportage', 'GHI-789', 2022, 28000.00, 'Rojo', 'SUV', 'Vendido', 'sportage.jpg'),

    ('Mazda', 'CX-5', 'JKL-321', 2024, 35000.00, 'Gris', 'SUV', 'Disponible', 'cx5.jpg'),

    ('Chevrolet', 'Onix', 'MNO-654', 2023, 18000.00, 'Azul', 'Hatchback', 'Reservado', 'onix.jpg');


