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
    }
  });
  
module.exports = mongoose.model('Booking', bookingSchema);