const mysql = require('mysql')
let _sql

/**
 *  Connects to the MySQL database and tests the connection is valid
 *  Visit https://github.com/mysqljs/mysql for the docs
 *  @return {Promise} returns Promise which resolves the MySQL connection Object
 *  */
function connectToDB () {
  return new Promise((resolve) => {
    _sql = mysql.createConnection(process.env.DB_CONNECTION_STRING)
    _sql.connect((err) => {
      if (err) {
        console.log(err)
        process.exit(1)
      } else {
        resolve()
      }
    })
    _sql.end()
  })
}

/**
 *  Getter function for the MySQL connection Object
 *  @return {object} returns the MySQL connection object
 *  */
function getConnection () {
  return _sql
}

module.exports = {
  connectToDB: connectToDB(),
  getConnection: getConnection()
}
