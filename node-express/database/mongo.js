const MongoClient = require('mongodb').MongoClient
let _db

/**
 *  Connects to the MongoDB using the connection string
 *  Visit http://mongodb.github.io/node-mongodb-native/ for the docs
 *  @return {Promise} returns Promise which resolves the MongoDB connection Object
 *  */
async function connectToDB() {
    console.log(process.env)
    _db = await MongoClient.connect(process.env.DB_CONNECTION_STRING)
        .catch((err) => {
            console.log(err)
            process.exit(1)
        })
}

/**
 *  Getter function for the MongoDB Object
 *  @return {object} returns the MongoDB connection object
 *  */
function getConnection() {
    return _db
}

module.exports = {
    connectToDB: connectToDB(),
    getConnection: getConnection()
}
