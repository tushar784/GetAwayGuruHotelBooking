const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const schema = require('./user.modules')
const { AuthContext } = require('../AuthContext/Auth_Context.jsx');

//defining route
router.post('/login', async(req,res)=>{
    try {
        const {email, password} = req.body

    //find email
    const userEmail = await schema.findOne({email})

    if(!userEmail){       //if any of field is not entered
        return res.status(401).json({msg: 'Invalid email or password'})
    }

     //validating email
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    //required email format(right format)
     if (!emailRegex.test(email)) {
         return res.status(400).send({ msg: 'Invalid email format' });
     }

    //userEmail.password is used for extracting passwd from db corresponding email
    const passwdMatch = await bcrypt.compare(password, userEmail.password) 
    if(!passwdMatch){
        return res.status(401).json({msg: 'Invalid email or password'})
    }else if(passwdMatch){

        const token = jwt.sign({userId: schema._id},'secret-key',{expiresIn: '1h'})
        const authContext = new AuthContext()
        authContext.login({token,user: {...userEmail}})
        res.json({ token, user: { ...userEmail } });
        res.status(200).send({ message: 'Successfully logged in!' });
    }else {
        res.status(401).json({ msg: 'Invalid email or password' });
    }

    } catch (error) {
        console.log("error",error);
    }
})

module.exports = router;    