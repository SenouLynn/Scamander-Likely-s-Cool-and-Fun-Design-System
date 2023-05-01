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
const firestore_1 = require("firebase/firestore");
const createComponentPackage_1 = require("../../utils/builders/createComponentPackage");
const createResponseMessage_1 = require("../../utils/builders/createResponseMessage");
const setters_1 = require("../../utils/firestore/setters");
const checkers_1 = require("../../utils/firestore/checkers");
const createLog_1 = require("../../utils/log/createLog");
const express = require("express");
const router = express.Router();
router.post("/updateTheme/:project/:themeId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    const payload = req.body;
    console.log("update theme", payload);
    const response = yield (0, checkers_1.updateAndAddKeyValues)({
        query: [params.project, "themes", params.themeId],
        payload,
    });
    console.log("Theme payload", payload);
    if (response.status === "error") {
        (0, createLog_1.log)({ message: response.payload.message });
        (0, createResponseMessage_1.throwError)({ res, code: 400, message: response.payload.message });
        return res.send({ status: "error", payload: response.payload });
    }
    res.send({ status: "success", payload: response.payload });
    (0, createLog_1.log)({
        message: `Updated theme`,
    });
}));
router.post("/addPack/:project/:themeId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    const cleanedPack = (0, createComponentPackage_1.buildPack)({ pack: req.body, props: {} });
    const location = cleanedPack.location;
    const response = yield (0, setters_1.updateFieldDoc)({
        query: [params.project, "themes", params.themeId],
        key: `field.${location}`,
        value: cleanedPack,
    });
    if (response.status === "error") {
        (0, createLog_1.log)({ message: response.payload.message });
        (0, createResponseMessage_1.throwError)({ res, code: 400, message: response.payload.message });
        return res.send({ status: "error", payload: response.payload });
    }
    res.send({ status: "success", payload: response.payload });
    (0, createLog_1.log)({
        message: `Added Component '${cleanedPack.label}' : ${cleanedPack.location}`,
    });
}));
router.post("/deletePack/:project/:themeId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    const cleanedPack = (0, createComponentPackage_1.buildPack)({ pack: req.body, props: {} });
    const location = cleanedPack.location;
    const response = yield (0, setters_1.updateFieldDoc)({
        query: [params.project, "themes", params.themeId],
        key: `field.${location}`,
        value: (0, firestore_1.deleteField)(),
    });
    if (response.status === "error") {
        (0, createLog_1.log)({ message: response.payload.message });
        (0, createResponseMessage_1.throwError)({ res, code: 400, message: response.payload.message });
        return res.send({
            status: "error",
            payload: Object.assign(Object.assign({}, response.payload), { data: cleanedPack }),
        });
    }
    res.send({
        status: "success",
        payload: Object.assign(Object.assign({}, response.payload), { data: cleanedPack }),
    });
    (0, createLog_1.log)({
        message: `Deleted pack '${cleanedPack.label}' : ${cleanedPack.location}`,
    });
}));
exports.default = router;
//# sourceMappingURL=routes.post.js.map