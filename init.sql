-- Creación de la base de datos de usuarios si no existe
CREATE DATABASE IF NOT EXISTS usuarios_db;
USE usuarios_db;

-- Tabla users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `rol` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla nota
CREATE TABLE IF NOT EXISTS `nota` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `contenido` varchar(255) DEFAULT NULL,
  `ultima_modificacion` datetime(6) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKbnwxnoub9yh7xsiw24f52qjwv` (`user_id`),
  CONSTRAINT `FKbnwxnoub9yh7xsiw24f52qjwv` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Datos iniciales para usuarios_db
INSERT IGNORE INTO `users` (`id`, `name`, `lastname`, `username`, `password`, `rol`, `email`) VALUES
(1, 'Admin', 'Sistema', 'admin', '$2a$10$XURPShQNCsLjp1ESc2laoObo9QZDhxz73hJPaEv7/cBha4pk0AgP.', 'admin', 'admin@example.com'),
(2, 'Profesor', 'Ejemplo', 'profesor', '$2a$10$XURPShQNCsLjp1ESc2laoObo9QZDhxz73hJPaEv7/cBha4pk0AgP.', 'profesor', 'profesor@example.com'),
(3, 'Alumno', 'Prueba', 'alumno', '$2a$10$XURPShQNCsLjp1ESc2laoObo9QZDhxz73hJPaEv7/cBha4pk0AgP.', 'alumno', 'alumno@example.com');

INSERT IGNORE INTO `nota` (`id`, `contenido`, `ultima_modificacion`, `user_id`) VALUES
(1, 'Nota inicial de administrador', NOW(), 1),
(2, 'Nota de prueba para profesor', NOW(), 2);

-- Creación de la base de datos de facultad si no existe
CREATE DATABASE IF NOT EXISTS proyectofacultad;
USE proyectofacultad;

-- Tabla profesor
CREATE TABLE IF NOT EXISTS `profesor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla materia
CREATE TABLE IF NOT EXISTS `materia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `profesor_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKrnkkyqs5302jdtfphon5oag8b` (`profesor_id`),
  CONSTRAINT `FKrnkkyqs5302jdtfphon5oag8b` FOREIGN KEY (`profesor_id`) REFERENCES `profesor` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla actividades
CREATE TABLE IF NOT EXISTS `actividades` (
  `tipo_actividad` varchar(31) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `hora` double DEFAULT NULL,
  `duracion` int DEFAULT NULL,
  `materia_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKmnelp82iqslawngggvfxw4m48` (`materia_id`),
  CONSTRAINT `FKmnelp82iqslawngggvfxw4m48` FOREIGN KEY (`materia_id`) REFERENCES `materia` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla materias_usuario
CREATE TABLE IF NOT EXISTS `materias_usuario` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `anio_cursado` int DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `materia_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKp5rbne9v46qh8jcdipb5yoryt` (`materia_id`),
  CONSTRAINT `FKgk6v92j825njbiceoq22r497k` FOREIGN KEY (`materia_id`) REFERENCES `materia` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Datos iniciales para proyectofacultad
INSERT IGNORE INTO `profesor` (`id`, `nombre`) VALUES
(1, 'Juan Pérez'),
(2, 'María García'),
(3, 'Carlos López');

INSERT IGNORE INTO `materia` (`id`, `nombre`, `descripcion`, `profesor_id`) VALUES
(1, 'Matemáticas', 'Álgebra y cálculo', 1),
(2, 'Literatura', 'Literatura universal', 2),
(3, 'Física', 'Mecánica clásica', 3);

INSERT IGNORE INTO `actividades` (`tipo_actividad`, `id`, `descripcion`, `fecha`, `hora`, `duracion`, `materia_id`) VALUES
('Examen', 1, 'Primer parcial', CURDATE(), 14.0, 90, 1),
('Tarea', 2, 'Ensayo literario', DATE_ADD(CURDATE(), INTERVAL 7 DAY), NULL, NULL, 2),
('Práctica', 3, 'Laboratorio de física', DATE_ADD(CURDATE(), INTERVAL 3 DAY), 10.0, 120, 3);

INSERT IGNORE INTO `materias_usuario` (`id`, `anio_cursado`, `estado`, `user_id`, `materia_id`) VALUES
(1, 2023, 'CURSANDO', 1, 1),
(2, 2023, 'PENDIENTE', 1, 2),
(3, 2023, 'CURSANDO', 3, 3);