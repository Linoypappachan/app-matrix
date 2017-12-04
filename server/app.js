/**
 * Application interface
 * 1. Save (App/Component profile) (C)
 * 2. Search and View Profile (R)
 * 3. Edit Profile (U)
 * 4. Delete Profile (D)
 * 5. Show complete matrix 
 */


const express = require('express'),
    app = express(),
    Promise = require("bluebird"),
    bodyParser = require('body-parser'),
    config = require('config'),
    matrix_router = require('./matrix-router'),
    { init } = require('./utils/file-utils')
    ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(config.get('context'), express.static('public'));
app.use(`${config.get('context')}/api`, matrix_router);

init()
.then(() => {
    app.listen(config.get('port'), () => {
        console.log(`App running => http://localhost:${config.get('port')}${config.get('context')}`);
    });
})
.catch((err) => {
    console.log(err);
})

