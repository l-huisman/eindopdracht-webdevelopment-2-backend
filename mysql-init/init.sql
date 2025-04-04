USE mydatabase;

CREATE TABLE users
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    username   VARCHAR(100) NOT NULL,
    email      VARCHAR(100) NOT NULL,
    password   VARCHAR(100) NOT NULL,
    admin      tinyint DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, email, password, admin)
VALUES ('user', 'example@lukehuisman.nl', '$2b$16$kiKuTsI3Fj5Hz.X.PIM.f.m.ApWq3ND4N4SZL7SYIJByOx6F/go3K', 1);
