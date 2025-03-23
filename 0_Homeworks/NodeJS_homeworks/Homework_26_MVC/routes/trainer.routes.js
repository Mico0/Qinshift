import { Router } from "express";
import TrainerController from "../controllers/trainers.controller.js";

const router = Router();

router.get("", TrainerController.getTrainers);
router.get("/:id", TrainerController.getTrainer);

router.post("", TrainerController.createTrainer);

router.put("/:id", TrainerController.updateTrainer);

router.delete("/:id", TrainerController.deleteTrainer);
router.delete("", TrainerController.deleteAllTrainers);

export default router;
