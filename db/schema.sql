/****
/* Create the burgers_db.
/* Switch to or use the burgers_db.
/* Create a burgers table with these fields:
/* 	o id: an auto incrementing int that serves as the primary key.
/* 	o burger_name: a string.
/* 	o devoured: a boolean.
/* 	o date: a TIMESTAMP.
/*/
CREATE DATABASE `burgers_db`;

USE `burgers_db`;

CREATE TABLE `burgers` (
	`id` INT( 11 ) AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR( 255) NOT NULL,
	`devoured` BOOLEAN DEFAULT FALSE,
	`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

	PRIMARY KEY ( `id` ) ); /* Set ID as primary key */
    
SELECT * FROM burgers;

DELETE FROM burgers where id = 5;

DROP TABLES `burgers`;