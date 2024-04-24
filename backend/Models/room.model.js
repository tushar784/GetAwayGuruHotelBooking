const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    Room_Type: {
      type: String,
      required: true
    },
    Image: {
      type: String,
      required: true
    },
    Features: {
      type: [String],
      required: true
    },
    Refund_Status: {
      type: String,
      required: true
    },
    Price: {
      type: Number,
      required: true
    }
});

module.exports = mongoose.model('RoomDB', roomSchema);
