// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9PuHJD422BTixlRbGdL17FTIIO6mV1vU",
  authDomain: "fosstube1.firebaseapp.com",
  projectId: "fosstube1",
  storageBucket: "fosstube1.appspot.com",
  messagingSenderId: "166548574044",
  appId: "1:166548574044:web:b852486fb6ca6587127b99",
  measurementId: "G-P3RE26DVCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);