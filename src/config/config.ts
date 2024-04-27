import { config } from "dotenv";

config({
  path: "./.env",
});

const _config = {
  port: process.env.PORT,
};

export const Config = Object.freeze(_config);
