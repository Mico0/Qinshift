import { time } from "console";
import { promises as fsPromises } from "fs";

//! Define log file path
const LOG_FILEPATH = `./app.log`;

//! Function to log the messages with timestamps

const logMessage = async (message) => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp} ${message}]`;

  try {
    await fsPromises.appendFile(LOG_FILEPATH, logEntry);
  } catch (error) {
    console.error("Failed to write to log: ", error);
  }
};

export { logMessage };
