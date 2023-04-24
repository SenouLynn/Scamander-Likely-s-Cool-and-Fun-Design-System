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
exports.createTheme = exports.createProject = void 0;
const checkers_1 = require("../../utils/firestore/checkers");
const setters_1 = require("../../utils/firestore/setters");
const createProject = (app) => __awaiter(void 0, void 0, void 0, function* () {
    const meta = Object.assign({ appId: "newApp", label: "Label", theme: "development" }, app);
    const collections = ["development", "production"];
    const themes = collections.map((collection) => {
        return (0, exports.createTheme)({ id: collection });
    });
    const writeMeta = yield (0, checkers_1.checkAndUpdateDoc)({
        query: [meta.appId],
        payload: meta,
    });
    const writeThemes = yield (0, setters_1.writeBatchDocs)({
        query: [meta.appId, "themes"],
        payloads: themes,
    });
    return writeMeta;
});
exports.createProject = createProject;
const createTheme = (theme) => {
    return Object.assign({ id: "development", label: "Development", field: {}, routes: {} }, theme);
};
exports.createTheme = createTheme;
//# sourceMappingURL=worker.js.map