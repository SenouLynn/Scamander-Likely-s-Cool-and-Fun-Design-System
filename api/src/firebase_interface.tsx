import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import firebaseConfig from "../firebaseConfig";
import { log } from "./utils/log/createLog";
import { createResponse } from "./utils/builders/createResponseMessage";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getAppFromDb = async (app: string) => {
  const querySnapshot = await getDocs(collection(db, app));

  let payload: any = {};

  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    payload[doc.id] = doc.data();
  });

  return payload;
};

export const getProjectFromDb = async (project: string) => {
  try {
    const querySnapshot = await getDoc(doc(db, "projects", project));
    const data = querySnapshot.data();
    if (querySnapshot.exists && data) {
      return { status: "success", id: project, payload: data };
    } else {
      log({ message: "No such document!" });
      return {
        status: "error",
        id: project,
        payload: { message: `Document doesn't exist` },
      };
    }
  } catch (e) {
    log({ message: "Error finding project: " + e });
    return {
      status: "error",
      id: project,
      payload: { message: `${"Error finding project: " + e}` },
    };
  }
};


// export const getAllDocs = async (query: string[]) => {
//   const ref = collection(db, "projects", ...query);
//   try {
//     const querySnapshot = await getDocs(ref);
//     let payload: any = {};
//     //Clean data here
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//       payload[doc.id] = doc.data();
//     });
//     return {
//       status: `Retrieved: ${query}`,
//       id: ref.id,
//       payload,
//     };
//   } catch (e) {
//     return {
//       status: "error",
//       id: "",
//       payload: { message: `Error adding document:  + ${e}}` },
//     };
//   }
// };
//Collection
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
    createResponse({
      status: "success",
      payload: { message: `Wrote to db: ${query}`, payload },
    });
  } catch (e) {
    return createResponse({
      status: "error",
      payload: { message: `Error adding document:  + ${e.message}`, data: e },
    });
  }
};
