import mongoose from "mongoose";
import { Config } from "./config";
const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to database successfully");
    });

    mongoose.connection.on("error", () => {
      console.log("Error While Connecting to a database");
    });
    await mongoose.connect(Config.databaseURL as string);
  } catch (error) {
    console.error("Failed to connect to database", error);
    process.exit(1);
  }
};

export default connectDB;
