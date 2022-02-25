const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
    host     : "localhost",
    user     : "will",
    password : "316c0256C8",
    database: "qhb18155"
});


// connection.connect(function(err) {
//     if (err) throw err;
//     connection.query("SELECT * FROM users", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });

// Starting our app.
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/users', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('SELECT * FROM users', (error, results, fields) => {

            // If some error occurs, we throw an error.
            if (error) {
                return console.error(error.message);
            }
            console.log("THIS" + results);

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
        });
    });
});

// Starting our server.
app.listen(3007, () => {
    console.log('Go to http://localhost:3007/users so you can see the data.');
});
