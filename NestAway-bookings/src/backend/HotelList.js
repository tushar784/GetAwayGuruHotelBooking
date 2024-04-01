const express = require('express')
const router = express.Router()
const app = express()
const schema = require('./hotel.model')

router.get('/hotels', async(req,res)=>{
    const location = req.query.location;

    try {
        let hotels;
        if (location){
            hotels = await schema.find({Location: location})
        }
        else{
            hotels = await schema.find()
        }
        res.status(200).json(hotels); // Send successful response with hotels data

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
})

module.exports = router;    