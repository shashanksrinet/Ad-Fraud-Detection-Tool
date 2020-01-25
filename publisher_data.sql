-- Adminer 4.6.3 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `publisher_data`;
CREATE TABLE `publisher_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cookie_name` varchar(255) NOT NULL,
  `cookie_repeted` varchar(255) NOT NULL,
  `local_storage` varchar(255) NOT NULL,
  `font_fingerprint` text NOT NULL,
  `canvas_fingerprint` text NOT NULL,
  `ip` varchar(255) NOT NULL,
  `proxyStatus` varchar(255) NOT NULL,
  `proxyPort` varchar(50) NOT NULL,
  `ip_rating` varchar(50) NOT NULL,
  `customerID` varchar(255) NOT NULL,
  `user_agent` text NOT NULL,
  `user_os` varchar(255) NOT NULL,
  `browser_name` varchar(255) NOT NULL,
  `ref_url` varchar(255) NOT NULL,
  `curr_url` text NOT NULL,
  `display` varchar(255) NOT NULL,
  `cookie_chk` varchar(255) NOT NULL,
  `adobe_flash` varchar(255) NOT NULL,
  `java_enable` varchar(255) NOT NULL,
  `timezone` varchar(255) NOT NULL,
  `plugin_name` text NOT NULL,
  `hasLocalStorageCon` varchar(255) NOT NULL,
  `hasSessionStorageCon` varchar(255) NOT NULL,
  `isCanvasSupportedCon` varchar(255) NOT NULL,
  `isIECon` varchar(255) NOT NULL,
  `getScreenResolutionData` varchar(255) NOT NULL,
  `canvasFPenhanceFullData` text NOT NULL,
  `fontFoundData` text NOT NULL,
  `random_cookie` varchar(255) NOT NULL,
  `final_fingerprint` varchar(255) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- 2020-01-25 12:09:43
