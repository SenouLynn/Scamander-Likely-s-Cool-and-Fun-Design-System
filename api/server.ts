import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import readFromFile, { runPromiseBatch, writeToFile } from "./src/readFiles";
import { getCollection } from "./src/firebase_interface";

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
    const componentList = result[0];
    const defaultStyles = result[1];
    const controlOptions = result[2];
    const pages = result[3];
    const routes = result[4];
    res.send({ defaultStyles, componentList, controlOptions, pages, routes });
  });
});

app.post("/api/updateComponent", (req, res) => {
  let componentList: UpdatePackagePayload = req.body;
  writeToFile("./src/assets/testFile.json", componentList.pack);
});

app.get("/api/getCollection", async (req, res) => {
  const collection = await getCollection("");
  res.send(collection); 
});

app.listen(port, () => {
  console.log(`[Server]: I am running at https://localhost:${port}`);
});
