const express = require('express')
const app = express()
const ResetPasswordSchema = require('./Models/UserResetPassword.model')
const nodemailer = require('nodemailer')
const crypto = require('crypto');


app.post('/forgot-password', async(req,res)=>{
    const {email} = req.body

    try {
        const user = ResetPasswordSchema.findOne({email})

        if(!user){
            res.json({message:'user not found'})
        }
    } catch (error) {
        console.log(error);
    }

    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save(); 
        
    const mailOptions = {
        from: 'your_email@example.com',
        to: email,
        subject: 'Reset your password',
        text: `You are receiving this because you (or someone else) have requested to reset the password for your account.\n\n`
            + `Please click on the following link, or paste this into your browser to complete the process:\n\n`
            + `http://localhost:3000/reset-password/${token}\n\n`
            + `If you did not request this, please ignore this email and your password will remain unchanged.\n`
    };
    
});

module.exports=app;