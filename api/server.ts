import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import cors from "cors";
import readFromFile from "./src/readFiles";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8000;

app.get("/test", (req, res) => {
  console.log(res);
  res.send(JSON.stringify({ test: "test" }));
});
console.log(
  JSON.stringify(readFromFile("./src/assets/component.manifest.json"))
);

app.get("/api/getAll", (req, res) => {
  const promises = [
    readFromFile("./src/assets/component.manifest.json"),
    readFromFile("./src/assets/default.manifest.json"),
    readFromFile("./src/assets/controlOptions.manifest.json"),
    readFromFile("./src/assets/pages.manifest.json"),
    readFromFile("./src/assets/routes.manifest.json"),
  ];
  Promise.all(promises).then((result) => {
    console.log(result);
    const componentList = result[0];
    const defaultStyles = result[1];
    const controlOptions = result[2];
    const pages = result[3];
    const routes = result[4];
    res.send({ defaultStyles, componentList, controlOptions, pages, routes });
  });
});

app.post("/api/updateStyle", (req, res) => {
  console.log(req.body);
  let styles = req.body.styles;
  let componentId = req.body.componentId;
  let defaultStyleId = req.body.defaultStyleId;
  //Do stuff with styles here
  res.send("Message recieved");
});

app.listen(port, () => {
  console.log(`[Server]: I am running at https://localhost:${port}`);
});
