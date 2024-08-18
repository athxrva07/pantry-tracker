// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQSDEwSAupTFBYBYIwLmvPkS3iDoeh2Qg",
  authDomain: "pantry-tracker-ed111.firebaseapp.com",
  projectId: "pantry-tracker-ed111",
  storageBucket: "pantry-tracker-ed111.appspot.com",
  messagingSenderId: "522325354559",
  appId: "1:522325354559:web:3dae53da30e21069bf708a",
  measurementId: "G-6KB9HRGRXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}