// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA67sN5k7z2WOD5EObnWwWN3vmo1WKy7nM",
  authDomain: "pantry-tracker-320d9.firebaseapp.com",
  projectId: "pantry-tracker-320d9",
  storageBucket: "pantry-tracker-320d9.appspot.com",
  messagingSenderId: "115127869727",
  appId: "1:115127869727:web:31e8ed85e87198a0d7502a",
  measurementId: "G-3L7XJJFZQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore=getFirestore(app)

export {firestore}