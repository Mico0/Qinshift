import * as fs from "fs";
import { promisify } from "util";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
//! converts the path to the file to a valid accessible url
const __filepath = `${__dirname}/example.txt`;

//! Convert callback-based functions into promise based
const writeFile = promisify(fs.writeFile);

const writeFileAsync = async (filePath, content) => {
  try {
    await writeFile(filePath, content, "utf-8");
    console.log(`File written successfully ${filePath}`);
  } catch (error) {
    console.error(`Error writing file: ${error.message}`);
  }
};

//! We wrapp this in to function because we use the await keyword, we cannot use await on top level
//! It must be wrapped in a wrapper function
const main = async () => {
  await writeFileAsync(__filepath, "Writing in the file");
};
main();

const appendFile = promisify(fs.appendFile);

const appendFileAsync = async (filePath, content) => {
  try {
    await appendFile(filePath, `\n${content} `, "utf-8");
    console.log(`Content appened to file successfully ${filePath}`);
  } catch (error) {
    console.error(`Error appending file: ${error.message}`);
  }
};
const mainAppend = async () => {
  await appendFileAsync(__filepath, "Appending text in file");
};
mainAppend();

const readFile = promisify(fs.readFile);

const readFileAsync = async (filePath) => {
  try {
    const data = await readFile(filePath, "utf-8");
    console.log(`Content read file successfully ${filePath}, Data: ${data}`);
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
};
const mainRead = async () => {
  await readFileAsync(__filepath, "Appending text in file");
};
mainRead();
