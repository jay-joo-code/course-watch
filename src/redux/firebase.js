// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyD9yCkVyKEhUvoMtfqpGYTkg6ox0PxZo8g",
    authDomain: "cornell-course-watch.firebaseapp.com",
    databaseURL: "https://cornell-course-watch.firebaseio.com",
    projectId: "cornell-course-watch",
    storageBucket: "",
    messagingSenderId: "963179578048",
    appId: "1:963179578048:web:309105f9e46f177f"
};
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });

export default firebase;