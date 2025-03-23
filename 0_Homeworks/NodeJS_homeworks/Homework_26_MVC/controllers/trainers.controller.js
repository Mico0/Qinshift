import TrainersService from "../services/trainers.service.js";

export default class TrainerController {
  static async getTrainers(req, res) {
    try {
      const isActive = req.query.currentlyActive;
      const sortBy = req.query.sortBy;
      const trainers = await TrainersService.getTrainers(isActive, sortBy);
      res.send(trainers);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async getTrainer(req, res) {
    try {
      const trainer = await TrainersService.getTrainerById(req.params.id);
      res.send(trainer);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async createTrainer(req, res) {
    try {
      const trainerBody = req.body;
      const trainer = await TrainersService.createTrainer(trainerBody);
      res.status(201).send(trainer);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async updateTrainer(req, res) {
    try {
      const trainerId = req.params.id;
      const trainerBody = req.body;
      const trainer = await TrainersService.updateTrainer(
        trainerId,
        trainerBody
      );
      res.send(trainer);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deleteTrainer(req, res) {
    try {
      await TrainersService.deleteTrainer(req.params.id);
      res.status(200).send({ message: "Trainer deleted" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deleteAllTrainers(req, res) {
    try {
      await TrainersService.deleteAll();
      res.status(200).send({ message: "Deleted all trainers" });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
}

// ProductController.sortTrainers();
