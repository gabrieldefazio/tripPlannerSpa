const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const { db } = require('../models');
const path = require('path')

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
nunjucks.configure('views', { noCache: true});
app.engine('html', nunjucks.render);
app.set('view engine', 'html');



app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.error(err);
    res.send(
        // ... fill in this part
    );
});

db.sync({ force: false })
    .then(function () {
        app.listen(3000, function () {
            console.log('Server is listening on port 3001!');
        });
    });

var port = 1313;
app.listen(port, function() {
    console.log("The server is listening closely on port", port);
    db
        .sync()
        .then(function() {
            console.log("Synchronated the database");
        })
        .catch(function(err) {
            console.error("Trouble right here in River City", err, err.stack);
        });
});
