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
exports.deleteFieldDoc = exports.writeBatchDocs = exports.updateFieldDoc = exports.writeToDb = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const firebaseConfig_1 = __importDefault(require("../../../firebaseConfig"));
const createResponseMessage_1 = require("../builders/createResponseMessage");
const app = (0, app_1.initializeApp)(firebaseConfig_1.default);
const db = (0, firestore_1.getFirestore)(app);
const writeToDb = ({ query, payload, }) => __awaiter(void 0, void 0, void 0, function* () {
    const ref = (0, firestore_1.doc)(db, "projects", ...query);
    try {
        yield (0, firestore_1.setDoc)(ref, payload);
        return { status: `Wrote to db: ${query}`, id: ref.id };
    }
    catch (e) {
        return { status: "error", id: "", error: `Error adding document:  + ${e}` };
    }
});
exports.writeToDb = writeToDb;
const updateFieldDoc = ({ query, key, value, }) => __awaiter(void 0, void 0, void 0, function* () {
    const ref = (0, firestore_1.doc)(db, "projects", ...query);
    try {
        yield (0, firestore_1.updateDoc)(ref, { [key]: value });
        return (0, createResponseMessage_1.createResponse)({
            payload: { message: `Updated ${key} to ${value}`, data: value },
        });
    }
    catch (e) {
        return (0, createResponseMessage_1.createResponse)({
            status: "error",
            payload: {
                status: "error",
                message: `Error updating ${key} to ${value}`,
                data: value,
            },
        });
    }
});
exports.updateFieldDoc = updateFieldDoc;
const writeBatchDocs = ({ query, payloads, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const batch = (0, firestore_1.writeBatch)(db);
        payloads.forEach((payload, index) => {
            const d = (0, firestore_1.doc)(db, "projects", ...query, payload.id);
            batch.set(d, payloads[index]);
            return d;
        });
        yield batch.commit();
        return (0, createResponseMessage_1.createResponse)({
            payload: { message: `Wrote ${payloads.length} docs to db` },
        });
    }
    catch (e) {
        return (0, createResponseMessage_1.createResponse)({
            status: "error",
            payload: { status: "error", message: `Error writing batch to db` },
        });
    }
});
exports.writeBatchDocs = writeBatchDocs;
const deleteFieldDoc = ({ query, key, }) => __awaiter(void 0, void 0, void 0, function* () {
    const ref = (0, firestore_1.doc)(db, "projects", ...query);
    yield (0, firestore_1.updateDoc)(ref, {
        [key]: (0, firestore_1.deleteField)(),
    });
    try {
        const ref = (0, firestore_1.doc)(db, "projects", ...query);
        yield (0, firestore_1.updateDoc)(ref, {
            [key]: (0, firestore_1.deleteField)(),
        });
        return (0, createResponseMessage_1.createResponse)({
            payload: { message: `Deleted ${key}` },
        });
    }
    catch (e) {
        return (0, createResponseMessage_1.createResponse)({
            status: "error",
            payload: { message: "Could not delete", payload: e },
        });
    }
});
exports.deleteFieldDoc = deleteFieldDoc;
//# sourceMappingURL=setters.js.map