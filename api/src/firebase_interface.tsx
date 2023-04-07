import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//Read from db
export const getCollection = async (col: string) => {
  const querySnapshot = await getDocs(collection(db, "freshPressed"));
  let payload: any = [];
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    payload.push(doc.data());
  });
  return payload;
};

//Write to db
