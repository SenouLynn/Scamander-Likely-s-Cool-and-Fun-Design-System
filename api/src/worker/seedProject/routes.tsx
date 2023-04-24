import { writeToDb } from "../../firebase_interface";
import { createComponentPackage } from "../../utils/builders/createComponentPackage";
import { throwError } from "../../utils/builders/createResponseMessage";
import { createProject } from "./worker";

const express = require("express");
const router = express.Router();

//Adds initial object set to db. Should not overwrite
router.post("/seedProject/:id", async (req: any, res: any) => {
  const projectId = req.params.id;

  if (!projectId) {
    throwError({ res, code: 400, message: "Error: Project id is required" });
  }
  let response = await createProject({ appId: projectId });

  if (response.status === "error") {
    throwError({ res, code: 400, message: response.payload.message });
  } else {
    res
      .status(200)
      .json({ status: "success", id: projectId, payload: response.payload });
  }
});

router.post("/addComponent/:project/:theme", async (req: any, res: any) => {
  const projectId = "freshPressed"; //req.params.id;
  const theme = "development"; //req.params.theme;
  const updaterKey = "field";
  //Clean data for payload
  const cleanedPack = createComponentPackage({ pack: req.body, props: {} });
  const location = cleanedPack.location;

  // const update = await updateComponentInDb({});
  const updateComponent = await writeToDb({
    query: [projectId, "theme", theme, updaterKey, location],
    payload: cleanedPack,
  });
  res.json(updateComponent);
  //Add component to db
  //return success
});
export default router;
