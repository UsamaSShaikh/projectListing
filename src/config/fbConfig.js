import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDFbp9Lb3EoMm7N_Y70ZM5aUjKLHBoB_ew",
  authDomain: "marioplan-57a0b.firebaseapp.com",
  databaseURL: "https://marioplan-57a0b.firebaseio.com",
  projectId: "marioplan-57a0b",
  storageBucket: "marioplan-57a0b.appspot.com",
  messagingSenderId: "767307527770"
};
firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
