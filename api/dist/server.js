"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const readFiles_1 = __importDefault(require("./src/readFiles"));
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
    ];
    Promise.all(promises).then((result) => {
        console.log(result);
        const componentList = result[0];
        const defaultStyles = result[1];
        const controlOptions = result[2];
        res.send({ defaultStyles, componentList, controlOptions });
    });
});
app.post("/api/updateStyles", (req, res) => {
    let styles = req.body.styles;
    let componentId = req.body.componentId;
    let defaultId = req.body.defaultId;
});
app.listen(port, () => {
    console.log(`[Server]: I am running at https://localhost:${port}`);
});
//# sourceMappingURL=server.js.map