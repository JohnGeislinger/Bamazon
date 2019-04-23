# Bamazon

Bamazon is a CLI app that allows the customers select an item from a local database and allows the customer to select a specifiy quantity of that item they require.  It also manages the realtime quantity of the item in the local database.

## Getting Started

The GitHub Repo must be cloned and saved down to your computer.

All inputs must be entered using the Terminal Window.  After cloning the repo, the user must install the packages using the following command:

```
npm install 
```

The user then needs to setup the database using the two .sql files listed below:
```
schema.sql
seeds.sql
```

To run the program enter the following command:

```
node bamazonCustomer.js
```

After the program loads follow the prompts.

![example](/gifs/bamazonCustomer.gif)

## Built With

* [MySQL](https://www.npmjs.com/package/mysql) - Database
* [Inquirer](https://www.npmjs.com/package/inquirer) - Common Interactive CLI Interfaces

## Authors

* **John Geislinger** - [JohnGeislinger](https://github.com/JohnGeislinger)

## Deployment

Deployed to [GitHub](https://github.com/JohnGeislinger/Bamazon).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* None