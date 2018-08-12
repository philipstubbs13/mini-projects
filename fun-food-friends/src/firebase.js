// src/firebase.js
import firebase from 'firebase'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCbBkzxgH_qpR4iJMr6HzxuSwvK4ucEQcQ",
  authDomain: "fun-food-friends-c9459.firebaseapp.com",
  databaseURL: "https://fun-food-friends-c9459.firebaseio.com",
  projectId: "fun-food-friends-c9459",
  storageBucket: "fun-food-friends-c9459.appspot.com",
  messagingSenderId: "883061115772"
};
firebase.initializeApp(config);
// This exports the auth module of Firebase, as well as the Google Auth Provider so that we'll be able to use Google Authentication for sign in anywhere inside of our application
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;