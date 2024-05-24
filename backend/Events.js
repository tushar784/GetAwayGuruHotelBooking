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

// Route to get events by category
app.get("/events/category/:category", async (req, res) => {
  const { category } = req.params;
  try {
    const categoryTitleCase =
      category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
    const events = await Events.find({
      Event_Category: { $regex: new RegExp("^" + categoryTitleCase, "i") },
    });

    if (!events || events.length === 0) {
      return res
        .status(404)
        .json({ message: "No events found for the specified category" });
    }
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching events");
  }
});

// Route to get events by name
app.get("/events/name/:eventName", async (req, res) => {
  const { eventName } = req.params;
  try {
    const eventNameRegex = new RegExp(eventName, "i");
    const events = await Events.find({
      Event_Name: { $regex: eventNameRegex },
    });

    if (!events || events.length === 0) {
      return res
        .status(404)
        .json({ message: "No events found for the specified name" });
    }
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching events");
  }
});

module.exports = app;
