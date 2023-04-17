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
exports.getDocument = exports.getAllDocs = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const firebaseConfig_1 = __importDefault(require("../../../firebaseConfig"));
const createLog_1 = require("../log/createLog");
const createResponseMessage_1 = require("../builders/createResponseMessage");
const app = (0, app_1.initializeApp)(firebaseConfig_1.default);
const db = (0, firestore_1.getFirestore)(app);
const getAllDocs = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const ref = () => (0, firestore_1.getDocs)((0, firestore_1.collection)(db, "projects", ...query));
    const response = executeCollectionFn({ dbFn: ref, query });
    return response;
});
exports.getAllDocs = getAllDocs;
const getDocument = (query) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("query", "projects", query);
    const ref = () => (0, firestore_1.getDoc)((0, firestore_1.doc)(db, "projects", ...query));
    const response = executeDocFn({ dbFn: ref });
    return response;
});
exports.getDocument = getDocument;
const executeDocFn = ({ dbFn }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doc = yield dbFn();
        if (doc.exists()) {
            (0, createLog_1.log)({ message: `${doc.id} => ${doc.data()}` });
            return (0, createResponseMessage_1.createResponse)({
                payload: { message: `Retrieved doc`, payload: doc.data() },
            });
        }
        else {
            return (0, createResponseMessage_1.createResponse)({
                payload: { message: `Doc does not exist`, payload: {} },
            });
        }
    }
    catch (e) {
        return (0, createResponseMessage_1.createResponse)({ status: "error", payload: { message: e.message } });
    }
});
const executeCollectionFn = ({ dbFn, query, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const querySnapshot = yield dbFn();
        let payload = {};
        querySnapshot.forEach((doc) => {
            (0, createLog_1.log)({ message: `${doc.id} => ${doc.data()}` });
            payload[doc.id] = doc.data();
        });
        return (0, createResponseMessage_1.createResponse)({
            payload: { message: `Retrieved ${querySnapshot.size} docs`, payload },
        });
    }
    catch (e) {
        return (0, createResponseMessage_1.createResponse)({ status: "error", payload: { message: e.message } });
    }
});
//# sourceMappingURL=getters.js.map