// config/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import dotenv from "dotenv";
dotenv.config(); // make sure env is loaded
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
console.log("Firebase Config:", firebaseConfig);
console.log("FIREBASE STORAGE BUCKET:", process.env.FIREBASE_STORAGE_BUCKET);
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export  {storage};
