const express = require("express");
const app = express();
const schema = require("./Models/hotel.model");

app.get("/hotels", async (req, res) => {
  const { Location, Hotel_Name } = req.query;

  try {
    let hotels;
    if (Location) {
      hotels = await schema.find({ Location }); //fetch hotels by location 
    } else if (Hotel_Name) {
      hotels = await schema.find({ Hotel_Name }); //fetch hotels by hotelnames(for card)
    } else {
      hotels = await schema.find();
    }

    if (!hotels) {
      return res.status(404).json({ message: "No hotels found" });
    }
    res.status(200).json(hotels); // Send successful response with hotels data
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = app;
