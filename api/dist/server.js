"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const readFiles_1 = __importStar(require("./src/readFiles"));
const firebase_interface_1 = require("./src/firebase_interface");
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
const port = process.env.PORT || 8000;
app.get("/test", (req, res) => {
    console.log(res);
    res.send(JSON.stringify({ test: "test" }));
});
console.log(JSON.stringify((0, readFiles_1.default)("./src/assets/component.manifest.json")));
app.get("/api/getAll", (req, res) => {
    const promises = [
        (0, readFiles_1.default)("./src/assets/component.manifest.json"),
        (0, readFiles_1.default)("./src/assets/default.manifest.json"),
        (0, readFiles_1.default)("./src/assets/controlOptions.manifest.json"),
        (0, readFiles_1.default)("./src/assets/pages.manifest.json"),
        (0, readFiles_1.default)("./src/assets/routes.manifest.json"),
    ];
    Promise.all(promises).then((result) => {
        const componentList = result[0];
        const defaultStyles = result[1];
        const controlOptions = result[2];
        const pages = result[3];
        const routes = result[4];
        res.send({ defaultStyles, componentList, controlOptions, pages, routes });
    });
});
app.post("/api/updateComponent", (req, res) => {
    let componentList = req.body;
    (0, readFiles_1.writeToFile)("./src/assets/testFile.json", componentList.pack);
});
app.get("/api/getCollection", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const collection = yield (0, firebase_interface_1.getCollection)("");
    res.send(collection);
}));
app.listen(port, () => {
    console.log(`[Server]: I am running at https://localhost:${port}`);
});
//# sourceMappingURL=server.js.map