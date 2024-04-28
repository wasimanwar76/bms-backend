import { config } from "dotenv";

config({
  path: "./.env",
});

const _config = {
  port: process.env.PORT,
  databaseURL: process.env.MONGODB_URL,
  env: process.env.NODE_ENV,
  jwtSecret: process.env.SECRET_KEYS,
};

export const Config = Object.freeze(_config);
