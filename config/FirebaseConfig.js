// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
  authDomain: "mscheduler-2add5.firebaseapp.com",
  projectId: "mscheduler-2add5",
  storageBucket: "mscheduler-2add5.appspot.com",
  messagingSenderId: "84781237805",
  appId: "1:84781237805:web:249075764bdf21dc705aa4",
  measurementId: "G-LTNE7GN2LP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
