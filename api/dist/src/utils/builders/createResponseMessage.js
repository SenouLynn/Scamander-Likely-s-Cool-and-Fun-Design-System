"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResponse = exports.throwError = void 0;
const throwError = ({ res, code, message, payload, }) => {
    res.status(code).send(message);
};
exports.throwError = throwError;
const codes = {
    200: "success",
    400: "error",
};
const createResponse = ({ status = "success", payload, }) => {
    const code = Object.keys(codes).find((key) => codes[key] === status);
    return {
        status: "success",
        code,
        payload,
    };
};
exports.createResponse = createResponse;
//# sourceMappingURL=createResponseMessage.js.map