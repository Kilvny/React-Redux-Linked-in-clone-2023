// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQd3MZO3n-H55DD7Ckys8vSBlEXMOXXjI",
  authDomain: "linkedin-clone-fc7ef.firebaseapp.com",
  projectId: "linkedin-clone-fc7ef",
  storageBucket: "linkedin-clone-fc7ef.appspot.com",
  messagingSenderId: "899823746374",
  appId: "1:899823746374:web:8287c60318877388fbf947",
  measurementId: "G-NMWWXP07QD"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app)
const colRef = collection(db, "collection_name");
export {db, auth,colRef}