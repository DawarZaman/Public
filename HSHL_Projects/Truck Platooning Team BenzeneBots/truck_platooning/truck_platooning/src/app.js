// This is our Root File which calls first when we start the server

// Express.js, or simply Express, is a back end web application framework for Node.js

const express = require('express')
require('./db/connection')
const app = express()

const truckRouter = require("./routers/truck")

//Middlewares
app.use(express.json())
app.use(truckRouter)


// Our server is running on 8000 port!
app.listen(8000,()=>{
    console.log("Listening on port 8000!")
})


// Run this command to turn on the server (MongoDB)
// By Replacing the the content it depends where you put your MongoDB file
// For me its in this path as follows:-
// E:/database/mongodb/bin/mongod --dbpath=E:/database/mongodb-data


