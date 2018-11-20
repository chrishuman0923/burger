//Initialize the dotenv package to access database password stored in .env file
require('dotenv').config();

//Create object containing password
var db = {
    password: process.env.DB_PWD
};

//Export object
module.exports = db;