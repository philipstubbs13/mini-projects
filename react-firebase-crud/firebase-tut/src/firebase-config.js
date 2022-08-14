import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBcG6LzFLA9KlXQcA11W8YCCKCvpA_eXkc",
    authDomain: "fir-tutorial-42bfe.firebaseapp.com",
    projectId: "fir-tutorial-42bfe",
    storageBucket: "fir-tutorial-42bfe.appspot.com",
    messagingSenderId: "973321491668",
    appId: "1:973321491668:web:cb1ad893d6020e4d2b9741",
    measurementId: "G-4M0SG30RER"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);