const mongoose = require('mongoose')

// Connecting Mongoose to MongoDB and also specifying the name of DataBase

mongoose.connect('mongodb://127.0.0.1:27017/truck-platooning-api',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})