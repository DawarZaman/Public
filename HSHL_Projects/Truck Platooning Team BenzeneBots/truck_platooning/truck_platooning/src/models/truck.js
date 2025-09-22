// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.
// It manages relationships between data, provides schema validation, and is used to translate between objects in code and 
// the representation of those objects in MongoDB.

const mongoose = require('mongoose')


// Specifying the Schema for Truck Platooning
const truckSchema = new mongoose.Schema({
  truckname:{
    type: String,
    required: true,
    trim: true  
  },
  position:{
    type: Number,
    default: 0
  }
},{
  timestamps: true
})

//Creating a Truck Model
const Trucks = mongoose.model('Trucks',truckSchema)

module.exports = Trucks