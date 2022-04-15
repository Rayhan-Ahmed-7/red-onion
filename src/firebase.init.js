// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcPmTT7f_iCvITR_wEcvJOTPL5X_afYR4",
  authDomain: "red-onion-5ebb7.firebaseapp.com",
  projectId: "red-onion-5ebb7",
  storageBucket: "red-onion-5ebb7.appspot.com",
  messagingSenderId: "1063606238918",
  appId: "1:1063606238918:web:36c91cb2104e406cca21c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;