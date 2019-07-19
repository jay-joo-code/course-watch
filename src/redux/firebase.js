// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: insert firebase config
var firebaseConfig = {
};
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
