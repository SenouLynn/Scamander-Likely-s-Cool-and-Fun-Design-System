import { getProjectFromDb } from "../../firebase_interface";
import { getAllDocs } from "../../utils/firestore/getters";

const express = require("express");
const router = express.Router();

//Adds initial object set to db. Should not overwrite
router.get("/getProject/:id", async (req: any, res: any) => {
  const projectId = req.params.id;
  const appMeta = await getProjectFromDb(projectId);
  const themes = await getAllDocs([projectId, "themes"]);

  // console.log(response);
  const payload = { ...appMeta.payload, themes: { ...themes.payload } };
  res.status(200).json({ status: "success", id: projectId, payload });

  //If project id exists, then seed project
  //   const payload = createProject({ appId: projectId });
});

export default router;
