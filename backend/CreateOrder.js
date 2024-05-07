const express = require('express');
const app = express();
const Booking = require('./Models/booking.model'); // Import Booking model schema

app.post('/booking/createorder', async (req, res) => {
    const { Hotel_Name, checkInDate, checkOutDate, numberOfGuests, numberOfRooms, username, email, address, state, room_Type, pincode } = req.body;

    // Validate the request body
    if (!Hotel_Name || !checkInDate || !checkOutDate || !numberOfGuests || !numberOfRooms) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const newBooking = new Booking({
            username,
            email,
            address,
            pincode,
            state,
            room_Type,
            Hotel_Name,
            checkInDate,
            checkOutDate,
            numberOfGuests,
            numberOfRooms
        });

        const savedBooking = await newBooking.save();
        // Return the saved booking object as a response
        res.status(201).json(savedBooking);
    } catch (error) {
        console.error('Error saving booking:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = app;
