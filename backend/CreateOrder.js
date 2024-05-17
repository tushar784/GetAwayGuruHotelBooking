const express = require("express");
const app = express();
const Booking = require("./Models/booking.model");
const { v4: uuidv4 } = require('uuid'); // Import uuid to generate unique IDs

app.post("/booking/createorder", async (req, res) => {
  const {
    Hotel_Name,
    checkInDate,
    checkOutDate,
    numberOfGuests,
    numberOfRooms,
    pincode,
    state,
    room_Type,
    price
  } = req.body;

  // Validate the request body
  if (
    !Hotel_Name ||
    !checkInDate ||
    !checkOutDate ||
    !numberOfGuests ||
    !numberOfRooms ||
    !pincode ||
    !state ||
    !room_Type ||
    !price
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const order_id = uuidv4(); // Generate a unique order_id using uuid
    // username and email are available through authentication context
    const { username, email } = req.body;

    const newBooking = new Booking({
      order_id, // Add the generated order_id to the booking
      username,
      email,
      pincode,
      state,
      room_Type,
      Hotel_Name,
      checkInDate,
      checkOutDate,
      numberOfGuests,
      numberOfRooms,
      price
    });

    const savedBooking = await newBooking.save();
    // Return the saved booking object as a response
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error("Error saving booking:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = app;
