import TrainersModel from "../models/trainers.model.js";
import { v4 as uuidv4 } from "uuid";

export default class TrainersService {
  static async getTrainers() {
    return await TrainersModel.getAllTrainers();
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
      ...body,
      id: uuidv4(),
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
