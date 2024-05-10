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
    contact_number,
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
    !contact_number ||
    !state ||
    !room_Type ||
    !price
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const order_id = uuidv4(); // Generate a unique order_id using uuid
    // Assuming username and email are available through authentication context
    const { username, email } = req.body;

    const newBooking = new Booking({
      order_id, // Add the generated order_id to the booking
      username,
      email,
      contact_number,
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



app.get("/booking/:email", async (req, res) => {
  const email = req.params.email;

  try {
    // Find all bookings associated with the provided email
    const bookings = await Booking.find({ email });

    if (bookings.length === 0) {
      return res.status(404).json({ error: "No bookings found for the provided email" });
    }

    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = app;

