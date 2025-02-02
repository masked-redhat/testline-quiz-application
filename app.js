import express from "express";
import cors from "cors";

const app = express();
const port = 3000; // should be in env file

app.use(cors()); // allowing cors policy

app.use(express.static("./react-app/dist")); // public folder

app.get("/data", async (_, res) => {
  const _res = await fetch("https://api.jsonserve.com/Uw5CrX");

  const data = await _res.json();

  res.status(200).json(data);
});

app.get("/*", (_, res) => {
  res.sendFile("index.html", { root: "./react-app/dist" });
});

app.listen(port, () => {
  console.log("Application started");
});
