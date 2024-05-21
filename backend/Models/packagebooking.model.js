const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packagesbookingSchema = new Schema({
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
    type: Number,
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
  Packages_Name: {
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
  
module.exports = mongoose.model('Packages_Booking', packagesbookingSchema);