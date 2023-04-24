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
const firebase_interface_1 = require("../../firebase_interface");
const createComponentPackage_1 = require("../../utils/builders/createComponentPackage");
const createResponseMessage_1 = require("../../utils/builders/createResponseMessage");
const worker_1 = require("./worker");
const express = require("express");
const router = express.Router();
router.post("/seedProject/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projectId = req.params.id;
    if (!projectId) {
        (0, createResponseMessage_1.throwError)({ res, code: 400, message: "Error: Project id is required" });
    }
    let response = yield (0, worker_1.createProject)({ appId: projectId });
    if (response.status === "error") {
        (0, createResponseMessage_1.throwError)({ res, code: 400, message: response.payload.message });
    }
    else {
        res
            .status(200)
            .json({ status: "success", id: projectId, payload: response.payload });
    }
}));
router.post("/addComponent/:project/:theme", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projectId = "freshPressed";
    const theme = "development";
    const updaterKey = "field";
    const cleanedPack = (0, createComponentPackage_1.createComponentPackage)({ pack: req.body, props: {} });
    const location = cleanedPack.location;
    const updateComponent = yield (0, firebase_interface_1.writeToDb)({
        query: [projectId, "theme", theme, updaterKey, location],
        payload: cleanedPack,
    });
    res.json(updateComponent);
}));
exports.default = router;
//# sourceMappingURL=routes.js.map