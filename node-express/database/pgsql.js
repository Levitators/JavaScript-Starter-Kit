const pgp = require('pg-promise')()
let _pg

/**
 *  Connects to the PostgreSQL database and tests the connection is valid
 *  Visit http://vitaly-t.github.io/pg-promise/ for docs
 *  @return {Promise} returns Promise which resolves the PostgreSQL connection Object
 *  */
function connectToDB() {
    return new Promise((resolve) => {
        _pg = pgp(process.env.DB_CONNECTION_STRING)
        _pg.connect()
            .then(() => resolve(_pg))
            .catch(function (err) {
                console.log(err)
                process.exit(1)
            })
    })
}

/**
 *  Getter function for the PostgreSQL connection Object
 *  @return {object} returns the PostgreSQL connection object
 *  */
function getConnection() {
    return _pg
}

module.exports = {
    connectToDB: connectToDB(),
    getConnection: getConnection()
}
