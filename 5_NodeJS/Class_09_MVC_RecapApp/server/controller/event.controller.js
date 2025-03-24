import EventService from "../services/event.service.js";

export default class EventController {
  constructor() {
    this.eventService = new EventService();
  }

  async getAll(req, res) {
    try {
      const filter = {};

      if (req.query.artist) {
        filter.artist = req.query.artist;
      }

      if (req.query.location) {
        filter.location = req.query.location;
      }
      console.log("TEST");
      const events = await this.eventService.getAll(filter);
      console.log("TEST 2");

      res.status(200).send(events);
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  }

  async create(req, res) {
    try {
      const eventBody = req.body;
      res.status(200).send(await this.eventService.create(eventBody));
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const eventId = req.params.id;
      await this.eventService.delete(eventId);
      res.status(200).json({ message: `Event with ${eventId} was deleted.` });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}
