// // import firebase from "../firebaseConfig"; // reference to our db
// import multer from "multer";
// import { initializeApp } from "@firebase/app";
// import { getDatabase } from "firebase/database";
// import { getStorage, uploadBytes, ref } from "firebase/storage";
// import "firebase/firestore";
// import express from "express";

// import firebaseConfig from "../firebaseConfig";
// const app = initializeApp(firebaseConfig);
// // const db = getDatabase(app);
// const storage = getStorage(app);
// const storageRef = ref(storage, "images");

// global.XMLHttpRequest = require("xhr2"); // must be used to avoid bug
// // const firestore = firebase.firestore(); // if using firestore

// //Parsing middleware
// const router = express.Router();
// const store = multer.memoryStorage();
// const upload = multer({ storage: store }).single("file");

// // // Add Image to Storage and return the file path
// const addImage = async (req, res) => {
//   try {
//     // Grab the file
//     const file = req.file;
//     // Format the filename
//     const timestamp = Date.now();
//     const name = file.originalname.split(".")[0];
//     const type = file.originalname.split(".")[1];
//     const fileName = `${name}_${timestamp}.${type}`;
//     // // Step 1. Create reference for file name in cloud storage
//     const imageRef = ref(storage, "images/" + fileName);
//     // // Step 2. Upload the file in the bucket storage
//     uploadBytes(imageRef, file).then((snapshot) => {
//       console.log("Uploaded a blob or file!");
//     });

//     // // Step 3. Grab the public url
//     // const downloadURL = await snapshot.ref.getDownloadURL();

//     //     res.send(downloadURL);
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error.message);
//   }
// };

// router.post("/upload", upload, addImage);
