//Initialize variables
const express = require('express'),
    app = express(),
    port = process.env.port || 8080,
    routes = require('./controllers/burgers_controller.js'),
    exphbs = require('express-handlebars');

//Enable Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve static content to app from public directory
app.use(express.static('public'));

// Set Handlebars engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Define routes
app.use(routes);

//Set app to listen
app.listen(port, function(err, resp) {
    if (err) {
        throw new Error(`Error received on app listen: ${err}.`);
    }

    console.log(`Application listening on port ${port}.`);
});