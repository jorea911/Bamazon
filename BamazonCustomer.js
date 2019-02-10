//Bring in my sql + inquirer packages
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

//Create a connection to mysql database
var connection = mysql.createConnection({
	host: '127.0.0.1',
	port: 3306,
	user: 'root',
	password: "root", //enter your own mysql password
	database: "bamazon"
});

//Execute connection that displays all items for sale
connection.connect(function(err){
    if (err) throw err;
    displayAll();
});

//Function to display all items for sale
function displayAll() {
    connection.query("SELECT id, product_name, price FROM products", function(err, res){
        if (err) throw err;
        console.log("");
        console.log('                       WELCOME TO BAMAZON           ');
        var table = new Table({
            head: ['Id', 'Product Description', 'Price'],
            colWidths: [5, 50, 7],
            colAligns: ['center', 'left', 'right'],
             style: {
              head: ['cyan'],
              compact: true
            }
        });
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].id, res[i].product_name, res[i].price]);
        }
        console.log(table.toString());
        // productId();
    }); //end connection to products
};