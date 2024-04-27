import { config } from "dotenv";

config({
  path: "./.env",
});

const _config = {
  port: process.env.PORT,
  databaseURL: process.env.MONGODB_URL,
  env: process.env.NODE_ENV,
};

export const Config = Object.freeze(_config);
