//Initialize variables
const express = require('express'),
    router = express.Router(),
    burger = require('../models/burger.js');

//Add methods and paths to router
router.get('/', function(req, res) {
    burger.all(function(data) {
        res.render('index', { burgers: data });
    });
});

router.post('/api/burger', function(req, res) {
    burger.insert(req.body.burgerName, function(data) {
        res.status(200).json(data);
    });
});

router.put('/api/burger/:id', function(req, res) {
    burger.update(req.params.id, function(data) {
        res.status(200).end();
    });
});

//Export router
module.exports = router;