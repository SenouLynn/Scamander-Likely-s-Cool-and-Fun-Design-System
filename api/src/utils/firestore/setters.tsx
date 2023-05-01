import { initializeApp } from "firebase/app";
import {
  doc,
  getFirestore,
  setDoc,
  writeBatch,
  updateDoc,
  deleteField,
} from "firebase/firestore";
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

export const updateFieldDoc = async ({
  query,
  key,
  value,
}: {
  query: string[];
  key: string;
  value: any;
}) => {
  const ref = doc(db, "projects", ...query);
  try {
    await updateDoc(ref, { [key]: value });
    return createResponse({
      payload: { message: `Updated ${key} to ${value}`, data: value },
    });
  } catch (e) {
    return createResponse({
      status: "error",
      payload: {
        status: "error",
        message: `Error updating ${key} to ${value}`,
        data: value,
      },
    });
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
      status: "error",
      payload: { status: "error", message: `Error writing batch to db` },
    });
  }
};

export const deleteFieldDoc = async ({
  query,
  key,
}: {
  query: string[];
  key: string;
}): Promise<ResponseMessage> => {
  const ref = doc(db, "projects", ...query);
  await updateDoc(ref, {
    [key]: deleteField(),
  });

  try {
    const ref = doc(db, "projects", ...query);
    await updateDoc(ref, {
      [key]: deleteField(),
    });

    return createResponse({
      payload: { message: `Deleted ${key}` },
    });
  } catch (e) {
    return createResponse({
      status: "error",
      payload: { message: "Could not delete", payload: e },
    });
  }
};
