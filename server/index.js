const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
// const pino = require("express-pino-logger")();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// app.use(pino);

app.get("/api/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello My Dude, ${name}!` }));
});
app.get("/api/read", (req, res) => {
  fs.readFile(path.resolve("./test.css"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    res.send(JSON.stringify(data));
  });
});
app.get("/api/getDefaultStyles", (req, res) => {
  fs.readFile(
    path.resolve("./server/fakeDb/component.manifest.json"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.send(data);
    }
  );
});

app.listen(8000, () =>
  console.log("Express server is running on localhost:8000")
);
