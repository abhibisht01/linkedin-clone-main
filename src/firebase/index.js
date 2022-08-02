import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDsjekxjPXuzyq4pTMzQ_GXsKNmzQSHowI",
    authDomain: "lkdn-cl.firebaseapp.com",
    projectId: "lkdn-cl",
    storageBucket: "lkdn-cl.appspot.com",
    messagingSenderId: "356992772710",
    appId: "1:356992772710:web:ae431d75d798740b3e1ba7",
    measurementId: "G-D1WE7M01ZQ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;


