
CREATE DATABASE luxedrive_autos;

\c luxedrive_autos;

CREATE TABLE autos(
id SERIAL PRIMARY KEY,
marca VARCHAR(50),
modelo VARCHAR(50),
anio INTEGER,
precio DECIMAL(10,2),
color VARCHAR(30),
tipo VARCHAR(50),
estado VARCHAR(20),
imagen VARCHAR(255)
);

INSERT INTO autos(marca,modelo,anio,precio,color,tipo,estado,imagen)
VALUES
('BMW','M4 Competition',2025,95000,'Negro','Deportivo','DISPONIBLE','bmw-m4.jpg'),
('Mercedes-Benz','AMG GT',2024,120000,'Rojo','Coupe','DISPONIBLE','amg-gt.jpg');
