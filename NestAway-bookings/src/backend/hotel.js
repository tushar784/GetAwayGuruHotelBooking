const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  hotel_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    min: 1,
    max: 5
  },
  amenities: {
    type: [String]
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String
  }
});

module.exports = mongoose.model('Hotel', hotelSchema);
