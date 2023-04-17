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
exports.updateAndAddKeyValues = exports.checkAndUpdateDoc = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const firebaseConfig_1 = __importDefault(require("../../../firebaseConfig"));
const createResponseMessage_1 = require("../builders/createResponseMessage");
const app = (0, app_1.initializeApp)(firebaseConfig_1.default);
const db = (0, firestore_1.getFirestore)(app);
const checkAndUpdateDoc = ({ query, payload, }) => __awaiter(void 0, void 0, void 0, function* () {
    const docRef = (0, firestore_1.doc)(db, "projects", ...query);
    try {
        yield (0, firestore_1.runTransaction)(db, (transaction) => __awaiter(void 0, void 0, void 0, function* () {
            const sfDoc = yield transaction.get(docRef);
            if (!sfDoc.exists()) {
                transaction.set(docRef, payload);
            }
            transaction.update(docRef, payload, { merge: true });
        }));
        return (0, createResponseMessage_1.createResponse)({
            payload: { message: `Built new project ${payload.appId}` },
        });
    }
    catch (e) {
        return (0, createResponseMessage_1.createResponse)({
            status: "error",
            payload: { message: "Could not write new project" },
        });
    }
});
exports.checkAndUpdateDoc = checkAndUpdateDoc;
const updateAndAddKeyValues = ({ query, payload, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const batch = (0, firestore_1.writeBatch)(db);
        const entries = Object.values(payload);
        entries.forEach((value) => {
            const d = (0, firestore_1.doc)(db, "projects", ...query);
            batch.update(d, value.key, value.value);
            return d;
        });
        yield batch.commit();
        return (0, createResponseMessage_1.createResponse)({
            payload: { message: `Wrote ${entries.length} docs to db` },
        });
    }
    catch (e) {
        return (0, createResponseMessage_1.createResponse)({
            payload: { status: "error", message: `Error writing batch to db` },
        });
    }
});
exports.updateAndAddKeyValues = updateAndAddKeyValues;
//# sourceMappingURL=checkers.js.map