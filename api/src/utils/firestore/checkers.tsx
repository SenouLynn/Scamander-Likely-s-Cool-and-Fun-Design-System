import { initializeApp } from "firebase/app";
import {
  doc,
  getFirestore,
  runTransaction,
  writeBatch,
} from "firebase/firestore";
import firebaseConfig from "../../../firebaseConfig";
import { createResponse } from "../builders/createResponseMessage";
import { log } from "../log/createLog";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const checkAndUpdateDoc = async ({
  query,
  payload,
}: {
  query?: string[];
  payload: any;
}): Promise<ResponseMessage> => {
  const docRef = doc(db, "projects", ...query);

  try {
    await runTransaction(db, async (transaction) => {
      const sfDoc = await transaction.get(docRef);
      if (!sfDoc.exists()) {
        transaction.set(docRef, payload);
      }
      transaction.update(docRef, payload, { merge: true });
    });
    return createResponse({
      payload: { message: `Built new project ${payload.appId}` },
    });
  } catch (e) {
    return createResponse({
      status: "error",
      payload: { message: "Could not write new project" },
    });
  }
};

export const updateAndAddKeyValues = async ({
  query,
  payload,
}: {
  query?: string[];
  payload: ComponentPayloadShapeSet;
}) => {
  try {
    const batch = writeBatch(db);
    const entries = Object.values(payload);

    entries.forEach((value) => {
      const d = doc(db, "projects", ...query);
      batch.update(d, value.key, value.value);
      return d;
    });

    await batch.commit();
    
    return createResponse({
      payload: { message: `Wrote ${entries.length} docs to db` },
    });
  } catch (e) {
    return createResponse({
      payload: { status: "error", message: `Error writing batch to db` },
    });
  }
};
