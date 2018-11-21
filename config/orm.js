//Import connection to database
const connection = require('./connection.js');

//Create key-function pairs on orm object
var orm = {
    selectAll: function(tblName, cols, orderCol, cb) {
        var query = 'SELECT ?? FROM ?? ORDER BY ??;',
            syntax;

        syntax = connection.query(query, [cols, tblName, orderCol], function(err, rows) {
            if (err) {
                return cb(`Error from query: ${syntax.sql} -> ${err}.`, null);
            }

            cb(null, rows);
        });
    },
    insertOne: function(tblName, colVal, cb) {
        var query = 'INSERT INTO ?? SET ?;',
            syntax;

        syntax = connection.query(query, [tblName, colVal], function(err, row) {       
            if (err) {
                return cb(`Error from query: ${syntax.sql} -> ${err}.`, null);
            }

            cb(null, row);
        });
    },
    updateOne: function(tblName, updateCol, updateVal, conditionCol, conditionVal, cb) {
        var query = 'UPDATE ?? SET ?? = ? WHERE ?? = ?;',
            syntax;

        syntax = connection.query(query, [tblName, updateCol, updateVal, conditionCol, conditionVal], function(err, row) {      
            if (err) {
                return cb(`Error from query: ${syntax.sql} -> ${err}.`, null);
            }

            cb(null, row);
        });
    }
};

//Export orm object
module.exports = orm;