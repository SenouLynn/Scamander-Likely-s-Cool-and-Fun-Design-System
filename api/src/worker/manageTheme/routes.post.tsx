import { deleteField } from "firebase/firestore";
import { buildPack } from "../../utils/builders/createComponentPackage";
import { throwError } from "../../utils/builders/createResponseMessage";
import { updateFieldDoc } from "../../utils/firestore/setters";
import { updateAndAddKeyValues } from "../../utils/firestore/checkers";
import { log } from "../../utils/log/createLog";

const express = require("express");
const router = express.Router();

//updateComponent (update multiple objects)
router.post("/updateTheme/:project/:themeId", async (req: any, res: any) => {
  const params: { project: string; themeId: string } = req.params;
  const payload: ComponentPayloadShapeSet = req.body;

  console.log("update theme", payload);
  //Clean and find a way to pass uspdater correct finder : "field.location"
  const response = await updateAndAddKeyValues({
    query: [params.project, "themes", params.themeId],
    payload,
  });
  console.log("Theme payload", payload);

  if (response.status === "error") {
    log({ message: response.payload.message });
    throwError({ res, code: 400, message: response.payload.message });
    return res.send({ status: "error", payload: response.payload });
  }

  res.send({ status: "success", payload: response.payload });
  log({
    message: `Updated theme`,
  });
});

//addComponent
router.post("/addPack/:project/:themeId", async (req: any, res: any) => {
  const params: { project: string; themeId: string } = req.params;

  const cleanedPack = buildPack({ pack: req.body, props: {} });
  const location = cleanedPack.location;

  const response = await updateFieldDoc({
    query: [params.project, "themes", params.themeId],
    key: `field.${location}`,
    value: cleanedPack,
  });

  if (response.status === "error") {
    log({ message: response.payload.message });
    throwError({ res, code: 400, message: response.payload.message });
    return res.send({ status: "error", payload: response.payload });
  }

  res.send({ status: "success", payload: response.payload });
  log({
    message: `Added Component '${cleanedPack.label}' : ${cleanedPack.location}`,
  });
});

router.post("/deletePack/:project/:themeId", async (req: any, res: any) => {
  const params: { project: string; themeId: string } = req.params;

  const cleanedPack = buildPack({ pack: req.body, props: {} });
  const location = cleanedPack.location;

  const response = await updateFieldDoc({
    query: [params.project, "themes", params.themeId],
    key: `field.${location}`,
    value: deleteField(),
  });

  if (response.status === "error") {
    log({ message: response.payload.message });
    throwError({ res, code: 400, message: response.payload.message });
    return res.send({
      status: "error",
      payload: { ...response.payload, data: cleanedPack },
    });
  }
  res.send({
    status: "success",
    payload: { ...response.payload, data: cleanedPack },
  });
  log({
    message: `Deleted pack '${cleanedPack.label}' : ${cleanedPack.location}`,
  });
});

//updateComponent
//deleteComponent
export default router;
