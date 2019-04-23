// Dependencies
require("dotenv").config();

const mysql = require("mysql");
const PASSWORD = process.env.PASSWORD;
const inquirer = require("inquirer");

// MySQL Connection
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: PASSWORD,
    database: "bamazonDB"
});

// Connect to the Database 
connection.connect(function (err) {
    if (err) throw err;
    products();
});

// Load the Products
function products() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        console.table(res);

        promptForId(res);
    });
};

// Asking for the ID of the Item
function promptForId(inventory) {
    inquirer
        .prompt([
            {
                name: "choice",
                type: "input",
                message: "Please enter the ID of the product that you wish to buy: [Press Q to Quit]",
                validate: function(val) {
                    return !isNaN(val) || val.toLowerCase() === "q";
                }
            }   
        ])
        .then(function(val) {
            exit(val.choice);
            let chosenId = parseInt(val.choice);
            let product = checkInventory(chosenId, inventory);
                
            if (product) {
                promptForQuantity(product);
            }
            else {
                console.log("That item is not in the inventory.");
                products();
            }
        });
};

// Asking for the Quantity
function promptForQuantity(product) {
    inquirer
        .prompt([
            {
                name: "quantity",
                type: "input",
                message: "How many of this product would you like to purchase: [Press Q to Quit]",
                validate: function(val) {
                    return val > 0 || val.toLowerCase() === "q";
                }
            }
        ])
        .then(function(val) {
            exit(val.quantity);
            let quantity = parseInt(val.quantity);

            if (quantity > product.stock_quantity) {
                console.log("Insufficient quantity to fulfill your order.")
                products();
            }
            else {
                purchase(product, quantity);
            }
        });
};

// Update the Database and Give the Customer the Total
function purchase(product, quantity) {
    connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?", [quantity, product.item_id], function(err, res) {
        if (err) throw err;

        let productPrice = product.price;
        let customerTotal = quantity * productPrice;
        
        console.log("You purchased (" + quantity + ") quantity of " + product.product_name + "!");
        console.log("Your total is $" + customerTotal + "!");
        promptForId();
    });
};

// Function to Check the Inventory
function checkInventory(chosenId, inventory) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].item_id === chosenId) {
            return inventory[i];
        }
    }
    return null;
};

// Function to Check is the Customer wants to Quit the Program
function exit(choice) {
    if (choice.toLowerCase() === "q") {
        console.log("Thanks for shopping Bamazon!");
        process.exit(0);
    }
};
    