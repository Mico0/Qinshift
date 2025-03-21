import TrainersService from "../services/trainers.service.js";

export default class TrainerController {
  static async getTrainers(req, res) {
    try {
      const trainers = await TrainersService.getTrainers();
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
      res.status(204).send({ message: "Trainer deleted" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deleteAllTrainers(req, res) {
    try {
      await TrainersService.deleteAll();
      res.status(204).send({ message: "Deleted all trainers" });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  static async sortTrainers(req, res) {
    try {
      const trainers = await TrainersService.getTrainers();
      let filteredTrainers = [];

      if (req.query.currentlyActive === "true") {
        filteredTrainers = trainers.filter(
          (x) => x.isCurrentlyTeaching === true
        );
      } else {
        filteredTrainers = trainers;
      }

      if (req.query.sortBy === "coursesAsc") {
        filteredTrainers = [...filteredTrainers].sort(
          (a, b) => a.coursesFinished - b.coursesFinished
        );
      }
      if (req.query.sortBy === "coursesDesc") {
        filteredTrainers = [...filteredTrainers].sort(
          (a, b) => b.coursesFinished - a.coursesFinished
        );
      }

      res.status(200).send(filteredTrainers);
      //   console.log("sortedAsc: ", sortedAsc);
      //   console.log("sortedDesc: ", sortedDesc);
      //   console.log("filtered: ", filteredTrainers);
    } catch (error) {
      res.status(400).send({ message: "Something went wrong" });
    }
  }
}

// ProductController.sortTrainers();
