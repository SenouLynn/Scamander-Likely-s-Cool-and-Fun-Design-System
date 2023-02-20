"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const fileName = "./file.json";
const file = require(fileName);
file.key = "new value";
function readFromFile() {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
            if (err) {
                console.log(err);
                return reject(err);
            }
            else {
                console.log("writing to " + fileName);
                console.log(JSON.stringify(file, null, 2));
                resolve(JSON.stringify({ success: true }));
            }
        });
    });
}
exports.default = readFromFile;
//# sourceMappingURL=writeFiles.js.map