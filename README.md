# Eat-Da-Burger

This application demonstrates the functionality and flexibility of a full-stack application that combines a database, a server and client-side DOM manipulation. The app is deployed on Heroku [here](https://nameless-temple-88687.herokuapp.com/).

## Functionality

The application allows a user to interact with portions of the CRUD (Create, Read, Update, Delete) operations performed against a database. A user can create a burger by typing it into the form and clicking submit, the app reads the database when the page first loads and displays all of the burgers, and the user can update the devoured status of a burger.

## Notes

The front-end is made up of an html file that was generated by the handlebars template engine. The data in the DOM is dynamically generated from data stored in a mySQL database. The back-end files handle all of the url routing and returning of JSON data to the front-end using Express.js.

## Getting Started

1. Submit a new burger
2. Devour a burger

## Technologies Used
- HTML 5
- CSS 3
- Bootstrap
- JavaScript
- JQuery
- Node
- NPM
- Express.js
- Heroku
- MySQL
- URL Routing
- Handlebars

## Future Enhancements
A future enhancement would include better handling of SQL queries to the database.
