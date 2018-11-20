//Import ORM
const orm = require('../config/orm.js');

//Function to handle identical callbacks from orm functions
function callBack(data, cb) {
    cb(data);
}

//Create key-function pairs on burger object
var burger = {
    all: function(cb) {
        orm.selectAll('burgers', '*', function(err, data) {
            callBack(data, cb);
        });
    },
    insert: function(name, cb) {
        orm.insertOne('burgers', { burger_name: name }, function(err, data) {
            callBack(data, cb);
        });
    },
    update: function(id, cb) {
        orm.updateOne('burgers', 'devoured', 'true', 'id', id, function(err, data) {
            callBack(data, cb);
        });
    }
};

//Export burger object
module.exports = burger;