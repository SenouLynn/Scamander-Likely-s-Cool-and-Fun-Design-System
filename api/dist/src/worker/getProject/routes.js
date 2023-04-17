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
const getters_1 = require("../../utils/firestore/getters");
const express = require("express");
const router = express.Router();
router.get("/getProject/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projectId = req.params.id;
    const appMeta = yield (0, firebase_interface_1.getProjectFromDb)(projectId);
    const themes = yield (0, getters_1.getAllDocs)([projectId, "themes"]);
    const payload = Object.assign(Object.assign({}, appMeta.payload), { themes: Object.assign({}, themes.payload) });
    res.status(200).json({ status: "success", id: projectId, payload });
}));
exports.default = router;
//# sourceMappingURL=routes.js.map