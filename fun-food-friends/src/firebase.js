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
export default firebase;