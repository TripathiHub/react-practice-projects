import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "smart-sip-calculator.firebaseapp.com",
  projectId: "smart-sip-calculator",
  storageBucket: "smart-sip-calculator.firebasestorage.app",
  messagingSenderId: "564293671382",
  appId: "1:564293671382:web:8e745595c26195f60aac77",
  measurementId: "G-JV5FYXSEHD"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();