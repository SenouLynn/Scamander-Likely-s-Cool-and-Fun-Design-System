"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAppObject = void 0;
const createAppObject = (app) => {
    return Object.assign({ themes: {
            production: {},
            development: {
                pages: {},
                components: {},
                field: {},
                routes: {},
                defaultStyles: {},
            },
        } }, app);
};
exports.createAppObject = createAppObject;
//# sourceMappingURL=helpers.js.map