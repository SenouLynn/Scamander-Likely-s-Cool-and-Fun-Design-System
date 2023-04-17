import { throwError } from "../../utils/builders/createResponseMessage";
import { getTheme } from "./worker";

const express = require("express");
const router = express.Router();

router.get("/getTheme/:project/:themeId", async (req: any, res: any) => {
  const projectId = req.params.project;
  const themeId = req.params.themeId;
  const response = await getTheme({ projectId, themeId });

  if (response.status === "error") {
    throwError({ res, code: 400, message: response.payload.message });
  }
  res.send({ status: "success", payload: response.payload });
});
//Routes
//Find and update, or add component
//Find and update, or add page
//Add components to field

//Get theme


export default router;
