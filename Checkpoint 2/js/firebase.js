
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBseXPwdKIR-1BEssuzReiQYQ4yvr74FKQ",
    authDomain: "nps-jsi15-thanh.firebaseapp.com",
    projectId: "nps-jsi15-thanh",
    storageBucket: "nps-jsi15-thanh.appspot.com",
    messagingSenderId: "859553841732",
    appId: "1:859553841732:web:50721e2adf2784cda43211",
    measurementId: "G-182F1ZG93V"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

