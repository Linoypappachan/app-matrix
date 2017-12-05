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
    profile_router = require('./routes/profile-router'),
    component_router = require('./routes/components-router'),
    containers_router = require('./routes/containers-router'),
    databases_router = require('./routes/databases-router'),
    hosts_router = require('./routes/hosts-router'),
    { init } = require('./utils/profile/file-utils')
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
app.use(`${config.get('context')}/api/profile`, profile_router);
app.use(`${config.get('context')}/api/component`, component_router);
app.use(`${config.get('context')}/api/container`, containers_router);
app.use(`${config.get('context')}/api/database`, databases_router);
app.use(`${config.get('context')}/api/host`, hosts_router);

init()
.then(() => {
    app.listen(config.get('port'), () => {
        console.log(`App running => http://localhost:${config.get('port')}${config.get('context')}`);
    });
})
.catch((err) => {
    console.log(err);
})

