import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjT2tUl01EnkkK1zdsixK0a_SZZGAI10k",
  authDomain: "linkedin-clone-c1573.firebaseapp.com",
  projectId: "linkedin-clone-c1573",
  storageBucket: "linkedin-clone-c1573.appspot.com",
  messagingSenderId: "833463371894",
  appId: "1:833463371894:web:a34f28cd1bed2fa9987757",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
