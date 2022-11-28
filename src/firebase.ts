import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBjT2tUl01EnkkK1zdsixK0a_SZZGAI10k",
  authDomain: "linkedin-clone-c1573.firebaseapp.com",
  projectId: "linkedin-clone-c1573",
  storageBucket: "linkedin-clone-c1573.appspot.com",
  messagingSenderId: "833463371894",
  appId: "1:833463371894:web:a34f28cd1bed2fa9987757"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
