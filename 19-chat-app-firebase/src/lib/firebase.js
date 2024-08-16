import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "chat-app-firebase-ffac3.firebaseapp.com",
  projectId: "chat-app-firebase-ffac3",
  storageBucket: "chat-app-firebase-ffac3.appspot.com",
  messagingSenderId: "972292586242",
  appId: "1:972292586242:web:49fc3d716a407ac0c3a01b",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
