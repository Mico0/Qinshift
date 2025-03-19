import fs from "node:fs/promises";

export default class DataService {
  static async readData(path) {
    const data = await fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) throw new Error();
      console.log(data);
    });
    return JSON.parse(data);
  }

  static async writeData(path, data = []) {
    await fs.writeFile(path, JSON.stringify(data, null, 2));
  }
}
