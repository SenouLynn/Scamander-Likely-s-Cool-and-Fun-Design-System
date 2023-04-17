"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwError = void 0;
const throwError = ({ res, code, message, payload }) => {
  res.status(code).send(message);
};
exports.throwError = throwError;
//# sourceMappingURL=throwError.js.map
