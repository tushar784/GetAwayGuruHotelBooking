const express = require('express');
const HolidayPackage = require('./Models/holidaypackage.model'); // Assuming your model file

const app = express();

// API route to fetch packages by location
app.get('/holidaypackages/location/:Location', async (req, res) => {
    const {Location} = req.params;
  try {
    // Convert the input location to title case for case-insensitive search
    const locationTitleCase = Location.charAt(0).toUpperCase() + Location.slice(1).toLowerCase();
    const packages = await HolidayPackage.find({ Location: { $regex: new RegExp('^' + locationTitleCase, 'i') } });

    if (!packages || packages.length === 0) {
        return res.status(404).json({ message: 'No packages found for the specified location' });
    }
    res.status(200).json(packages);       // Send retrieved packages as JSON response

  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching packages'); // Handle errors with proper status code and message
  }
});


// API route to fetch packages by name
app.get('/holidaypackages/:Package_Name', async (req, res) => {
    const { Package_Name } = req.params;

    try {
        const package = await HolidayPackage.findOne({ Package_Name });

        if (!package) {
            return res.status(404).json({ message: 'Hotel not found' });
        }

        res.status(200).json(package); // Send successful response with package data
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports=app;