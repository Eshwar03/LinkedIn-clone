import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJNEimgL6S187Cn_iB-zIJiiSaBu4vb24",
  authDomain: "linkedin-clone-145df.firebaseapp.com",
  projectId: "linkedin-clone-145df",
  storageBucket: "linkedin-clone-145df.appspot.com",
  messagingSenderId: "29772982242",
  appId: "1:29772982242:web:bf95dd2852b3459c4a7bbb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
