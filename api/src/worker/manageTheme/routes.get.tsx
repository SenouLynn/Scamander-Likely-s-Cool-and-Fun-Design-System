import { throwError } from "../../utils/builders/createResponseMessage";
import { getDocument } from "../../utils/firestore/getters";
import { queryThemeCache, setThemeCache } from "./helmsman";

const express = require("express");
const router = express.Router();

router.get("/getTheme/:project/:themeId", async (req: any, res: any) => {
  const projectId = req.params.project;
  const themeId = req.params.themeId;
  const cached = await queryThemeCache({ params: { projectId, themeId } });

  console.log("cached", cached);

  const response = await getDocument([projectId, "themes", themeId]);

  if (response.status === "error") {
    throwError({ res, code: 400, message: response.payload.message });
    res.send({ status: "error", payload: response.payload });
  }

  setThemeCache({
    params: { projectId, themeId },
    theme: response.payload,
  });
  res.send({ status: "success", payload: response.payload });
});

//Routes
//Find and update, or add component
//Find and update, or add page
//Add components to field

//Get theme

export default router;
