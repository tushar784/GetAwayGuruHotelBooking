const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    customer_id: {
      type: String,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 20,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Userdetail = mongoose.model("Userdetail", userSchema);
module.exports = Userdetail;
