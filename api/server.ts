import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import seedProjectRoutes from "./src/worker/seedProject/routes";
import getManageProject from "./src/worker/manageTheme/routes.get";
import postManageProject from "./src/worker/manageTheme/routes.post";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8000;

//Imported Routes
app.use("/api", seedProjectRoutes);
app.use("/api", getManageProject);
app.use("/api", postManageProject);

// app.get("/api/getAll", (req, res) => {
//   const promises = [
//     readFromFile("./src/assets/component.manifest.json"),
//     readFromFile("./src/assets/default.manifest.json"),
//     readFromFile("./src/assets/controlOptions.manifest.json"),
//     readFromFile("./src/assets/pages.manifest.json"),
//     readFromFile("./src/assets/routes.manifest.json"),
//   ];
//   Promise.all(promises).then((result) => {
//     const componentList = result[0];
//     const defaultStyles = result[1];
//     const controlOptions = result[2];
//     const pages = result[3];
//     const routes = result[4];
//     res.send({ defaultStyles, componentList, controlOptions, pages, routes });
//   });
// });

app.listen(port, () => {
  console.log(`[Server]: I am running at https://localhost:${port}`);
});

//app/themes/theme
