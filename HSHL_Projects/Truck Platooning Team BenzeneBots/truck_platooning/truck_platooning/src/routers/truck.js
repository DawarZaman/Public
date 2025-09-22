// Import the files and modules for making a rest API
// Model means Database Schema
const express = require('express')
const truck = require("../models/truck")
const router = new express.Router() 



// General Comment
// Routers for trucks (HTTP Method : post,get,patch and delete)


// To insert the new truck into database (POST request)

router.post('/trucks',async (req,res)=>{  
    const me = new truck(req.body)
    try{
      await me.save()
      res.status(201).send(me)  
    }catch(e){
      res.status(500).send(e)  
    }
})


// To get all list of trucks from database (GET request)

router.get('/trucks', async (req,res)=>{

    truck.find({}, function(err, trucks) {
        var truckMap = {};
    
        trucks.forEach(function(truck) {
          truckMap[truck._id] = truck;
        });
    
        res.send(truckMap);  
      });
})


// To get a specific truck from database (GET by ID request)

router.get('/trucks/:id',async (req,res)=>{
    
    try{
      const _id = req.params.id
      const truckID= await truck.findById(_id)
        
      if(!truckID){
        return res.status(404).send()
      }
      res.send(truckID)

    }catch(e){
        res.status(400).send(e)
    }
})


// To update a specific truck in database (PATCH by ID request)

router.patch('/trucks/:id',async (req,res)=>{
    
    const updates = Object.keys(req.body) 
    const propertiesTruck = ['truckname','position']
    const isValid = updates.every( update => propertiesTruck.includes(update))

    if(!isValid)
        return res.status(400).send()

    try{

      const truckUp = await truck.findOne({_id: req.params.id})  

      if(!truckUp){
         return res.status(404).send()
      }
      updates.forEach( update => truckUp[update] = req.body[update] )

      await truckUp.save()
      res.send(truckUp)
    }catch(e){
        res.status(400).send(e)
    }
})


// To Delete a specific truck from database (Delete by ID request)

router.delete('/trucks/:id',async (req,res)=>{
    try{
        const delTruck = await truck.findOneAndDelete({ _id:req.params.id})
        if(!delTruck){
            return res.status(404).send()
        } 
        res.send(delTruck)
    }catch(e){
        res.status(400).send(e)
    }
})


module.exports = router