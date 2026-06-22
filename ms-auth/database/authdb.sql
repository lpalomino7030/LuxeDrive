    CREATE TABLE usuarios(
     id SERIAL PRIMARY KEY,
     username VARCHAR(50) UNIQUE,
     password VARCHAR(255),
     rol VARCHAR(20)
    );

INSERT INTO usuarios (username, password, rol) values ('luis', '$2a$12$WhVkrUJz3GzQCYZQWyQ6TeDJ76Q589hDboHZ.mG/b65kD0DsB615a','CLIENTE');

SELECT * FROM usuarios;

