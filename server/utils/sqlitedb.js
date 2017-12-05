const config = require('config'),
    sqlite3 = require('sqlite3').verbose(),
    db = new sqlite3.Database(config.get('db'))
    ;

module.exports = db;