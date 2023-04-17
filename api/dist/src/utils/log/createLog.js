"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const log = ({ message, flavor = "log", }) => {
    const turnLogsOn = true;
    if (turnLogsOn) {
        switch (flavor) {
            case "log":
                return console.log(message);
            case "warn":
                return console.warn(message);
            default:
                return console.log(message);
        }
    }
};
exports.log = log;
//# sourceMappingURL=createLog.js.map