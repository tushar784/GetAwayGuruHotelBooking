const express = require('express')
const app = express()
const schema = require('./Models/hotel.model')

app.get('/hotels', async(req,res)=>{
    const { location } = req.query;
    console.log("Requested location:", location);
    
    try {
        let hotels;
        if (location){
            hotels = await schema.find({ location })
        }
        else{
            hotels = await schema.find()
        }

        if (!hotels) {
            return res.status(404).json({ message: 'No hotels found' });
        }
        res.status(200).json(hotels); // Send successful response with hotels data

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
})

module.exports = app;    