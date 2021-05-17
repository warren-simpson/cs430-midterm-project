import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCMsyEfQl0RYOTVLfiFvk99I0cRHhmYtNk",
  authDomain: "trains-6d50a.firebaseapp.com",
  projectId: "trains-6d50a",
  storageBucket: "trains-6d50a.appspot.com",
  messagingSenderId: "372492853931",
  appId: "1:372492853931:web:6b45d5e7bbe5ec882bcdee",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
