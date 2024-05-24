const express = require("express");
const cors = require("cors");
const Events = require("./Models/events.model");
const app = express();
app.use(cors());

app.get("/events/location/:Location", async (req, res) => {
  const { Location } = req.params;
  try {
    const locationTitleCase =
      Location.charAt(0).toUpperCase() + Location.slice(1).toLowerCase();
    const event = await Events.find({
      Location: { $regex: new RegExp("^" + locationTitleCase, "i") },
    });

    if (!event || event.length === 0) {
      return res
        .status(404)
        .json({ message: "No event found for the specified location" });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching packages");
  }
});

module.exports = app;
