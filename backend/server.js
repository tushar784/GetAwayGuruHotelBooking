require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const port = 4000;
const app = express();
app.use(express.json());
app.use(cors())
app.use(express.json()); 

const URL = process.env.MONGO_URL;
mongoose.connect(URL)
.then(()=> console.log('Mongo Connected!'))
.catch(err => console.error('MongoDB connection error:', err));


const register = require("./registration");
const userLoginRouter = require("./login");
const hotelList = require('./HotelList.js')
const forgetpassword = require('./ForgetPassword.js')
const createorder = require('./CreateOrder.js')



app.use("/api", register);
app.use("/api", userLoginRouter);
app.use('/api' ,hotelList)
app.use('/api', forgetpassword)
app.use('/api', createorder)

app.get("/api/signUp", (req, res) => {
  res.send("sign up is working");  //{msg: done}
});

app.get("/api/login", (req, res) => {
  res.send("login is working");
}); 

app.get("/api/forgot-password", (req, res) => {
  res.send("Forget password is working");
});
 
app.get('/api/hotels', (req,res)=>{
  res.send("hotels list")
})

app.get('/api/booking/createorder', (req,res)=>{
  res.send("i am node js")
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});



