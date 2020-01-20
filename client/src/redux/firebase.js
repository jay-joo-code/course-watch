import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCk2SnGLj0zo_cB0yZHO1NaIXgbr2eAS40",
  authDomain: "course-watch-2f3dc.firebaseapp.com",
  databaseURL: "https://course-watch-2f3dc.firebaseio.com",
  projectId: "course-watch-2f3dc",
  storageBucket: "course-watch-2f3dc.appspot.com",
  messagingSenderId: "894672422828",
  appId: "1:894672422828:web:04a1dbf339a4ca41449c09",
  measurementId: "G-PTQ2VEMR87"

};

firebase.initializeApp(firebaseConfig);

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {})
  .catch(function({ code, message }) {
  });

export default firebase;