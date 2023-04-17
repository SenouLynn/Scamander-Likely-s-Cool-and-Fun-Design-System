import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import firebaseConfig from "../firebaseConfig";
import { log } from "./utils/log/createLog";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//Read from db
export const getAppFromDb = async (app: string) => {
  //collection
  const querySnapshot = await getDocs(collection(db, app));
  let payload: any = {};
  //Clean data here
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

export const createProjectInDb = async ({
  project,
  payload,
}: {
  project: string;
  payload: Project;
}) => {
  try {
    await setDoc(doc(db, "projects", project), payload);

    return { status: "success", id: project, payload: payload };
  } catch (e) {
    console.error("Error adding document: ", e);
    return {
      status: "error",
      id: project,
      payload: payload,
      error: "Error adding document: ",
      e,
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
    return { status: `Wrote to db: ${query}`, id: ref.id };
  } catch (e) {
    return { status: "error", id: "", error: `Error adding document:  + ${e}` };
  }
};
