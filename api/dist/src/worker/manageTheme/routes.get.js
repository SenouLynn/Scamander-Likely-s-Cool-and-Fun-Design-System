"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createResponseMessage_1 = require("../../utils/builders/createResponseMessage");
const getters_1 = require("../../utils/firestore/getters");
const helmsman_1 = require("./helmsman");
const express = require("express");
const router = express.Router();
router.get("/getTheme/:project/:themeId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projectId = req.params.project;
    const themeId = req.params.themeId;
    const cached = yield (0, helmsman_1.queryThemeCache)({ params: { projectId, themeId } });
    console.log("cached", cached);
    const response = yield (0, getters_1.getDocument)([projectId, "themes", themeId]);
    if (response.status === "error") {
        (0, createResponseMessage_1.throwError)({ res, code: 400, message: response.payload.message });
        res.send({ status: "error", payload: response.payload });
    }
    (0, helmsman_1.setThemeCache)({
        params: { projectId, themeId },
        theme: response.payload,
    });
    res.send({ status: "success", payload: response.payload });
}));
exports.default = router;
//# sourceMappingURL=routes.get.js.map