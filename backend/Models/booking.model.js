const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  order_id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  contact_number: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  room_Type: {
    type: String,
    required: true
  },
  Hotel_Name: {
    type: String,
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },

  checkOutDate: {
    type: Date,
    required: true,
  },
  numberOfGuests: {
    type: Number,
    required: true,
  },
  numberOfRooms: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true
  }  
  });
  
module.exports = mongoose.model('Booking', bookingSchema);