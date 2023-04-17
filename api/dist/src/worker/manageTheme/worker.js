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
exports.updateTheme = exports.getTheme = void 0;
const checkers_1 = require("../../utils/firestore/checkers");
const getters_1 = require("../../utils/firestore/getters");
const getTheme = ({ projectId, themeId, }) => __awaiter(void 0, void 0, void 0, function* () {
    const theme = yield (0, getters_1.getDocument)([projectId, "themes", themeId]);
    return theme;
});
exports.getTheme = getTheme;
const updateTheme = ({ projectId, themeId, payload, }) => __awaiter(void 0, void 0, void 0, function* () {
    const writeTheme = yield (0, checkers_1.updateAndAddKeyValues)({
        query: [projectId, "themes", themeId],
        payload,
    });
    return writeTheme;
});
exports.updateTheme = updateTheme;
//# sourceMappingURL=worker.js.map