// src/Firebase/authService.js
import { auth } from "./firebaseConfig"; // 👈 import auth
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Signup
export const signup = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// Login
export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Logout
export const logout = () => signOut(auth);

// 👇 Export auth so ProtectedRoute can use it
export { auth };
