// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDhIqhU7U3lzvBTyxiLxeEDShBB2joHL9M",
  authDomain: "arrownapx.firebaseapp.com",
  projectId: "arrownapx",
  storageBucket: "arrownapx.appspot.com",
  messagingSenderId: "527878991188",
  appId: "1:527878991188:web:00ff0cc9d27ca2a877ecc1",
  measurementId: "G-R0F7D6DBNR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();
// export {auth , provider, storage}
export default db;
