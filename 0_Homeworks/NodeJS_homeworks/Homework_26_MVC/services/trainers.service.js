import TrainersModel from "../models/trainers.model.js";
import { v4 as uuidv4 } from "uuid";

export default class TrainersService {
  static async getTrainers(isActive = false, sortBy = null) {
    const trainers = await TrainersModel.getAllTrainers();
    let filteredTrainers = [];

    if (isActive === "true") {
      filteredTrainers = trainers.filter((x) => x.isCurrentlyTeaching === true);
    } else {
      filteredTrainers = trainers;
    }

    if (sortBy === "coursesAsc") {
      filteredTrainers = [...filteredTrainers].sort(
        (a, b) => a.coursesFinished - b.coursesFinished
      );
    }
    if (sortBy === "coursesDesc") {
      filteredTrainers = [...filteredTrainers].sort(
        (a, b) => b.coursesFinished - a.coursesFinished
      );
    }
    return filteredTrainers;
  }

  static async getTrainerById(id) {
    const trainer = await TrainersModel.getTrainerById(id);
    if (!trainer) {
      throw new Error("Trainer not found");
    }
    return trainer;
  }

  static async createTrainer(body) {
    const trainer = {
      id: uuidv4(),
      ...body,

      createdAt: new Date().toISOString(),
    };
    return await TrainersModel.createTrainer(trainer);
  }

  static async updateTrainer(id, body) {
    const trainer = await TrainersModel.getTrainerById(id);
    if (!trainer) {
      throw new Error("Trainer not found");
    }
    const updatedTrainer = {
      ...body,
      id,
      updatedAt: new Date().toISOString(),
    };
    return await TrainersModel.update(id, updatedTrainer);
  }

  static async deleteTrainer(id) {
    return await TrainersModel.delete(id);
  }

  static async deleteAll() {
    return await TrainersModel.deleteAll();
  }
}
