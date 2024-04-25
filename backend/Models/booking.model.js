const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    Hotel_Name: String,
    checkInDate: Date,
    checkOutDate: Date,
    numberOfGuests: Number,
    numberOfRooms: Number
  });
  
module.exports = mongoose.model('Booking', bookingSchema);