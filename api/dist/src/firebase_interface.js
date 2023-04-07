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
exports.getCollection = void 0;
const firestore_1 = require("firebase/firestore");
const app_1 = require("firebase/app");
const firebaseConfig_1 = __importDefault(require("../firebaseConfig"));
const firestore_2 = require("firebase/firestore");
const app = (0, app_1.initializeApp)(firebaseConfig_1.default);
const db = (0, firestore_1.getFirestore)(app);
const getCollection = (col) => __awaiter(void 0, void 0, void 0, function* () {
    const querySnapshot = yield (0, firestore_2.getDocs)((0, firestore_2.collection)(db, "freshPressed"));
    let payload = [];
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        payload.push(doc.data());
    });
    return payload;
});
exports.getCollection = getCollection;
//# sourceMappingURL=firebase_interface.js.map