const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    // Hotel_Name: String,
    // checkInDate: Date,
    // checkOutDate: Date,
    // numberOfGuests: Number,
    // numberOfRooms: Number
    Hotel_Name: {
      type: String,
      required: true,
      unique: true
    },
    checkInDate: {
      type: Date,
      required: true,
      unique: true
    },
    checkOutDate: {
      type: Date,
      required: true,
      unique: true
    },
    numberOfGuests: {
      type: Number,
      required: true,
      unique: true
    },
    numberOfRooms: {
      type: Number,
      required: true,
      unique: true
    }
  });
  
module.exports = mongoose.model('Booking', bookingSchema);