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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeToFile = void 0;
const fs_1 = __importDefault(require("fs"));
function readFromFile(file) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve, reject) => {
            fs_1.default.readFile(file, function (err, data) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                else {
                    resolve(JSON.parse(data));
                }
            });
        });
    });
}
exports.default = readFromFile;
const writeToFile = (path, data) => __awaiter(void 0, void 0, void 0, function* () {
    const fileName = "../api/src/assets/testFile.json";
    let file = yield readFromFile(fileName);
    file = data;
    yield fs_1.default.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
        return __awaiter(this, void 0, void 0, function* () {
            if (err)
                return console.log(err);
            console.log(JSON.stringify(file, null, 2));
            console.log("writing to " + fileName);
            return true;
        });
    });
});
exports.writeToFile = writeToFile;
//# sourceMappingURL=readFiles.js.map