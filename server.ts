console.log("Welcome to ebook apis.");

import app from "./src/app";
import { Config } from "./src/config/config";
import connectDB from "./src/config/db";

const startServer = async () => {
  connectDB();
  const PORT = Config.port || 3000;
  app.listen(PORT, () => {
    console.log(`App is listening on port no ${PORT}`);
  });
};

startServer();
