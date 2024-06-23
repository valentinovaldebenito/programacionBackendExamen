-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-06-2024 a las 01:06:02
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `product_test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `product_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `price` float(10,2) NOT NULL,
  `is_stock` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `price`, `is_stock`, `createdAt`, `updatedAt`) VALUES
('1c5f58da-ab6b-42f1-9fd5-774497b85808', 'Shirt', 12.00, 1, '2024-06-23 15:12:01', '2024-06-23 15:12:01'),
('2f29628e-e299-4df3-a020-9e4f5cc321ed', 'Car', 576.00, 0, '2024-06-23 15:53:54', '2024-06-23 15:53:54'),
('2f96d51d-4fad-4efb-99aa-5a0cb32b2c26', 'Pants', 795.00, 1, '2024-06-23 15:53:55', '2024-06-23 15:53:55'),
('5e18ae6e-3019-44fe-b968-1871f7acd545', 'Cheese', 272.00, 0, '2024-06-23 15:53:57', '2024-06-23 15:53:57'),
('64949ff6-8253-4d3b-b0d5-5ba6fe1865b8', 'Mouse', 554.00, 1, '2024-06-23 15:14:46', '2024-06-23 15:14:46'),
('6f3c8541-01f0-40f5-8cb0-0288ab98167e', 'Towels', 589.00, 1, '2024-06-23 15:34:25', '2024-06-23 15:34:25'),
('7f00d56b-a470-4e8b-877d-ddd9ea3adb70', 'Gloves', 598.00, 1, '2024-06-23 15:53:52', '2024-06-23 15:53:52'),
('d2a9decc-770f-4ccd-9f5f-a97faac71a09', 'Ball', 949.00, 1, '2024-06-23 15:53:53', '2024-06-23 15:53:53'),
('d5f4ba45-3071-44c4-96bb-6e65bd0fd8db', 'Table', 759.00, 1, '2024-06-23 15:34:22', '2024-06-23 15:34:22'),
('dc1bc7da-ae74-4afc-909b-08a37c199440', 'Ball', 602.00, 0, '2024-06-23 15:09:16', '2024-06-23 15:09:16'),
('e211eaca-0029-4e77-8903-09ad21541668', 'Ball', 238.00, 1, '2024-06-23 15:34:23', '2024-06-23 15:34:23'),
('eaf43cee-caf8-4caf-918b-22554c3c10e0', 'Sausages', 520.00, 1, '2024-06-23 15:34:20', '2024-06-23 15:34:20');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
