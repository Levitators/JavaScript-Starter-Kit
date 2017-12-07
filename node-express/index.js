require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongo = require('./database/mongo')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

/*Starts the app only if connected to the database
* To use other databases import the respective files from the
* database folder and follow the same steps as below*/
mongo.connectToDB.then(() => {
        const port = process.env.PORT || 3000
        app.listen(port, () => {
            console.log('Node app started and running on ', port)
        })
    })
    .catch((err) => {
        throw err
    })
