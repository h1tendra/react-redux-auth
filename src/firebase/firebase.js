import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDpOpGpWByh_6EhoLYaUndyuEs-xiy207c",
    authDomain: "react-redux-auth-65156.firebaseapp.com",
    databaseURL: "https://react-redux-auth-65156.firebaseio.com",
    projectId: "react-redux-auth-65156",
    storageBucket: "react-redux-auth-65156.appspot.com",
    messagingSenderId: "493704902447",
    appId: "1:493704902447:web:76c3e3656e83d0959f13da"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
