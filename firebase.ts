// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4p7K_LS0qif-yNURFTw_4Ay1wxO1fTIc",
  authDomain: "sales-app-c1178.firebaseapp.com",
  projectId: "sales-app-c1178",
  storageBucket: "sales-app-c1178.appspot.com",
  messagingSenderId: "23329758155",
  appId: "1:23329758155:web:100c2dc3b453bcc5a4f44e",
  measurementId: "G-Q3TP9KQDY1"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const db = getFirestore(app);
const auth = getAuth(app);

export { provider, auth };
export default db;