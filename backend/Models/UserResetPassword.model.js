const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResetPasswordSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    resetPasswordToken: {
       type: String,
       required: true
    },
    resetPasswordExpires: {
        type:Date,
        required: true
    },
});

module.exports = mongoose.model('ResetPassword', ResetPasswordSchema);