//Import connection to database
const connection = require('./connection.js');

function dbReturn(query, err, data, cb) {
    if (err) {
        throw new Error(`Error from query: ${query} -> ${err}.`);
    }

    return cb(data);
}

//Create key-function pairs on orm object
var orm = {
    selectAll: function(tblName, cols, cb) {
        var query = 'SELECT ?? FROM ??;',
            syntax;

        syntax = connection.query(query, [cols, tblName], function(err, rows) {
            dbReturn(syntax.query, err, rows, cb);
        });
    },
    insertOne: function(tblName, colVal, cb) {
        var query = 'INSERT INTO ?? SET ?;',
            syntax;

        syntax = connection.query(query, [tblName, colVal], function(err, row) {
            if (row.affectedRows === 0) {
                //If no rows were inserted, change variable values
                err = 'No rows inserted.';
                row = null;
            }
            
            dbReturn(syntax.query, err, row, cb);
        });
    },
    updateOne: function(tblName, updateCol, updateVal, conditionCol, conditionVal, cb) {
        var query = 'UPDATE ?? SET ?? = ? WHERE ?? = ?;',
            syntax;

        syntax = connection.query(query, [tblName, updateCol, updateVal, conditionCol, conditionVal], function(err, row) {
            if (row.changedRows === 0) {
                //If no rows were inserted, change variable values
                err = 'No rows updated.';
                row = null;
            }
            
            dbReturn(syntax.query, err, row, cb);
        });
    }
};

//Export orm object
module.exports = orm;