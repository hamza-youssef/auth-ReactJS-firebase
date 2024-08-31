import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAndiREgiVb00o1o_qRXdKTWebR-0OPziY",
  authDomain: "chat-c0249.firebaseapp.com",
  projectId: "chat-c0249",
  storageBucket: "chat-c0249.appspot.com",
  messagingSenderId: "661600961709",
  appId: "1:661600961709:web:3589b3caa4df4967993224",
  measurementId: "G-57Y5WB7H63"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
