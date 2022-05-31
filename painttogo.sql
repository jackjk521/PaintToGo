-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2022 at 02:48 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `painttogo`
--

-- --------------------------------------------------------

--
-- Table structure for table `branch`
--

CREATE TABLE `branch` (
  `branch_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `branch_name` varchar(100) NOT NULL,
  `branch_add` varchar(100) NOT NULL,
  `branch_contact` varchar(11) NOT NULL,
  `branch_type` enum('Main','Branch','','') NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `branch`
--

INSERT INTO `branch` (`branch_id`, `user_id`, `branch_name`, `branch_add`, `branch_contact`, `branch_type`, `created_at`) VALUES
(1, 1, 'Main', 'Banilad', '3461401', 'Main', '2022-05-07 12:56:41'),
(2, 2, 'Color City Paint Trade Center', 'Taboan', '123345', 'Branch', '2022-05-07 12:56:41'),
(3, 3, 'Color City Paint Trade', 'Tabunok', '12345', 'Branch', '2022-05-07 12:56:41'),
(4, 4, 'Kwikmix', 'Subangdaku', '124452', 'Branch', '2022-05-07 12:56:41');

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `brand_id` int(11) NOT NULL,
  `brand_name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`brand_id`, `brand_name`, `created_at`, `updated_at`) VALUES
(1, 'Boysen', '2022-05-07 12:47:37', '0000-00-00 00:00:00'),
(2, 'McGills', '2022-05-07 12:47:51', '0000-00-00 00:00:00'),
(3, 'Hudson', '2022-05-07 12:48:04', '0000-00-00 00:00:00'),
(4, 'Weber', '2022-05-07 12:48:19', '0000-00-00 00:00:00'),
(5, 'Anzahl', '2022-05-07 12:49:06', '0000-00-00 00:00:00'),
(6, 'Crocodile', '2022-05-24 15:03:09', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `consultations`
--

CREATE TABLE `consultations` (
  `consultation_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `consult_description` varchar(250) NOT NULL,
  `status` enum('Approved','Disapproved','null','') NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `consultations`
--

INSERT INTO `consultations` (`consultation_id`, `user_id`, `consult_description`, `status`, `created_at`) VALUES
(1, 5, 'I need help for paint in my roof', 'Approved', '2022-05-19 17:57:04'),
(2, 5, 'I need help with my floor', 'null', '2022-05-19 18:38:03'),
(3, 5, 'I need help with car paint', 'null', '2022-05-28 07:24:43');

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `inventory_id` int(11) NOT NULL,
  `branch_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`inventory_id`, `branch_id`, `product_id`, `quantity`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 100, '2022-05-24 15:02:23', '0000-00-00 00:00:00'),
(2, 1, 2, 100, '2022-05-24 15:02:23', '0000-00-00 00:00:00'),
(3, 1, 3, 100, '2022-05-24 15:02:23', '0000-00-00 00:00:00'),
(4, 1, 4, 100, '2022-05-24 15:02:23', '0000-00-00 00:00:00'),
(5, 1, 5, 100, '2022-05-24 15:06:09', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `orderlist`
--

CREATE TABLE `orderlist` (
  `orderlist_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_quantity` int(11) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderlist`
--

INSERT INTO `orderlist` (`orderlist_id`, `order_id`, `product_id`, `order_quantity`, `created_at`) VALUES
(1, 1, 1, 5, '2022-05-23 03:28:01'),
(2, 1, 2, 5, '2022-05-23 03:28:01'),
(3, 4, 1, 5, '2022-05-25 23:41:07'),
(4, 5, 2, 5, '2022-05-25 23:41:07'),
(5, 7, 1, 2, '2022-05-25 16:07:49'),
(6, 7, 2, 1, '2022-05-25 16:07:49'),
(7, 8, 1, 2, '2022-05-28 07:23:44');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `branch_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `status` enum('Approved','Disapproved','null','') NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `branch_id`, `user_id`, `status`, `created_at`) VALUES
(1, 4, 4, 'Approved', '2022-05-19 17:56:33'),
(2, 3, 3, 'null', '2022-05-19 18:38:16'),
(3, 1, 1, 'Approved', '2022-05-24 14:19:33'),
(4, 2, 5, 'null', '2022-05-25 23:38:33'),
(5, 4, 5, 'null', '2022-05-25 23:40:16'),
(6, 3, 5, 'null', '2022-05-25 23:40:16'),
(7, 2, 5, 'Approved', '2022-05-25 16:07:48'),
(8, 1, 5, 'null', '2022-05-28 07:23:44');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `utility_id` int(11) NOT NULL,
  `product_name` varchar(300) DEFAULT NULL,
  `price` float NOT NULL,
  `retail_price` int(11) NOT NULL,
  `unit_sold_at` enum('gallon','liters','bundle') NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `brand_id`, `utility_id`, `product_name`, `price`, `retail_price`, `unit_sold_at`, `created_at`, `updated_at`) VALUES
(1, 5, 1, 'Anzahl Urethane Thinner', 100, 120, 'gallon', '2022-05-22 22:00:26', '0000-00-00 00:00:00'),
(2, 3, 1, 'Hudson Thinner', 100, 140, 'gallon', '2022-05-22 22:01:01', '0000-00-00 00:00:00'),
(3, 2, 1, 'McGill Red Oxide', 120, 135, 'gallon', '2022-05-24 15:01:33', '0000-00-00 00:00:00'),
(4, 4, 1, 'Weber Urethane Thinner', 100, 125, 'liters', '2022-05-24 15:01:33', '0000-00-00 00:00:00'),
(5, 6, 3, 'Crocodile 1\" Sandpaper', 50, 70, 'bundle', '2022-05-24 15:03:57', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `request_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `branch_id` int(11) NOT NULL,
  `status` enum('Approved','Disapproved','null','') NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`request_id`, `user_id`, `branch_id`, `status`, `created_at`) VALUES
(1, 2, 2, 'Approved', '2022-05-19 00:10:59'),
(2, 3, 3, 'Approved', '2022-05-19 18:38:32'),
(3, 2, 2, 'Approved', '2022-05-24 04:03:46'),
(4, 2, 2, 'Approved', '2022-05-28 07:47:07');

-- --------------------------------------------------------

--
-- Table structure for table `requestlist`
--

CREATE TABLE `requestlist` (
  `requestlist_id` int(11) NOT NULL,
  `request_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `req_quantity` int(11) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `requestlist`
--

INSERT INTO `requestlist` (`requestlist_id`, `request_id`, `product_id`, `req_quantity`, `created_at`) VALUES
(1, 1, 1, 5, '2022-05-22 22:01:35'),
(2, 1, 2, 5, '2022-05-22 22:01:35'),
(3, 3, 1, 1, '2022-05-24 04:03:46'),
(4, 4, 1, 5, '2022-05-28 07:47:07'),
(5, 4, 2, 5, '2022-05-28 16:31:05');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `user_contact` varchar(11) NOT NULL,
  `email_add` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `level_name` enum('Admin','Manager','Customer','') NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `firstName`, `lastName`, `user_contact`, `email_add`, `password`, `level_name`, `created_at`, `updated_at`) VALUES
(1, 'System', 'Admin', '3461401', 'colorcity@gmail.com', 'admin', 'Admin', '2022-05-07 12:54:01', '0000-00-00 00:00:00'),
(2, 'Branch', 'Manager1', '12345', 'b1@gmail.com', 'b1', 'Manager', '2022-05-07 12:54:01', '0000-00-00 00:00:00'),
(3, 'Branche', 'Manager2', '12345', 'b2@gmail.com', 'b2', 'Manager', '2022-05-07 12:54:01', '0000-00-00 00:00:00'),
(4, 'Branchee', 'Manager3', '12345', 'b3@gmail.com', 'b3', 'Manager', '2022-05-07 12:54:01', '0000-00-00 00:00:00'),
(5, 'John', 'Doe', '12345', 'jd@gmail.com', 'jd123', 'Customer', '2022-05-07 12:54:01', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `utility`
--

CREATE TABLE `utility` (
  `utility_id` int(11) NOT NULL,
  `utility_name` enum('Home','Vehicles','Equipment','') NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `utility`
--

INSERT INTO `utility` (`utility_id`, `utility_name`, `created_at`, `updated_at`) VALUES
(1, 'Home', '2022-05-07 12:43:19', '0000-00-00 00:00:00'),
(2, 'Vehicles', '2022-05-07 12:43:19', '0000-00-00 00:00:00'),
(3, 'Equipment', '2022-05-07 12:43:50', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`branch_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`brand_id`);

--
-- Indexes for table `consultations`
--
ALTER TABLE `consultations`
  ADD PRIMARY KEY (`consultation_id`),
  ADD KEY `Foreign` (`user_id`);

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`inventory_id`),
  ADD KEY `branch_id` (`branch_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `orderlist`
--
ALTER TABLE `orderlist`
  ADD PRIMARY KEY (`orderlist_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `branch_id` (`branch_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `brand_id` (`brand_id`),
  ADD KEY `utility_id` (`utility_id`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`request_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `branch_id` (`branch_id`);

--
-- Indexes for table `requestlist`
--
ALTER TABLE `requestlist`
  ADD PRIMARY KEY (`requestlist_id`),
  ADD KEY `request_id` (`request_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `utility`
--
ALTER TABLE `utility`
  ADD PRIMARY KEY (`utility_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `branch`
--
ALTER TABLE `branch`
  MODIFY `branch_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `consultations`
--
ALTER TABLE `consultations`
  MODIFY `consultation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `inventory_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `orderlist`
--
ALTER TABLE `orderlist`
  MODIFY `orderlist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `request_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `requestlist`
--
ALTER TABLE `requestlist`
  MODIFY `requestlist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `utility`
--
ALTER TABLE `utility`
  MODIFY `utility_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `branch`
--
ALTER TABLE `branch`
  ADD CONSTRAINT `branch_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `consultations`
--
ALTER TABLE `consultations`
  ADD CONSTRAINT `Foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `inventory_ibfk_1` FOREIGN KEY (`branch_id`) REFERENCES `branch` (`branch_id`),
  ADD CONSTRAINT `inventory_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `orderlist`
--
ALTER TABLE `orderlist`
  ADD CONSTRAINT `orderlist_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`branch_id`) REFERENCES `branch` (`branch_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`brand_id`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`utility_id`) REFERENCES `utility` (`utility_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `request`
--
ALTER TABLE `request`
  ADD CONSTRAINT `request_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `request_ibfk_3` FOREIGN KEY (`branch_id`) REFERENCES `branch` (`branch_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `requestlist`
--
ALTER TABLE `requestlist`
  ADD CONSTRAINT `requestlist_ibfk_1` FOREIGN KEY (`request_id`) REFERENCES `request` (`request_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `requestlist_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
