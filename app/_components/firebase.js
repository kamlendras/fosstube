// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDDeQqelePMDOwcRq-eifUw6gkfQRUMpyQ",
  authDomain: "x3267-598e2.firebaseapp.com",
  projectId: "x3267-598e2",
  storageBucket: "x3267-598e2.appspot.com",
  messagingSenderId: "1082285561556",
  appId: "1:1082285561556:web:7fab449f55d91b5c5f0d41"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();
// export {auth , provider, storage}
export default db;
