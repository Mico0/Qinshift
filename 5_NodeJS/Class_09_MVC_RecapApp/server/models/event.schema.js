import { Schema, model } from "mongoose";

const eventSchema = new Schema({
  artist: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: [true, "You must enter the artists name"],
  },
  location: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: [true, "You must enter the event location"],
  },
  date: {
    type: Date,
    required: [true, "Event date is required"],
  },
  ticketPrice: {
    type: Number,
    min: 5,
    max: 300,
    required: [true, "You must enter the ticket price"],
  },
});

const Event = model("event", eventSchema, "events");

export default Event;
