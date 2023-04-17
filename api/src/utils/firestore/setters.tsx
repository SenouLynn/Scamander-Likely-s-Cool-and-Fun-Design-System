import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc, writeBatch } from "firebase/firestore";
import firebaseConfig from "../../../firebaseConfig";
import { createResponse } from "../builders/createResponseMessage";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const writeToDb = async ({
  query,
  payload,
}: {
  query: string[];
  payload: any;
}) => {
  const ref = doc(db, "projects", ...query);
  try {
    await setDoc(ref, payload);
    return { status: `Wrote to db: ${query}`, id: ref.id };
  } catch (e) {
    return { status: "error", id: "", error: `Error adding document:  + ${e}` };
  }
};

export const writeBatchDocs = async ({
  query,
  payloads,
}: {
  query: string[];
  payloads: any[];
}) => {
  try {
    const batch = writeBatch(db);
    payloads.forEach((payload, index) => {
      const d = doc(db, "projects", ...query, payload.id);
      batch.set(d, payloads[index]);
      return d;
    });
    await batch.commit();
    return createResponse({
      payload: { message: `Wrote ${payloads.length} docs to db` },
    });
  } catch (e) {
    return createResponse({
      payload: { status: "error", message: `Error writing batch to db` },
    });
  }
};
