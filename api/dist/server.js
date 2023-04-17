"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/worker/getProject/routes"));
const routes_2 = __importDefault(require("./src/worker/seedProject/routes"));
const routes_get_1 = __importDefault(require("./src/worker/manageTheme/routes.get"));
const routes_post_1 = __importDefault(require("./src/worker/manageTheme/routes.post"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
const port = process.env.PORT || 8000;
app.use("/api", routes_2.default);
app.use("/api", routes_1.default);
app.use("/api", routes_get_1.default);
app.use("/api", routes_post_1.default);
app.listen(port, () => {
    console.log(`[Server]: I am running at https://localhost:${port}`);
});
//# sourceMappingURL=server.js.map