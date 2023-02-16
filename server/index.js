const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const pino = require("express-pino-logger")();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(pino);

//Functions
function readFromFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, function (err, data) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

app.get("/api/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello My Dude, ${name}!` }));
});

app.get("/api/getAll", (req, res) => {
  const promises = [
    readFromFile("./server/fakeDb/component.manifest.json"),
    readFromFile("./server/fakeDb/mockDb.manifest.json"),
    readFromFile("./server/fakeDb/controlOptions.manifest.json"),
  ];

  Promise.all(promises).then((result) => {
    console.log(result);
    defaultStyles = result[0];
    componentList = result[1]; 
    controlOptions = result[2];
    res.send({ defaultStyles, componentList, controlOptions });
  });
});
app.listen(8000, () =>
  console.log("Express server is running on localhost:8000")
);
