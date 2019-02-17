USE bamazonDB;

INSERT INTO products (product_name, departmant_name,price, stock_quantity)
VALUES ("laptop", 'electronics', 2000, 10);

INSERT INTO products (product_name, departmant_name,price, stock_quantity)
VALUES ("cellphone", 'electronics', 750, 40);

INSERT INTO products (product_name, departmant_name,price, stock_quantity)
VALUES ("tv", 'electronics', 550, 25);

INSERT INTO products (product_name, departmant_name,price, stock_quantity)
VALUES ("shirt", 'men', 45, 15);

INSERT INTO products (product_name, departmant_name,price, stock_quantity)
VALUES ("shoes", 'men', 75, 50);

INSERT INTO products (product_name, departmant_name,price, stock_quantity)
VALUES ("shorts", 'men', 25, 30);

INSERT INTO products (product_name, departmant_name,price, stock_quantity)
VALUES ("belt", 'men', 20, 20);

INSERT INTO products (product_name, departmant_name,price, stock_quantity)
VALUES ("dress", 'women', 45, 20);

INSERT INTO products (product_name, departmant_name,price, stock_quantity)
VALUES ("skirt", 'women', 55, 25);

INSERT INTO products (product_name, departmant_name,price, stock_quantity)
VALUES ("heels", 'women', 60, 10);

INSERT INTO products (product_name, departmant_name,price, stock_quantity)
VALUES ("bathsuit", 'women', 85, 10);

USE bamazonDB;

SELECT * FROM products;
