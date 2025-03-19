import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import DataService from "../services/data.service.js";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const dataPath = path.join(dirname, "..", "data", "teachers.json");

// console.log(dataPath);

export default class TrainersModel {
  static async getAllTrainers() {
    return await DataService.readData(dataPath);
  }

  static async getTrainerById(id) {
    const trainers = await DataService.readData(dataPath);
    const trainer = trainers.find((trainer) => id === trainer.id);
    return trainer;
  }

  static async createTrainer(body) {
    const trainers = this.getAllTrainers();
    trainers.push(body);
    await DataService.writeData(dataPath, trainers);

    return 1;
  }

  static async update(id, body) {
    const trainers = await this.getAllTrainers();
    const index = trainers.findIndex((trainer) => trainer.id === id);
    if (index < 0) {
      throw new Error("Trainer not found");
    }
    trainers[index] = body;
    await DataService.writeData(dataPath, trainers);
    return 1;
  }

  static async delete(id) {
    const trainers = await this.getAllTrainers();
    const filteredTrainers = trainers.filter((trainer) => trainer.id !== id);
    await DataService.writeData(dataPath, filteredTrainers);
  }

  static async deleteAll() {
    const trainers = await this.getAllTrainers();
    trainers = [];
    return trainers;
  }
}

// console.log(await TrainersModel.getAllTrainers());
