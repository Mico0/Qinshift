import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_CLUSTER, MONGO_DATABASE } =
  process.env;

const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;

export async function connectDB() {
  try {
    const connection = await mongoose.connect(MONGO_URI);
    //! this is an async method

    console.log("MongoDB connected:", connection.connection.host);
  } catch (error) {
    console.error("MongoDb connection error:", error);
    process.exit(1);
  }
}
