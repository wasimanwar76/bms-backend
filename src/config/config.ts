import { config } from "dotenv";

config({
  path: "./.env",
});

const _config = {
  port: process.env.PORT,
  databaseURL: process.env.MONGODB_URL,
};

export const Config = Object.freeze(_config);
