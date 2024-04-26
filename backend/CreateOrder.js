const express = require('express');
const app = express();
const Booking = require('./Models/booking.model'); // Import Booking model schema

app.post('/booking/createorder', async (req, res) => { // Changed (res, req) to (req, res)
    const { Hotel_Name, checkInDate, checkOutDate, numberOfGuests, numberOfRooms } = req.body;

    // Validate the request body
    if (!Hotel_Name || !checkInDate || !checkOutDate || !numberOfGuests) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const newBooking = new Booking({
        Hotel_Name,
        checkInDate,
        checkOutDate,
        numberOfGuests,
        numberOfRooms
    });

    newBooking.save((err, savedBooking) => {
        if (err) {
            console.error('Error saving booking:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        // Return the saved booking object as a response
        res.status(201).json(savedBooking);
    });
});

module.exports = app;
