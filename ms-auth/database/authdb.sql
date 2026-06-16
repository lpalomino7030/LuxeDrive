    CREATE TABLE usuarios(
     id SERIAL PRIMARY KEY,
     username VARCHAR(50) UNIQUE,
     password VARCHAR(255),
     rol VARCHAR(20)
    );

SELECT * FROM usuarios;

