//Initialize variables
const express = require('express'),
    router = express.Router(),
    burger = require('../models/burger.js');

//Add method paths to router
router.get('/', function(req, res) {
    burger.all(function(err, data) {
        if (err) {
            return res.status(500).end();
        }

        res.status(200).render('index', { burgers: data });
    });
});

router.post('/api/burger', function(req, res) {
    burger.insert(req.body.burgerName, function(err, data) {
        if (err) {
            return res.status(500).end();
        }

        res.status(201).json(data);
    });
});

router.put('/api/burger/:id', function(req, res) {
    burger.update(req.params.id, function(err, data) {
        if (err) {
            return res.status(500).end();
        }

        res.status(200).end();
    });
});

//Export router
module.exports = router;