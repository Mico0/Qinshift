import { Router } from "express";
import EventController from "../controller/event.controller.js";

const router = Router();
const eventController = new EventController();

router.get("/", (req, res) => {
  eventController.getAll(req, res);
});
//! When we use dependancy injection in the controller class we must use arrow functions to bind this to the class

router.post("/", eventController.create);
router.delete("/:id", eventController.delete);

export default router;
