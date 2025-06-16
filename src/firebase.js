// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyId0nYrwRwedW-_et0210Wy-RTDcAqvs",
  authDomain: "shaikhayazuniversity.firebaseapp.com",
  projectId: "shaikhayazuniversity",
  storageBucket: "shaikhayazuniversity.appspot.com",
  messagingSenderId: "140393259949",
  appId: "1:140393259949:web:7a12e7bbc87e688585f724"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore database
const db = getFirestore(app);

export default db;
