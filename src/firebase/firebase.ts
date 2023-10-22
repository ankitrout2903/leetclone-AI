// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDkEIlPhM1U11cj1sXArUI0eMhnRAiUzo",
  authDomain: "leetcode-4d242.firebaseapp.com",
  projectId: "leetcode-4d242",
  storageBucket: "leetcode-4d242.appspot.com",
  messagingSenderId: "775328277715",
  appId: "1:775328277715:web:739d086affd1beca7c6026"
};

// Initialize Firebase
const app = !getApps.lenght ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore , app}