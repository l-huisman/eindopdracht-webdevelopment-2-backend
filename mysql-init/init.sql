USE mydatabase;

CREATE TABLE users
(
    id    INT AUTO_INCREMENT PRIMARY KEY,
    username  VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, email, password)
VALUES ('Info', 'info@lukehuisman.nl', 'password');
INSERT INTO users (username, email, password)
VALUES ('Dev', 'dev@lukehuisman.nl', 'password');
