//Include keys.js file to access password for database
const keys = require('./keys.js'),
    mySQL = require('mysql');

var connection;

//Determine which database config data to use (For Heroku)
if (process.env.JAWSDB_URL) {
    connection = mySQL.createConnection(process.env.JAWS_DB_URL);
} else {
    connection = mySQL.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: keys.password,
        database: 'burgers_db'
    });
}

//Connect to database
connection.connect(function(err, resp) {
    //if connection fails, crash program
    if (err) {
        throw new Error('Error connecting to database.');
    }

    //Send message confirming connection to database
    console.log(`Connection to database successful on thread ${connection.threadId}.`);
});

//Export connection
module.exports = connection;