require("dotenv").config();

const mysql = require("mysql");
const PASSWORD = process.env.PASSWORD;
const inquirer = require("inquirer");

let customerChosenId = 0;
let customerQuantity = 0;
let customerTotalQuantity = 0;
let customerPrice = 0;

// MySQL connection
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

//connect to the database function 
connection.connect(function (err) {
    if (err) throw err;
    //console.log("connected as id " + connection.threadId);
    questions();
});

function questions() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        console.table(res);

        inquirer
            .prompt([
                {
                    name: "item_id",
                    type: "input",
                    message: "Please enter the ID of the product that you wish to buy:"
                },
                {
                    name: "quantity",
                    type: "input",
                    message: "How many of this product would you like to purchase?"
                }
            ]).then(function (answer) {
                customerChosenId = parseInt(answer.item_id);
                customerQuantity = parseInt(answer.customerQuantity);
                customerPrice = res[customerChosenId - 1].price;
                customerTotalQuantity = res[customerChosenId - 1].stock_quantity - customerQuantity;
                console.log(customerTotalQuantity);
                getQuantityProduct(customerChosenId);
            });
    })
};

function getQuantityProduct(customerChosenId) {
    connection.query("SELECT stock_quantity FROM products WHERE ?",
    {
        item_id: customerChosenId
    },
    function(err, res) {
        if (err) throw err;

        if (customerQuantity > res[0].stock_quantity) {
            console.log("Insufficient Quantity!");
        } else if (customerQuantity < res[0].stock_quantity) {
            updateProductTable(customerTotalQuantity, customerChosenId);
        }
    })
}

function updateProductTable(customerTotalQuantity, customerChosenId) {
    connection.query("UPDATE products SET ? WHERE ?",
        [ 
            {
                stock_quantity: customerTotalQuantity
            },
            {
                item_id: customerChosenId
            }
        ],
        function (err, res) {
            if (err) throw err;

            let customerTotal = customerQuantity * customerPrice;
            console.log("Your total price is $" + customerTotal);
        }
    
    
    )}
    