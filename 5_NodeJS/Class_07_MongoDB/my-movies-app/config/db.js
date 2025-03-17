import { MongoClient } from "mongodb";
import dotenv from "dotenv";

// Load env variables

dotenv.config();

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_CLUSTER, MONGO_DATABASE } =
  process.env;

// SAMES AS
// const MONG_USERNAME = process.env.MONGO_USERNAME

// Validate required env variables

const requiredEnvVariables = [
  "MONGO_USERNAME",
  "MONGO_PASSWORD",
  "MONGO_CLUSTER",
  "MONGO_DATABASE",
];

const missingEnvVars = requiredEnvVariables.filter((x) => !process.env[x]);

if (missingEnvVars.length > 0) {
  console.error("Missing required env variables: ", missingEnvVars.join(","));
  process.exit();
}

const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(MONGO_URI);

let db = null;

export async function connectDB() {
  try {
    const connection = await client.connect();
    db = connection.db();
    // console.log(db);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error: ", error);
    process.exit();
  }
}

export function getDB() {
  if (db) {
    console.error("Database not initialized");
  }
  return db;
}
