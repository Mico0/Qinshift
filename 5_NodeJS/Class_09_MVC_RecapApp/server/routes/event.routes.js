import { Router } from "express";
import EventController from "../controller/event.controller.js";

const router = Router();
const eventController = new EventController();

router.get("/", (req, res) => {
  eventController.getAll(req, res);
});
//! When we use dependancy injection in the controller class we must use arrow functions to bind this to the class

router.post("/", (req, res) => eventController.create(req, res));
router.delete("/:id", (req, res) => eventController.delete(req, res));

export default router;
