const Promise = require("bluebird"),
    db = require('../utils/sqlitedb')
    ;

function executeQuery(query) {
    return (
        new Promise((resolve, reject) => {
            db.serialize(function() {
                db.run(query, [], (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
        })
    );
}

function executeSelectQuery(query) {
    return (
        new Promise((resolve, reject) => {
            db.serialize(function() {
                db.all(query, [], (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                });
            });
        })
    );
}

module.exports = { executeQuery, executeSelectQuery };