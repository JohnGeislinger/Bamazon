DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
    item_id INT AUTO_INCREMENT,
    product_name VARCHAR (255) NOT NULL,
    departmant_name VARCHAR (255) NOT NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT,
    PRIMARY KEY (item_id)
);