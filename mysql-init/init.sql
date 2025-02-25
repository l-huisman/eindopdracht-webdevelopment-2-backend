USE mydatabase;

CREATE TABLE users
(
    id    INT AUTO_INCREMENT PRIMARY KEY,
    name  VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

INSERT INTO users (name, email)
VALUES ('Info', 'info@lukehuisman.nl');
INSERT INTO users (name, email)
VALUES ('Dev', 'dev@lukehuisman.nl');