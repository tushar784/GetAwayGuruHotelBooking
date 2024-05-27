const express = require("express");
const app = express();
const Booking = require("./Models/booking.model");
const Packagebooking = require("./Models/packagebooking.model")
const { v4: uuidv4 } = require('uuid'); // Import uuid to generate unique IDs
app.use(express.json());


//hotel booking
app.post("/hotels/booking", async (req, res) => {
  const {
    Hotel_Name,
    checkInDate,
    checkOutDate,
    numberOfGuests,
    numberOfRooms,
    contact_number,
    state,
    room_Type,
    price,
    breakfast, // Add breakfast to the destructuring
    username,
    email
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
    !price ||
    breakfast === undefined // Ensure breakfast is validated
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Function to format the date to dd-mm-yyyy using toLocaleDateString
  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-GB'); // 'en-GB' locale formats the date as dd/mm/yyyy
  };

  // Format the dates
  const formattedCheckInDate = formatDate(checkInDate);
  const formattedCheckOutDate = formatDate(checkOutDate);

  try {
    const order_id = uuidv4(); // Generate a unique order_id using uuid

    const newBooking = new Booking({
      order_id, // Add the generated order_id to the booking
      username,
      email,
      contact_number,
      state,
      room_Type,
      Hotel_Name,
      checkInDate: formattedCheckInDate,
      checkOutDate: formattedCheckOutDate,
      numberOfGuests,
      numberOfRooms,
      price,
      breakfast // Include the breakfast option in the booking
    });

    const savedBooking = await newBooking.save();
    // Return the saved booking object as a response
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error("Error saving booking:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});



// API to get booking history by email of hotel
app.get('/hotelbooking/history/:email', async (req, res) => {
  const email = req.params.email;

  try {
    const bookings = await Booking.find({ email });

    if (bookings.length === 0) {
      return res.status(404).json({ error: 'No bookings found for the provided email' });
    }

    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});



// API to get booking history by email of holiday
app.get('/packagebooking/history/:email', async (req, res) => {
  const email = req.params.email;

  try {
    const bookings = await Packagebooking.find({ email });

    if (bookings.length === 0) {
      return res.status(404).json({ error: 'No bookings found for the provided email' });
    }

    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// holiday packages booking(checkout page)
app.post("/holidaypackages/booking", async (req, res) => {
  const {
    Packages_Name,
    Departure_Date,
    numberOfGuests,
    numberOfRooms,
    contact_number,
    state,
    price,
    username,
    email,
  } = req.body;

  // Validate the request body
  if (
    !Packages_Name ||
    !Departure_Date ||
    !numberOfGuests ||
    !numberOfRooms ||
    !contact_number ||
    !state ||
    !price ||
    !username ||
    !email 
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Function to format the date to dd-mm-yyyy using toLocaleDateString
  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-GB'); // 'en-GB' locale formats the date as dd/mm/yyyy
  };

  // Format the dates
  const formattedDeparture_Date = formatDate(Departure_Date);

  try {
    const order_id = uuidv4(); // Generate a unique order_id using uuid

    const newBooking = new Packagebooking({
      order_id, // Add the generated order_id to the booking
      username,
      email,
      contact_number,
      state,
      Packages_Name,
      Departure_Date: formattedDeparture_Date,
      numberOfGuests,
      numberOfRooms,
      price,
    });

    const savedBooking = await newBooking.save();
    // Return the saved booking object as a response
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error("Error saving booking:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});


module.exports=app;