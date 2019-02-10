--Declares which database is going to be used
USE bamazon;

--Inserting data into table
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Amazon Echo", "Electronics", "179", "100"),
("Fire HD 8 Tablets", "Technology", "80", "300"),
("Sony Wireless Headphones", "Electronics", "148", "150");