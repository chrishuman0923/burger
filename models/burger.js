//Import ORM
const orm = require('../config/orm.js');

//Create key-function pairs on burger object
var burger = {
    all: function(cb) {
        orm.selectAll('burgers', '*', function(err, data) {
            if (err) {
               return cb(err, null);
            }

            cb(null, data);
        });
    },
    insert: function(name, cb) {
        orm.insertOne('burgers', { burger_name: name }, function(err, data) {
            if (err) {
               return cb(err, null);
            }

            cb(null, data);
        });
    },
    update: function(id, cb) {
        orm.updateOne('burgers', 'devoured', 'true', 'id', id, function(err, data) {
            if (err) {
               return cb(err, null);
            }

            cb(null, data);
        });
    }
};

//Export burger object
module.exports = burger;