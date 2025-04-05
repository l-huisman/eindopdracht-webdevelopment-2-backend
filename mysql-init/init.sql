-- Adminer 5.0.2 MySQL 8.0.41 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP DATABASE IF EXISTS `mydatabase`;
CREATE DATABASE `mydatabase` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mydatabase`;

DROP TABLE IF EXISTS `events`;
CREATE TABLE `events` (
                          `id` int NOT NULL AUTO_INCREMENT,
                          `name` varchar(255) NOT NULL,
                          `description` varchar(255) NOT NULL,
                          `date` date NOT NULL,
                          `start_time` date NOT NULL,
                          `end_time` date NOT NULL,
                          `group_id` int NOT NULL,
                          `user_id` int NOT NULL,
                          PRIMARY KEY (`id`),
                          KEY `group_id` (`group_id`),
                          KEY `user_id` (`user_id`),
                          CONSTRAINT `events_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`),
                          CONSTRAINT `events_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `groups`;
CREATE TABLE `groups` (
                          `id` int NOT NULL AUTO_INCREMENT,
                          `name` varchar(255) NOT NULL,
                          PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `user_groups`;
CREATE TABLE `user_groups` (
                               `user_id` int NOT NULL,
                               `group_id` int NOT NULL,
                               PRIMARY KEY (`user_id`,`group_id`),
                               KEY `group_id` (`group_id`),
                               CONSTRAINT `user_groups_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
                               CONSTRAINT `user_groups_ibfk_2` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
                         `id` int NOT NULL AUTO_INCREMENT,
                         `username` varchar(100) NOT NULL,
                         `email` varchar(100) NOT NULL,
                         `password` varchar(100) NOT NULL,
                         `admin` tinyint DEFAULT '0',
                         `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
                         PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `users` (`id`, `username`, `email`, `password`, `admin`, `created_at`) VALUES
    (1,	'user',	'example@lukehuisman.nl',	'$2b$16$kiKuTsI3Fj5Hz.X.PIM.f.m.ApWq3ND4N4SZL7SYIJByOx6F/go3K',	1,	'2025-04-05 12:10:03');

-- 2025-04-05 12:15:20 UTC
