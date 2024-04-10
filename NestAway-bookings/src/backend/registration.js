const express = require('express')
const { default: mongoose } = require('mongoose')
const router = express.Router()
const schema = require('./Models/user.model')
const bcrypt = require('bcrypt')

router.post('/signUp', async(req,res)=>{      //signup route
    const { username, email, password} = req.body;

    if(!username || !email || !password){            //if any empty fields
        return res.status(400).send({msg: 'Fill in all field'})
        }

    try {                                          //exist user check
        const existingUser = await schema.findOne({email})
        if(existingUser){
            return res.status(400).send({msg: 'email is already registered'})
        }
       
        //validating email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).send({ msg: 'Invalid email format' });
        }

        //validating username 
        if(username.length > 20){
            return res.status(400).send({ msg: 'username is greater than 20 characters' });        
        }

        //hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    

        const createUser = new schema({username, email, password: hashedPassword})    //creating new user
        await createUser.save()
        res.status(201).send({msgs:'new user create'})
        

    } catch (error) {
        console.log("error",error);
    } 
});


module.exports = router