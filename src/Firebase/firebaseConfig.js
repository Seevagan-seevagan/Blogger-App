// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1pcvjBlqlORsSsZd65vODRSk3YuHifVc",
  authDomain: "bloggerapp-6bc5e.firebaseapp.com",
  projectId: "bloggerapp-6bc5e",
  storageBucket: "bloggerapp-6bc5e.firebasestorage.app",
  messagingSenderId: "565523214185",
  appId: "1:565523214185:web:5d88abc877fa76306d97f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
