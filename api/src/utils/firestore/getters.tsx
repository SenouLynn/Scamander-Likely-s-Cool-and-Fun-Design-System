import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";
import firebaseConfig from "../../../firebaseConfig";
import { log } from "../log/createLog";
import { createResponse } from "../builders/createResponseMessage";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Get all docs from a collection
export const getAllDocs = async (query: string[]) => {
  const ref = () => getDocs(collection(db, "projects", ...query));
  const response = executeCollectionFn({ dbFn: ref, query });
  return response;
};

//Get a single document from a colle
export const getDocument = async (query: string[]) => {
  console.log("query", "projects", query);
  const ref = () => getDoc(doc(db, "projects", ...query));
  const response = executeDocFn({ dbFn: ref });
  return response;
};


//Execute functions
const executeDocFn = async ({ dbFn }: { dbFn: any }) => {
  try {
    const doc = await dbFn();
    if (doc.exists()) {
      log({ message: `${doc.id} => ${doc.data()}` });
      return createResponse({
        payload: { message: `Retrieved doc`, payload: doc.data() },
      });
    } else {
      return createResponse({
        payload: { message: `Doc does not exist`, payload: {} },
      });
    }
  } catch (e) {
    return createResponse({ status: "error", payload: { message: e.message } });
  }
};

const executeCollectionFn = async ({
  dbFn,
  query,
}: {
  dbFn: any;
  query?: string[];
}) => {
  try {
    const querySnapshot = await dbFn();

    let payload: any = {};
    //Clean data here
    querySnapshot.forEach((doc: any) => {
      log({ message: `${doc.id} => ${doc.data()}` });
      payload[doc.id] = doc.data();
    });
    return createResponse({
      payload: { message: `Retrieved ${querySnapshot.size} docs`, payload },
    });
  } catch (e) {
    return createResponse({ status: "error", payload: { message: e.message } });
  }
};
