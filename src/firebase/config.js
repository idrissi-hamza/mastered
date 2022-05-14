import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMDtLDHWxr-9s7eOyqnV_TlCSLQBQGHx4",
  authDomain: "mastered-f6936.firebaseapp.com",
  projectId: "mastered-f6936",
  storageBucket: "mastered-f6936.appspot.com",
  messagingSenderId: "997419166952",
  appId: "1:997419166952:web:f0dafaf85689c22550ed5d",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestampexport;

export { projectAuth, projectFirestore, timestamp };
