const mongoose = require("mongoose");
const express = require("express");
const port = 4000;
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors())
app.use(express.json()); // Parse incoming JSON data



try {
  //database connection
  const mongodb = mongoose.connect("mongodb://localhost:27017/DemoDB");
  console.log("mongo connected!");
} catch (error) {
  console.log("err", error);
}
const register = require("./registration");
const userLoginRouter = require("./login");
const hotelList = require('./HotelList')

app.use("/api", register);
app.use("/api", userLoginRouter);
app.use('/api', hotelList)



app.get("/api/signUp", (req, res) => {
  res.send("sign up is working");  //{msg: done}
});

app.get("/api/login", (req, res) => {
  res.send("login is working");
});


// app.get('/api/hotels', (req,res)=>{
//   res.send("hotels list")
// })

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});



