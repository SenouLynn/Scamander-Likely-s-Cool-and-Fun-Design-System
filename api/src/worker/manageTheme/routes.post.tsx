import { throwError } from "../../utils/builders/createResponseMessage";
import { getTheme, updateTheme } from "./worker";

const express = require("express");
const router = express.Router();

router.post("/updateTheme/:project/:themeId", async (req: any, res: any) => {
  const projectId = req.params.project;
  const themeId = req.params.themeId;
  const payload: EndPointConfig = req.body;
  const componentUpdaters: ComponentPayloadShapeSet = payload.payload;

  const response = await updateTheme({
    projectId,
    themeId,
    payload: componentUpdaters,
  });

  if (response.status === "error") {
    throwError({ res, code: 400, message: response.payload.message });
  }
  res.send({ status: "success", payload: response.payload });
});
export default router;
