import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD79qwiQ3R7nvThin2wnzORpFAJJQnqE0U",
  authDomain: "awixstore-c11bf.firebaseapp.com",
  databaseURL: "https://awixstore-c11bf.firebaseio.com",
  projectId: "awixstore-c11bf",
  storageBucket: "awixstore-c11bf.appspot.com",
  messagingSenderId: "136797185468",
  appId: "1:136797185468:web:d2babc0c3a2455de40b7b9",
  measurementId: "G-48XYC89NJY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
