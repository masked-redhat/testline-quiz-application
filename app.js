import express from "express";
import cors from "cors";
import _env from "./constants/env.js";

const app = express();
const port = _env.app.PORT;

app.use(cors()); // allowing cors policy

app.use(express.static("./react-app/dist")); // public folder

app.get("/data", async (_, res) => {
  const _res = await fetch(_env.app.API);
  const data = await _res.json();

  res.status(200).json(data);
});

app.get("/*", (_, res) => {
  res.sendFile("index.html", { root: "./react-app/dist" });
});

app.listen(port, () => {
  console.log("Application started");
});
