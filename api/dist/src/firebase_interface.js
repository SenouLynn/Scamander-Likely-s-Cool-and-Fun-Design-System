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
exports.writeToDb = exports.getProjectFromDb = exports.getAppFromDb = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const firebaseConfig_1 = __importDefault(require("../firebaseConfig"));
const createLog_1 = require("./utils/log/createLog");
const createResponseMessage_1 = require("./utils/builders/createResponseMessage");
const app = (0, app_1.initializeApp)(firebaseConfig_1.default);
const db = (0, firestore_1.getFirestore)(app);
const getAppFromDb = (app) => __awaiter(void 0, void 0, void 0, function* () {
    const querySnapshot = yield (0, firestore_1.getDocs)((0, firestore_1.collection)(db, app));
    let payload = {};
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        payload[doc.id] = doc.data();
    });
    return payload;
});
exports.getAppFromDb = getAppFromDb;
const getProjectFromDb = (project) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const querySnapshot = yield (0, firestore_1.getDoc)((0, firestore_1.doc)(db, "projects", project));
        const data = querySnapshot.data();
        if (querySnapshot.exists && data) {
            return { status: "success", id: project, payload: data };
        }
        else {
            (0, createLog_1.log)({ message: "No such document!" });
            return {
                status: "error",
                id: project,
                payload: { message: `Document doesn't exist` },
            };
        }
    }
    catch (e) {
        (0, createLog_1.log)({ message: "Error finding project: " + e });
        return {
            status: "error",
            id: project,
            payload: { message: `${"Error finding project: " + e}` },
        };
    }
});
exports.getProjectFromDb = getProjectFromDb;
const writeToDb = ({ query, payload, }) => __awaiter(void 0, void 0, void 0, function* () {
    const ref = (0, firestore_1.doc)(db, "projects", ...query);
    try {
        yield (0, firestore_1.setDoc)(ref, payload);
        (0, createResponseMessage_1.createResponse)({
            status: "success",
            payload: { message: `Wrote to db: ${query}`, payload },
        });
    }
    catch (e) {
        return (0, createResponseMessage_1.createResponse)({
            status: "error",
            payload: { message: `Error adding document:  + ${e.message}`, data: e },
        });
    }
});
exports.writeToDb = writeToDb;
//# sourceMappingURL=firebase_interface.js.map