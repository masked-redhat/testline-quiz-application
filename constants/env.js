import dotenv from "dotenv";
dotenv.config();

const APP = {
  PORT: process.env.PORT ?? 3000,
  API: process.env.API ?? "https://api.jsonserve.com/Uw5CrX",
};

const _env = {
  app: APP,
};

export default _env;
