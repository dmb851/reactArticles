const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const app = express();
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//Set the port that you want the server to run on
const port = process.env.PORT || 8080;
app.listen(port);
console.log('App is listening on port ' + port);


// insert to database if get request is /insert
app.post('/insert', (req, res) => {
    const name = req.body.title;
    const details = req.body.details;
    const summary = req.body.summary;
    console.log(name);
    console.log(details);
    console.log(summary);

    let db = new sqlite3.Database('articles.db', (err) => {
        if (err) {
          console.error(err.message);
        }else{
            console.log('Connected to my database.');
        }
    });

    db.run(`INSERT INTO article (name, summary, details)
    VALUES(?, ?, ?)`,[name,summary,details], function(err) {
        if (err) {
          return console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
      });

      
    db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
    });


    res.send('Welcome to the backend!')
})
