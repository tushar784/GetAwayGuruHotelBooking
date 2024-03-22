const mongoose = require("mongoose");
const express = require("express");
const port = 4000;
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors())


try {
  //database connection
  const mongodb = mongoose.connect("mongodb://localhost:27017/DemoDB");
  console.log("mongo connected!");
} catch (error) {
  console.log("err", error);
}
const register = require("./registration");

app.use("/api", register);

app.get("/api/signUp", (req, res) => {
  res.send("sign up is working");
});

const userLoginRouter = require("./login");

app.use("/api", userLoginRouter);
app.get("/api/login", (req, res) => {
  res.send("login is working");
});

app.listen(port, () => {
  console.log("server started!");
});
