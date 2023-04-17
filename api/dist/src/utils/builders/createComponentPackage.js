"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponentPackage = void 0;
const createComponentPackage = ({ props, pack, }) => {
    var _a, _b;
    let component = Object.assign({ role: "wrapper", location: (props === null || props === void 0 ? void 0 : props.location) || "0", label: "", componentId: (props === null || props === void 0 ? void 0 : props.componentId) || `location-${pack === null || pack === void 0 ? void 0 : pack.location}`, defaultStyleId: (props === null || props === void 0 ? void 0 : props.defaultStyleId) || "", childIds: [], styles: Object.assign(Object.assign(Object.assign({}, pack === null || pack === void 0 ? void 0 : pack.styles), props === null || props === void 0 ? void 0 : props.styles), { className: [(_a = props === null || props === void 0 ? void 0 : props.styles) === null || _a === void 0 ? void 0 : _a.className, (_b = pack === null || pack === void 0 ? void 0 : pack.styles) === null || _b === void 0 ? void 0 : _b.className].join(" ") }), subComponents: (props === null || props === void 0 ? void 0 : props.subComponents) || [], children: [] }, pack);
    return component;
};
exports.createComponentPackage = createComponentPackage;
//# sourceMappingURL=createComponentPackage.js.map