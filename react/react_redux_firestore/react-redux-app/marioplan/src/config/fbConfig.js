import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDZAqlZ-hKk1WtphPzDM-vIHV3kkgpwykQ",
  authDomain: "marioplan-34284.firebaseapp.com",
  databaseURL: "https://marioplan-34284.firebaseio.com",
  projectId: "marioplan-34284",
  storageBucket: "marioplan-34284.appspot.com",
  messagingSenderId: "312709431351"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;