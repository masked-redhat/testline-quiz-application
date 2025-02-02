import express from "express";
import cors from "cors";

const app = express();
const port = 3002;

app.use(cors());

app.get("/", async (_, res) => {
  const _res = await fetch("https://api.jsonserve.com/Uw5CrX");

  const data = await _res.json();

  res.status(200).json(data);
});

app.listen(port, () => {
  console.log("Application started");
});
