

CREATE TABLE IF NOT EXISTS `shop`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `shopName` VARCHAR(50),
   `shopLogo` VARCHAR(500),
   `phone` VARCHAR(40) ,
   `password` VARCHAR(40) ,
   `token` VARCHAR(100) ,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE IF NOT EXISTS `users`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `headImg` VARCHAR(500),
   `openid` VARCHAR(40) ,
   `password` VARCHAR(40) ,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `address`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `phone` VARCHAR(500),
   `country` VARCHAR(40) ,
   `city` VARCHAR(40) ,
   `prefecture` VARCHAR(40) ,
   `detail` VARCHAR(400) ,
   `status` INT,
   `usersId` INT NOT NULL,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `product`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `coverImg` VARCHAR(500) NOT NULL,
   `productDesc` VARCHAR(1000) ,
   `swiper` VARCHAR(1000),
   `price` FLOAT ,
   `oldPrice` FLOAT,
   `stockIn` INT,
   `stockOut` INT,
   `stockNum` INT,
   `status` INT,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `productSpec`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `coverImg` VARCHAR(500) ,
   `price` FLOAT ,
   `oldPrice` FLOAT,
   `stockIn` INT,
   `stockOut` INT,
   `stockNum` INT,
   `status` INT,
   `productId` INT NOT NULL,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `order`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `flowNumber` VARCHAR(50) NOT NULL,
   `product` VARCHAR(500) NOT NULL,
   `amount` FLOAT,
   `discount` FLOAT,
   `address` VARCHAR(500) ,
   `createdatetime` VARCHAR(500),
   `deliveryTime` VARCHAR(500),
   `paytime` VARCHAR(500),
   `deliveryType` INT,
   `logisticsCompany` VARCHAR(500),
   `logisticsNumber` VARCHAR(500),
   `usersId` INT,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
